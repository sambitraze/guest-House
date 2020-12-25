const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
require("dotenv/config");


const bookingsRoute = require("./routes/bookings");

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


app.get("/", (req, res) => {
  res.send("Hello World!");
});


const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});
