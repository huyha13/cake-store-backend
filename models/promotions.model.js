const mongoose = require("mongoose");
const PromotionsSchema = mongoose.Schema({
  promotion_name: {
    type: String,
    require: true,
  },
  promotion_image:{
    type:String,
    require: true
  },
  content:{
    type:String,
    require:true
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Promotions = (module.exports = mongoose.model("Promotions", PromotionsSchema));
