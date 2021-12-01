const mongoose = require("mongoose");
const PerOrderSchema = mongoose.Schema({
  full_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
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
const User = (module.exports = mongoose.model("PreOder", PerOrderSchema));