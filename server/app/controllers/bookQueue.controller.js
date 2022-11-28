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
        db.query(`INSERT INTO queue_log (restaurant_name, phone_number, menu_name, ingredient, note, order_status) VALUES (?, ?, ?, ?, ?, ?)`,
        [restaurant_name, phone_number, menu_name, ingredient, note, order_status],
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
        db.query(`SELECT q.queue_id, q.queue_id-(SELECT MIN(queue_id) FROM queue_log WHERE order_status = 0 GROUP BY restaurant_name)+1 
        AS queue_wait, q.restaurant_name, r.area, q.menu_name, q.ingredient, q.note FROM user_t u JOIN queue_log q ON u.phone_number = q.phone_number 
        JOIN restaurant r ON q.restaurant_name = r.restaurant_name WHERE q.order_status < 2 AND u.phone_number = ?;`,
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

const getLastQueue  = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query(`select queue_id from queue_log ORDER BY queue_id DESC LIMIT 1;`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
                console.log(result);
            }
            db.release();
        });
    });
}


module.exports = {
    BookQueue,
    getQueue,
    getLastQueue
}