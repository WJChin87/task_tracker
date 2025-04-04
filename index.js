const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const todoRoute = require("./routes/todo.js");
const app = express();
require("dotenv").config();

app.use(express.json());

// routes
app.use("/users", authRoute);
app.use("/todo", todoRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Task Tracker!");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@backenddb.p5oxk.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb`
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
