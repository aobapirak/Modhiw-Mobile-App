const pool = require("../config/database");

const addIngredient = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurantName = req.body.restaurant_name;
        const ingredient = req.body.name;
        const price = parseInt(req.body.price);
        db.query(`INSERT INTO ingredient_t (ingredient, restaurant_name, price_adjust) VALUES (?, ?, ?)`,
        [ingredient, restaurantName, price],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({'error':err});
                db.release();
                return;
            } else {
                res.send(result);
            }
            db.release();
        });
    });
}

const addToping = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurantName = req.body.restaurant_name;
        const toping = req.body.name;
        const price = parseInt(req.body.price);
        console.log(restaurantName, toping, price);
        console.log(typeof price);
        db.query(`INSERT INTO toping_t (toping, restaurant_name, price_adjust) VALUES (?, ?, ?)`,
        [toping, restaurantName, price],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({'error':err});
                db.release();
                return;
            } else {
                res.send(result);
            }
            db.release();
        });
    });
}

module.exports = {
    addIngredient,
    addToping
}