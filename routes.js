const ayoyo = require("./server/apiController");

const restaurant_name = ayoyo.restaurant_name;

const restaurantList = ayoyo.restaurantList

const restaurantInfo = ayoyo.restaurantInfo

const menuInRestaurant = ayoyo.menuInRestaurant

//db.sendapi("/api/menu", "SELECT menu_name, price, picture FROM menu_t WHERE restaurant_name = ?", ["ร้านก๋วยเตี๋ยว ลุงหนวด"]);

module.exports = {restaurantList, restaurantInfo, menuInRestaurant, restaurant_name};