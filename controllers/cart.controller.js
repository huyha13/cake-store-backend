const cartModel = require("../models/cart.model");
const cakeModel = require("../models/cake.model");
class CartController {
  async getCartByUserId(req, res) {
    let { id } = req.params;
    let cart = await cartModel.findOne({ "Users._id": id });
    console.log(cart.cakes)
    if (cart) {
      let total = [];
      for (const item of cart.cakes) {
        console.log(item);
        let c = await cakeModel.findOne({ _id: item.id });
        total.push({ cake: c, status: item.status });
      }
      return res.status(200).json(total);
    }
    return res.status(400).json({ msg: "Err get data" });
  }
  async addCart(req, res) {
    let { cartIds, userId } = req.body;
    let cart = await cartModel.create({ user: userId, cake: cartIds });
    if (cart) {
      return res.status(200).json({ msg: "Success" });
    }
    return res.status(400).json({ msg: "Err" });
  }
}
module.exports = new CartController();
