const pool = require("../config/database");


const updateRestaurantStatus = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurant_status = req.body.restaurant_status;
        const restaurant_name = req.body.restaurant_name;
        db.query("UPDATE restaurant SET restaurant_status = ? WHERE restaurant_name = ?",
        [restaurant_status, restaurant_name],
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
    updateRestaurantStatus
}