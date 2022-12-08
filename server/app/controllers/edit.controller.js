const pool = require("../config/database");

const getIngredientStatus = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const ingredient = req.query.ingredient;
        const restaurant_name = req.query.restaurant_name;
        db.query(`SELECT ingredient_status FROM ingredient_t WHERE ingredient = ? AND restaurant_name = ?`,
        [ingredient, restaurant_name],
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

const updateIngredient = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurant_name = req.body.restaurant_name;
        const ingredient_price = req.body.newPrice;
        const old_ingredient_name = req.body.oldName;
        db.query("UPDATE ingredient_t SET price_adjust = ? WHERE restaurant_name = ? AND ingredient = ?",
        [ingredient_price, restaurant_name, old_ingredient_name],
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

const updateIngredientStatus = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurant_name = req.body.restaurant_name;
        const ingredient = req.body.ingredient;
        const status = req.body.status;
        db.query("UPDATE ingredient_t SET ingredient_status = ? WHERE restaurant_name = ? AND ingredient = ?",
        [status, restaurant_name, ingredient],
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

const getTopingStatus = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const toping = req.query.toping;
        const restaurant_name = req.query.restaurant_name;
        db.query(`SELECT toping_status FROM toping_t WHERE toping = ? AND restaurant_name = ?`,
        [toping, restaurant_name],
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

const updateToping = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurant_name = req.body.restaurant_name;
        const toping_name = req.body.newName;
        const toping_price = req.body.newPrice;
        const old_toping_name = req.body.oldName;
        db.query("UPDATE toping_t SET toping = ?, price_adjust = ? WHERE restaurant_name = ? AND toping = ?",
        [toping_name, toping_price, restaurant_name, old_toping_name],
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

const updateTopingStatus = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurant_name = req.body.restaurant_name;
        const toping = req.body.toping;
        const status = req.body.status;
        db.query("UPDATE toping_t SET toping_status = ? WHERE restaurant_name = ? AND toping = ?",
        [status, restaurant_name, toping],
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

const deleteToping = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const restaurant_name = req.query.restaurant_name;
        const toping = req.query.toping;
        db.query("DELETE FROM toping_t WHERE restaurant_name = ? AND toping = ?",
        [restaurant_name, toping],
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
    getIngredientStatus,
    updateIngredient,
    getTopingStatus,
    updateToping,
    updateTopingStatus,
    updateIngredientStatus,
    deleteToping
}