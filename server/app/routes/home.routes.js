const controller = require("../controllers/home.controller");

module.exports = function (app){
    app.get("/getRestaurantList", controller.getRestaurantList);
};