const controller = require("../controllers/bookQueue.controller");

module.exports = function (app){
    app.post("/BookQueue", controller.BookQueue);
};