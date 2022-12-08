const controller = require("../controllers/foodInfo.controller");

module.exports = function (app){
    app.get("/getIngredient", controller.getIngredient);
    app.get("/getToping", controller.getToping);
};