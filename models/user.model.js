const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  fistName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone:{
    type: String
  },
  address:{
    type:String
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const User = (module.exports = mongoose.model("User", UserSchema));
