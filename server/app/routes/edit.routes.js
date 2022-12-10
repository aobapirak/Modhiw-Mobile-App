const controller = require("../controllers/edit.controller");

module.exports = function (app) {
  app.get("/getTopingStatus", controller.getTopingStatus);
  app.get("/getIngredientStatus", controller.getIngredientStatus);
  app.get("/getRestaurant", controller.getRestaurant);
  app.get("/getMenuStatus", controller.getMenuStatus);

  app.patch("/updateIngredient", controller.updateIngredient);
  app.patch("/updateIngredientStatus", controller.updateIngredientStatus);
  app.patch("/updateToping", controller.updateToping);
  app.patch("/updateTopingStatus", controller.updateTopingStatus);
  app.patch("/updateRestaurantInfo", controller.updateRestaurantInfo);
  app.patch("/updateMenu", controller.updateMenu);
  app.patch("/updateMenuStatus", controller.updateMenuStatus);

  app.delete("/deleteToping", controller.deleteToping);
};
