const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// 1) middlewares
app.use(cors);
app.use(express.json());

// 2) Route

// 3) mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/authentication")
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => console.error("Failed to connect to mongodb", error));
 
// 4) global error handler

// 5) server
