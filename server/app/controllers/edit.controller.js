const pool = require("../config/database");

const getIngredientStatus = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const ingredient = req.query.ingredient;
    const restaurant_name = req.query.restaurant_name;
    db.query(
      `SELECT ingredient_status FROM ingredient_t WHERE ingredient = ? AND restaurant_name = ?`,
      [ingredient, restaurant_name],
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

const updateIngredient = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurant_name = req.body.restaurant_name;
    const ingredient_price = req.body.newPrice;
    const old_ingredient_name = req.body.oldName;
    db.query(
      "UPDATE ingredient_t SET price_adjust = ? WHERE restaurant_name = ? AND ingredient = ?",
      [ingredient_price, restaurant_name, old_ingredient_name],
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

const updateIngredientStatus = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurant_name = req.body.restaurant_name;
    const ingredient = req.body.ingredient;
    const status = req.body.status;
    db.query(
      "UPDATE ingredient_t SET ingredient_status = ? WHERE restaurant_name = ? AND ingredient = ?",
      [status, restaurant_name, ingredient],
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

const getTopingStatus = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const toping = req.query.toping;
    const restaurant_name = req.query.restaurant_name;
    db.query(
      `SELECT toping_status FROM toping_t WHERE toping = ? AND restaurant_name = ?`,
      [toping, restaurant_name],
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

const updateToping = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurant_name = req.body.restaurant_name;
    const toping_name = req.body.newName;
    const toping_price = req.body.newPrice;
    const old_toping_name = req.body.oldName;
    db.query(
      "UPDATE toping_t SET toping = ?, price_adjust = ? WHERE restaurant_name = ? AND toping = ?",
      [toping_name, toping_price, restaurant_name, old_toping_name],
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

const updateTopingStatus = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurant_name = req.body.restaurant_name;
    const toping = req.body.toping;
    const status = req.body.status;
    db.query(
      "UPDATE toping_t SET toping_status = ? WHERE restaurant_name = ? AND toping = ?",
      [status, restaurant_name, toping],
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

const deleteToping = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurant_name = req.query.restaurant_name;
    const toping = req.query.toping;
    db.query(
      "DELETE FROM toping_t WHERE restaurant_name = ? AND toping = ?",
      [restaurant_name, toping],
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

const getRestaurant = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurant_name = req.query.restaurant_name;
    db.query(
      `SELECT * FROM restaurant WHERE restaurant_name = ?`,
      [restaurant_name],
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

const updateRestaurantInfo = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurant_name = req.body.restaurant_name;
    const area = req.body.area;
    const picture = req.body.picture;
    db.query(
      "UPDATE restaurant SET area = ?, picture = ? WHERE restaurant_name = ?",
      [area, picture, restaurant_name],
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

const updateMenu = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurant_name = req.body.restaurant_name;
    const menu_name = req.body.menu_name;
    const price = req.body.price;
    const picture = req.body.picture;
    db.query(
      "UPDATE menu_t SET price = ?, picture = ? WHERE restaurant_name = ? AND menu_name = ?",
      [price, picture, restaurant_name, menu_name],
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

const getMenuStatus = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const menu_name = req.query.menu_name;
    const restaurant_name = req.query.restaurant_name;
    db.query(
      `SELECT menu_status FROM menu_t WHERE menu_name = ? AND restaurant_name = ?`,
      [menu_name, restaurant_name],
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

const updateMenuStatus = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const restaurant_name = req.body.restaurant_name;
    const menu_name = req.body.menu_name;
    const status = req.body.status;
    db.query(
      "UPDATE menu_t SET menu_status = ? WHERE restaurant_name = ? AND menu_name = ?",
      [status, restaurant_name, menu_name],
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
  getIngredientStatus,
  getRestaurant,
  updateIngredient,
  getTopingStatus,
  getMenuStatus,
  updateToping,
  updateTopingStatus,
  updateIngredientStatus,
  updateRestaurantInfo,
  updateMenuStatus,
  updateMenu,
  deleteToping,
};
