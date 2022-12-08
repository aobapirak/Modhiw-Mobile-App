const pool = require("../config/database");
const getIngredient = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurantName = req.query.restaurant_name;
        db.query("SELECT ingredient, price_adjust, restaurant_name FROM ingredient_t WHERE restaurant_name = ?", [restaurantName],
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
const getToping = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurantName = req.query.restaurant_name;
        db.query("SELECT toping, price_adjust, restaurant_name FROM toping_t WHERE restaurant_name = ?", [restaurantName],
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
    getIngredient,
    getToping
}