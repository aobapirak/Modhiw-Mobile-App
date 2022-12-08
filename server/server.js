const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

const app = express();
cors
var corsOptions = {
  origin: "*",
  credentials: false,
  Headers: "x-access-token"
};

app.use(express.json());
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// app.use("/image",express.static(path.join(__dirname, 'uploads')));


// const storage = multer.diskStorage({
//   destination: function(req, file, callback) {
//     callback(null, path.join(__dirname, 'uploads'));
//   },
//   filename: function (req, file, callback) {
//     callback(null, Date.now() + "-" + file.originalname);
//   }
//   });

// const upload = multer({storage});

// app.post('/upload', upload.single('image'), (req, res) => {
//   console.log("file Uploaded sucessfully");
//   console.log(req);
//   res.send(req.file);
// });


//login
require("./app/routes/verification.routes")(app);

//home
require("./app/routes/userHomepage.routes")(app);

//restaurant
require("./app/routes/restaurant.routes")(app);

//foodInfo
require("./app/routes/foodInfo.routes")(app);

//bookQueue
require("./app/routes/bookQueue.routes")(app);

//add
require("./app/routes/add.routes")(app);

//orderList
require("./app/routes/orderList.routes")(app);

//restaurantHomepage
require("./app/routes/restaurantHomepage.routes")(app);

//edit
require("./app/routes/edit.routes")(app);

//listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Modhiw Server is running on port ${PORT}.`);
});
