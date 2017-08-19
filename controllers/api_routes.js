var express = require("express");
var router = express.Router();
var Articles = require("../models/articles");

router.get("/retrieve", function(req, res) {
  Articles.find({}).exec(function(err, doc) {
    if (err) throw err;
    res.json(doc);
  });
});


router.post("/save", function(req, res) {
  console.log(req.body);

  var newArticle = new Articles(req.body);

  newArticle.save(function(err, doc) {
    if (err) throw err;
    res.json(doc);
  });
});

router.delete("/saved", function(req, res) {

  var url = req.param("url");

  Articles.find({ url: url }).remove().exec(function(err, doc) {
    if (err) throw err;
    res.json("Deleted");
  });
});

module.exports = router;