const controller = require("../controllers/restaurant.controller");

module.exports = function (app){
    app.get("/getMenu", controller.getMenu);
    app.get("/getCategory", controller.getCategory);
};