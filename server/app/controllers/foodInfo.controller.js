const pool = require("../config/database");

const getIngredient = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurantName = req.query.restaurant_name;
        db.query("SELECT ingredient, price_adjust, restaurant_name FROM ingredient_t WHERE restaurant_name = ? AND ingredient_status = 1", [restaurantName],
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
        db.query("SELECT toping, price_adjust, restaurant_name FROM toping_t WHERE restaurant_name = ? AND toping_status = 1", [restaurantName],
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
    getIngredient,
    getToping,
    getLastQueue
}