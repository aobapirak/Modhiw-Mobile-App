const controller = require("../controllers/userHomepage.controller");

module.exports = function (app) {
  app.get("/getRestaurantList", controller.getRestaurantList);
  app.get("/getRestaurantCategory", controller.getRestaurantCategory);
};
