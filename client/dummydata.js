const homepage = [
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

export {restaurantInfo,homepage};