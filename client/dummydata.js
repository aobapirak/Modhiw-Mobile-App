const restaurants = [
  {
    name: "ร้านแม่น้องพั๊นซ์1",
    image: require("./assets/rectangle-71.png"),
    type: ["a lar carte"],
  },
  {
    name: "ร้านก๋วยเตี๋ยวลุงหนวด1",
    image: require("./assets/rectangle-72.png"),
    type: ["noodles", "a lar carte"],
  },
  {
    name: "ร้านชิกกี้ ชิก1",
    image: require("./assets/rectangle-73.png"),
    type: ["fast food", "a lar carte"],
  },
  {
    name: "ร้านแม่น้องพั๊นซ์2",
    image: require("./assets/rectangle-71.png"),
    type: ["a lar carte"],
  },
  {
    name: "ร้านก๋วยเตี๋ยวลุงหนวด2",
    image: require("./assets/rectangle-72.png"),
    type: ["noodles", "a lar carte"],
  },
  {
    name: "ร้านชิกกี้ ชิก2",
    image: require("./assets/rectangle-73.png"),
    type: ["fast food", "a lar carte"],
  },
  {
    name: "ร้านแม่น้องพั๊นซ์3",
    image: require("./assets/rectangle-71.png"),
    type: ["a lar carte"],
  },
  {
    name: "ร้านก๋วยเตี๋ยวลุงหนวด3",
    image: require("./assets/rectangle-72.png"),
    type: ["noodles", "a lar carte"],
  },
  {
    name: "ร้านชิกกี้ ชิก3",
    image: require("./assets/rectangle-73.png"),
    type: ["fast food", "a lar carte"],
  },
];

const restaurantInfo = [
  {
    name: "ร้านแม่น้องพั๊นซ์",
    image: require("./assets/rectangle-71.png"),
    type: ["a lar carte"],
    menu: [
      {
        menuName: "ข้าวกะเพรา",
        price: "35฿ - 65฿",
      },
      {
        menuName: "ข้าวผัดผงกะหรี่",
        price: "35฿ - 65฿",
      },
      {
        menuName: "ข้าวมันไก่",
        price: "40฿ - 50฿",
      },
    ],
    open: ["Open now", "closed"],
  },
  {
    name: "ร้านก๋วยเตี๋ยวลุงหนวด",
    image: require("./assets/rectangle-72.png"),
    type: ["noodles", "a lar carte"],
    menu: [
      {
        menuName: "ข้าวกะเพรา",
        price: "35฿ - 65฿",
      },
      {
        menuName: "ก๋วยเตี๋ยวต้มยำ",
        price: "35฿ - 45฿",
      },
    ],
    open: ["Open now", "closed"],
  },
];

const toppingInfo = [
  {
    name: "ร้านก๋วยเตี๋ยวลุงหนวด",
    toppings: [
      {
        toppingName: "ไข่ดาว",
        price: "10฿",
      },
      {
        toppingName: "พิเศษ",
        price: "20฿",
      },
    ],
  },
];

const ingredientInfo = [
  {
    name: "ร้านก๋วยเตี๋ยวลุงหนวด",
    ingredients: [
      {
        ingredientName: "ไก่",
        price: "35฿",
      },
      {
        ingredientName: "หมู",
        price: "35฿",
      },
      {
        ingredientName: "หมูตุ๋น",
        price: "40฿",
      },
      {
        ingredientName: "หมูกรอบ",
        price: "40฿",
      },
      {
        ingredientName: "เนื้อ",
        price: "40฿",
      },
      {
        ingredientName: "ปลาหมึก",
        price: "40฿",
      },
      {
        ingredientName: "กุ้ง",
        price: "40฿",
      },
      {
        ingredientName: "ทะเล",
        price: "40฿",
      },
      {
        ingredientName: "รวมมิตร",
        price: "45฿",
      },
    ],
  },
];

const booking = {
  queue: "E12",
  restaurantName: "ร้านก๋วยเตี๋ยวลุงหนวด",
  location: "ใต้หอพักนักศึกษาหญิง",
  food: "ข้าวกะเพรา (หมูกรอบ)",
  note: "พิเศษ + ไข่ดาว",
};

const tickets = [
  {
    queue: "E12",
    position: 3,
    restaurantName: "ร้านก๋วยเตี๋ยวลุงหนวด",
    location: "ใต้หอพักนักศึกษาหญิง",
    food: "ข้าวกะเพรา (หมูกรอบ)",
    note: "พิเศษ + ไข่ดาว",
    phoneNumber: "0815873097",
    time: "03-Oct-2022",
  },
  {
    queue: "A02",
    position: 5,
    restaurantName: "ร้านแม่น้องพั๊นซ์",
    location: "ใต้หอพักนักศึกษาหญิง",
    food: "กะเต๊ว (หมูตุ๋น)",
    note: "ไม่ใส่เส้น",
    phoneNumber: "0815873097",
    time: "03-Oct-2022",
  },
];

export {
  restaurants,
  booking,
  tickets,
  restaurantInfo,
  toppingInfo,
  ingredientInfo,
};
