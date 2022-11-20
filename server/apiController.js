const db = require("./config/database");

/*
// EXAMPLE !!!

const res_name = "ชิกกี้ชิก"
const price = 35
const dummy = [res_name, price]

const menuInRestaurant = (dummy) => db.sendapi("/api/FoodInfo", "SELECT menu_name, restaurant_name, price FROM menu_t WHERE restaurant_name = ? and price = ?", dummy);
menuInRestaurant(dummy)
*/

const restaurant_name = "MUKDARA FAMILY";

const restaurantList => db.sendapi("/api/home", "SELECT * FROM restaurant", []);

const restaurantInfo = (component) => db.sendapi("/api/restaurant", "SELECT * FROM restaurant WHERE restaurant_name = ?", [restaurant_name]);

const menuInRestaurant = (component) => db.sendapi("/api/FoodInfo", "SELECT menu_name, restaurant_name, price FROM menu_t WHERE restaurant_name = ?", [restaurant_name]);

const insertMenu = (component) => db.insertToSql("INSERT INTO menu_t (restaurant_name, menu_name, price, picture) VALUES (?, ?, ?, ?)", component);

const insertIngredient = (component) => db.insertToSql("INSERT INTO ingredient_t (restaurant_name, ingredient, price_adjust) VALUES (?, ?, ?)", component);

const insertToping = (component) => db.insertToSql("INSERT INTO ingredient_t (restaurant_name, toping, price_adjust) VALUES (?, ?, ?)", component);

//db.sendapi("/api/menu", "SELECT menu_name, price, picture FROM menu_t WHERE restaurant_name = ?", ["ร้านก๋วยเตี๋ยว ลุงหนวด"]);

module.exports = {restaurantList, restaurantInfo, menuInRestaurant, restaurant_name};