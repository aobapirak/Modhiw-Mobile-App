const pool = require("../config/database");

const getRestaurantList = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query("SELECT * FROM restaurant",
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
    getRestaurantList
}