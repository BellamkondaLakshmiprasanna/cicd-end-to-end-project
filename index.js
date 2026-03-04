const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://mongo:27017/testdb");

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working 🚀");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});