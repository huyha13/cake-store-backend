const mongoose = require("mongoose");
const NewsSchema = mongoose.Schema({
  new_image: {
    type: String,
  },
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const News = (module.exports = mongoose.model("News", NewsSchema));
