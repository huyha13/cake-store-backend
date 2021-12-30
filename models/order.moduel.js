const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cakes:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cake",
    }
  ],
  name:{
    type: String,
    require: true
  },
  status:{
    type: String,
  },
  transport:{
    type:String,
  },
  total: {
    type:String
  },
  address:{
    type:String
  },
  phone:{
    type:String
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Order = (module.exports = mongoose.model("Order", OrderSchema));
