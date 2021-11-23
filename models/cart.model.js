const mongoose = require("mongoose");
const CartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cakes: {
    type: Array,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Cart = (module.exports = mongoose.model("Cart", CartSchema));
