const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

// settings
const app = express();


// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect('mongodb+srv://user:password@cluster0.7pxb3tr.mongodb.net/adsoClem?retryWrites=true&w=majority')
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(1000);
