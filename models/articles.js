var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  date: {
    type: String,
    trim: true,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

var Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;