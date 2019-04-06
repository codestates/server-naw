var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes");
var v1Router = require('./routes/v1.js');
var usersRouter = require("./routes/users.js");
var mnaRouter = require("./routes/mna.js");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use("/", indexRouter);
app.use("/v1", v1Router);
app.use("/users", usersRouter);
app.use("/mna", mnaRouter);

module.exports = app;