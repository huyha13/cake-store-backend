const mongoose = require("mongoose");
const CustomerSchema = mongoose.Schema({
    customer_address: {
    type: String,
  },
  customer_email: {
    type: String,
    require: true,
  },
  customer_name: {
    type: String,
    require: true,
  },
  customer_phone: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Customer = (module.exports = mongoose.model("Customers", CustomerSchema));
// module.exports = Customer
