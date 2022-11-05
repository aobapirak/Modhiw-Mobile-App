const restaurants = [
    {name: "ร้านแม่น้องพั๊นซ์",
    image: require("./assets/rectangle-71.png"),
    type: ["a lar carte"],
    menu: ["ข้่าวกะเพรา", "ข้าวผัดผงกะหรี่", "ข้าวมันไก่"]},
    {name: "ร้านก๋วยเตี๋ยวลุงหนวด",
    image: require("./assets/rectangle-72.png"),
    type: ["noodles","a lar carte"],
    menu: ["ข้่าวกะเพรา", "ก๋วยเตี๋ยว"]
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

export {restaurants, booking, tickets};