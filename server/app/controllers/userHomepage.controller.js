const pool = require("../config/database");

const getRestaurantList = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    db.query(
      `SELECT r.* 
        FROM restaurant r JOIN menu_t m ON r.restaurant_name = m.restaurant_name
        GROUP BY r.restaurant_name
        ORDER BY r.restaurant_status DESC`,
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

const getRestaurantCategory = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    db.query(
      `SELECT r.restaurant_name, c.category 
        FROM (restaurant r JOIN menu_t m ON r.restaurant_name = m.restaurant_name) JOIN category_t c ON m.menu_name = c.menu_name 
        GROUP BY r.restaurant_name, c.category
        ORDER BY c.category`,
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
  getRestaurantList,
  getRestaurantCategory,
};
