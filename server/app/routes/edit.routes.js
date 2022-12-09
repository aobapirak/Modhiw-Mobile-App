const controller = require("../controllers/edit.controller");

module.exports = function (app){
    app.get("/getTopingStatus", controller.getTopingStatus);
    app.get("/getIngredientStatus", controller.getIngredientStatus);

    app.patch("/updateIngredient", controller.updateIngredient);
    app.patch("/updateIngredientStatus", controller.updateIngredientStatus);
    app.patch("/updateToping", controller.updateToping);
    app.patch("/updateTopingStatus", controller.updateTopingStatus);

    app.delete("/deleteToping", controller.deleteToping);
}