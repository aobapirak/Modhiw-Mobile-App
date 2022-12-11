const pool = require("../config/database");

const getIngredient = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurantName = req.query.restaurant_name;
    const ingredient_status = req.query.ingredient_status;
    db.query(
      "SELECT ingredient, price_adjust, restaurant_name FROM ingredient_t WHERE restaurant_name = ? AND ingredient_status != ?",
      [restaurantName, ingredient_status],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
        db.release();
      }
    );
  });
};

const getToping = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurantName = req.query.restaurant_name;
    const toping_status = req.query.toping_status;
    db.query(
      "SELECT toping, price_adjust, restaurant_name FROM toping_t WHERE restaurant_name = ? AND toping_status != ?",
      [restaurantName, toping_status],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
        db.release();
      }
    );
  });
};

const getStatusCheck = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurantName = req.query.restaurantName;
    const ingredient = req.query.ingredient;
    db.query(
      `SELECT r.restaurant_name, r.restaurant_status, i.ingredient_status FROM restaurant r 
        JOIN ingredient_t i on r.restaurant_name = i.restaurant_name WHERE r.restaurant_name = ? AND i.ingredient = ?`,
      [restaurantName, ingredient],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
        db.release();
      }
    );
  });
};

const getLastQueue = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    db.query(
      `select queue_id from queue_log ORDER BY queue_id DESC LIMIT 1;`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
        db.release();
      }
    );
  });
};

module.exports = {
  getIngredient,
  getToping,
  getStatusCheck,
  getLastQueue,
};
