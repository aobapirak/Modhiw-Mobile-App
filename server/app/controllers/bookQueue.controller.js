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

module.exports = {
    BookQueue
}