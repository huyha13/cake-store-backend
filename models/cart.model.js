const mongoose = require("mongoose");
const CartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cake:[mongoose.Types.ObjectId],
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Cart = (module.exports = mongoose.model("Cart", CartSchema));
