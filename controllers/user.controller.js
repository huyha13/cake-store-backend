const userModel = require("../models/user.model");
class UserController {
  login(req, res) {
    let { email, password } = req.body;
    userModel.find({ email: email, password: password }, (err, user) => {
      if (!err) {
        console.log(user);
        res.json(user);
      } else {
        res.status(400).json("Error get data");
      }
    });
  }
  async register(req, res) {
    let { fistName,lastName, email, password } = req.body;
    let userOld = await userModel.findOne({ email: email });
    if (userOld) {
      res.status(401).json("Duplicate user");
    } else {
      if (email && password) {
        let user=await userModel.create({ fistName,lastName, email, password });
        res.status(200).json(user)
      } else {
        res.status(404).json("Error get data");
      }
    }
  }
}
module.exports = new UserController();
