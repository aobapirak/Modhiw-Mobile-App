const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dvd8h29zr',
  api_key: '495187684313245',
  api_secret: 'AgjexikYnxCUG6pqBk2XXT6AYgc',
  secure: true
});

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_USER_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
//   secure: true
// });

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

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};

const uploads = multer({ storage, fileFilter });

app.post('/upload', uploads.single('image'),async (req, res) => {
  const { user } = req;

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: new Date() + '_image',
      width: 500,
      height: 500,
      crop: 'fill',
    });
    res.send(result.url);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'server error, try after some time' });
    console.log('Error while uploading profile image', error.message);
  }
});


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

//listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Modhiw Server is running on port ${PORT}.`);
});
