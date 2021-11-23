const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb+srv://huy:123@cluster0.nqytu.mongodb.net/Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect sucess");
  } catch (err) {
    console.log(err);
    console.log("Connect fail");
  }
}

module.exports = { connect };
