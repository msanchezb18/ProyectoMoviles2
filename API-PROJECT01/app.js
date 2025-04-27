// Load libraries into the environment application
var createError = require("http-errors");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Creates application
var app = express();

// Application parser to support JSON data format
app.use(bodyParser.json({ type: "application/json" }));

// Creates connection with MongoDB for myself into the local environment
mongoose.connect("mongodb://localhost:27017/", { dbName: "dbJuegoCubo" });

require("./models/cubeModel");
require("./models/playerModel");
require("./models/pistaModel.js");

// Creates each route link
var indexRouter = require("./routes/index.js");
var cubesRouter = require("./routes/cubeRoute.js");
var playerRouter = require("./routes/playerRoute.js");
var pistasRouter = require("./routes/pistasjudadores.js");

// Create all listener for each route link
app.use("/", indexRouter);
app.use("/cube", cubesRouter);
app.use("/player", playerRouter);
app.use("/pista", pistasRouter);
// Execute local API server and create listener on port 5005
var server = app.listen(3000, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});
