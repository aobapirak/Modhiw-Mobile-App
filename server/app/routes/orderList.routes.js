const controller = require("../controllers/orderList.controller");

module.exports = function (app) {
  app.get("/getOrderList", controller.getOrderList);

  app.patch("/updateStatus", controller.updateStatus);
};
