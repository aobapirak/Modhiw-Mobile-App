const db = require("./config/database");

const restaurant_name = "MUKDARA FAMILY";

const restaurantList = db.sendapi("/api/home", "SELECT * FROM restaurant", []);

const restaurantInfo = db.sendapi("/api/restaurant", "SELECT * FROM restaurant WHERE restaurant_name = ?", [restaurant_name]);

const menuInRestaurant = db.sendapi("/api/FoodInfo", "SELECT menu_name, restaurant_name, price FROM menu_t WHERE restaurant_name = ?", [restaurant_name]);

//db.sendapi("/api/menu", "SELECT menu_name, price, picture FROM menu_t WHERE restaurant_name = ?", ["ร้านก๋วยเตี๋ยว ลุงหนวด"]);

module.exports = {restaurantList, restaurantInfo, menuInRestaurant, restaurant_name};