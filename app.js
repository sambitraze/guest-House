const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv/config");


const bookingsRoute = require("./routes/bookings");
const roomRoute = require("./routes/rooms");
const paymentRoute = require("./routes/payment");
const customerRoute = require("./routes/customer");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });


app.use(cors());
app.use(bodyparser.json());

app.use("/booking", bookingsRoute);
app.use("/room", roomRoute);
app.use("/payment", paymentRoute);
app.use("/customer", customerRoute);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads")
    console.log(file);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const uploadStorage = multer({ storage: storage })

// Single file
app.post("/upload/single", uploadStorage.single("file"), (req, res) => {
  return res.send("Single file")
})


app.get("/", (req, res) => {
  res.send("Hello World!");
});


const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});
