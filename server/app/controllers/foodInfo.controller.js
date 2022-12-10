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


const getStatusCheck = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurantName = req.query.restaurantName;
        const ingredient = req.query.ingredient;
        db.query(`SELECT r.restaurant_name, r.restaurant_status, i.ingredient_status FROM restaurant r 
        JOIN ingredient_t i on r.restaurant_name = i.restaurant_name WHERE r.restaurant_name = ? AND i.ingredient = ?`, [restaurantName,ingredient],
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
    getToping,
    getStatusCheck
}