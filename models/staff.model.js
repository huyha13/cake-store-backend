const mongoose = require("mongoose");
const StaffSchema = mongoose.Schema({
    position: {
    type: String,
    require: true,
  },
  word_address: {
    type: String,
    require: true,
  },
  staff_name: {
    type: Number,
    require: true,
  },
  staff_email: {
    type: Number,
    require: true,
  },
  staff_phone: {
    type: Number,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Staff = (module.exports = mongoose.model("Staff", StaffSchema));
