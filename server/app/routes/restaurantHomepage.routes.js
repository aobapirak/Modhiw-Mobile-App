const controller = require("../controllers/restaurantHomepage.controller");

module.exports = function (app){
    app.get("/getUserRestaurant", controller.getUserRestaurant);
    app.patch("/updateRestaurantStatus", controller.updateRestaurantStatus);
};