const controller = require("../controllers/bookQueue.controller");

module.exports = function (app) {
  app.get("/getqueue", controller.getQueue);

  app.post("/BookQueue", controller.BookQueue);
};
