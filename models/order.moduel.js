const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  customer_name: {
    type: String,
    require: true,
  },
  customer_phone: {
    type: String,
    require: true,
  },
  total_money: {
    type: String,
    require: true,
  },
  date:{
    type: String,
    require:true,
  },
  status:{
      type: String,
      require:true,
  },
  order_processing:{
    type: String,
    require:true,
},
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Order = (module.exports = mongoose.model("Order", OrderSchema));
