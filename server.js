var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
mongoose.Promise = Promise;
var path = require("path");
var routes = require("./controllers/api_routes");
var PORT = process.env.PORT || 3030;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname + "/public")));

// Use this when ready to deploy: process.env.MONGODB_URI
// For local host: "mongodb://localhost/nytreact"
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.use("/api/", routes);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, console.log("Listening on port: " + PORT));