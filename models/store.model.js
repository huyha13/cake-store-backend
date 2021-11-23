const mongoose = require("mongoose");
const StoreSchema = mongoose.Schema({
  store_name: {
    type: String,
    require: true,
  },
  store_address: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  map: {
    type: Number,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Store = (module.exports = mongoose.model("Store", StoreSchema));
