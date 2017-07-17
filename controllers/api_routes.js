var express = require("express");
var router = express.Router();

router.post("/save", function(req, res) {
  console.log(req.body);
  res.json("saved");
});

module.exports = router;