const cartModel = require("../models/cart.model");
const CakeModel = require("../models/cake.model");
class CartController {
  async getCartByUserId(req, res) {
    let { id } = req.params;
    let cart = await cartModel.findOne({ "Users._id": id });
    if (cart) {
      let total = [];
      for (const item of cart.cakes) {
        console.log(item);
        let c = await CakeModel.findOne({ _id: item.id });
        total.push({ cake: c, status: item.status });
      }
      return res.status(200).json(total);
    }
    return res.status(400).json({cakes:"[]"});
  }
  async addCart(req, res) {
    let { userId, cakeId } = req.body;
    let cart = await cartModel.create({ user: userId, cake: cakeId });
    if (cart) {
      return res.status(200).json({ msg: "Success" });
    }
    return res.status(400).json({ msg: "Err" });
    console.log(cakeId)
  }
}
module.exports = new CartController();
