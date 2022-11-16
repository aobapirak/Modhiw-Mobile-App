const restaurants = [
    {name: "ร้านแม่น้องพั๊นซ์",
    image: require("./assets/rectangle-71.png"),
    type: ["a lar carte"]},
    {name: "ร้านก๋วยเตี๋ยวลุงหนวด",
    image: require("./assets/rectangle-72.png"),
    type: ["noodles","a lar carte"]
    }
]

const restaurantInfo = [
    {
        name: "ร้านแม่น้องพั๊นซ์",
        image: require("./assets/rectangle-71.png"),
        type: ["a lar carte"],
        menu: [{
                menuName: "ข้่าวกะเพรา",
                price: "35฿ - 65฿"
                },
                {
                menuName: "ข้าวผัดผงกะหรี่",
                price: "35฿ - 65฿"
                },
                {
                menuName: "ข้าวมันไก่",
                price: "40฿ - 50฿"
                }],
        open: ["Open now", "closed"]
    },
    {
        name: "ร้านก๋วยเตี๋ยวลุงหนวด",
        image: require("./assets/rectangle-72.png"),
        type: ["noodles","a lar carte"],
        menu: [{
            menuName: "ข้่าวกะเพรา",
            price: "35฿ - 65฿"
            },
            {
            menuName: "ก๋วยเตี๋ยวต้มยำ",
            price: "35฿ - 45฿"
            }],
        open: ["Open now", "closed"]
    }
]

const booking = {
    queue: "E12",
    restaurantName: "ร้านก๋วยเตี๋ยวลุงหนวด",
    location: "ใต้หอพักนักศึกษาหญิง",
    food: "ข้าวกะเพรา (หมูกรอบ)",
    note: "พิเศษ + ไข่ดาว"
}

const tickets = [
    {
        queue: "E12",
        position: 3,
        restaurantName: "ร้านก๋วยเตี๋ยวลุงหนวด",
        location: "ใต้หอพักนักศึกษาหญิง",
        food: "ข้าวกะเพรา (หมูกรอบ)",
        note: "พิเศษ + ไข่ดาว"
    },
    {
        queue: "A02",
        position: 5,
        restaurantName: "ร้านแม่น้องพั๊นซ์",
        location: "ใต้หอพักนักศึกษาหญิง",
        food: "กะเต๊ว (หมูตุ๋น)",
        note: "ไม่ใส่เส้น"
    }
]

export {restaurants, booking, tickets, restaurantInfo};
