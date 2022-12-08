const controller = require("../controllers/add.controller");

module.exports = function (app){
    app.post("/addIngredient", controller.addIngredient);
    app.post("/addToping", controller.addToping);
};