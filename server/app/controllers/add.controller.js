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

const addMenu = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurantName = req.body.restaurant_name;
        const menu_name = req.body.menu_name;
        const price = parseInt(req.body.price);
        const picture = req.body.picture;
        db.query(`INSERT INTO menu_t (menu_name, restaurant_name, price, picture) VALUES (?, ?, ?, ?)`,
        [menu_name, restaurantName, price, picture],
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

const addToCategory = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const menu_name = req.body.menu_name;
        const category = req.body.category;
        db.query(`INSERT INTO category_t (menu_name, category) VALUES (?, ?)`,
        [menu_name, category],
        (err, result) => {
            if (err) {
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
    addToping,
    addMenu,
    addToCategory
}