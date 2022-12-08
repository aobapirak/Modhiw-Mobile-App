const pool = require("../config/database");

const getOrderList = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurant_name = req.query.restaurantName;
        db.query("SELECT * FROM queue_log WHERE restaurant_name = ? AND order_status = 0 OR order_status = 1",
        [restaurant_name],
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

const updateStatus = (req, res) => {
    console.log(req.body.status);
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const order_status = req.body.status;
        const queue_id = req.body.queue_id;
        db.query("UPDATE queue_log SET order_status = ? WHERE queue_id = ?",
        [order_status, queue_id],
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
    getOrderList,
    updateStatus
}