const controller = require("../controllers/restaurantHomepage.controller");

module.exports = function (app){
    app.patch("/updateRestaurantStatus", controller.updateRestaurantStatus);
};