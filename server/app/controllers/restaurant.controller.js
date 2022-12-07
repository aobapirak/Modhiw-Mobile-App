const pool = require("../config/database");

const getMenu = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurantName = req.query.restaurantName;
        db.query("SELECT menu_name, price, restaurant_name FROM menu_t WHERE restaurant_name = ?", [restaurantName],
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

const getCategory = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurantName = req.query.restaurantName;
        db.query("SELECT category FROM category_t c JOIN menu_t m ON c.menu_name = m.menu_name WHERE m.restaurant_name = ? GROUP BY c.category", [restaurantName],
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
    getMenu,
    getCategory
}