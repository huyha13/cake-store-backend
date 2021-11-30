const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  status:{
    type: Boolean,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Order = (module.exports = mongoose.model("Order", OrderSchema));
