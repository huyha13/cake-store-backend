const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  cake_image: {
    type: String,
    require: true,
  },
  cake_name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  cake_option:{
    type:String,
    require:true
  },
  date_make: {
    type: String,
    require: true,
  },
  expiry: {
    type: String,
    require: true,
  },
  cake_type: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Cake = (module.exports = mongoose.model("Cake", OrderSchema));
