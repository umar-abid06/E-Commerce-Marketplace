const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to E-Commerce Marketplace");
});

module.exports = app;
