const mongoose = require("mongoose");
const PromotionsSchema = mongoose.Schema({
    promotion_name: {
    type: String,
    require: true,
  },
  discount: {
    type: String,
    require: true,
  },
  date_begin: {
    type: Number,
    require: true,
  },
  date_end: {
    type: Number,
    require: true,
  },
  content:{
    type:String,
    require:true
  },
  status: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Promotions = (module.exports = mongoose.model("Promotions", PromotionsSchema));
