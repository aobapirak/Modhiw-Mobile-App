const pool = require("../config/database");

const BookQueue = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        
        const restaurant_name = req.body.restaurant_name;
        const phone_number = req.body.phone_number;
        const menu_name = req.body.menu_name;
        const ingredient = req.body.ingredient;
        const note = req.body.note;
        const order_status = 0;
        const queueID = req.body.lastQueue+1;
        db.query(`INSERT INTO queue_log (restaurant_name, phone_number, menu_name, ingredient, note, order_status, queue_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [restaurant_name, phone_number, menu_name, ingredient, note, order_status, queueID],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
    });
}

const getQueue = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        
        const phone_number = req.query.phoneNumber;
        db.query(`SELECT q.queue_id, (SELECT COUNT(*) FROM queue_log WHERE order_status = 0 AND restaurant_name = q.restaurant_name 
        AND queue_id < q.queue_id) +1 AS queue_wait, q.restaurant_name, r.area, q.menu_name, q.ingredient, q.note, q.order_status FROM user_t u JOIN queue_log q 
        ON u.phone_number = q.phone_number JOIN restaurant r ON q.restaurant_name = r.restaurant_name WHERE q.order_status < 2 AND u.phone_number = ?;`,
        [phone_number],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
    });
}

module.exports = {
    BookQueue,
    getQueue
}