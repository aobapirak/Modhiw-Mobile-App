const controller = require("../controllers/verification.controller");

module.exports = function (app){
    app.get("/createOTP", controller.createOTP);
    app.get("/verifyOTP", controller.verifyOTP);
    app.get("/existPhonenumber", controller.getExistPhonenumber);
    
    app.post("/insertUser", controller.insertUser);
};