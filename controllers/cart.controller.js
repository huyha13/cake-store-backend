const cakeModel = require("../models/cake.model");
const cartModel = require("../models/cart.model");
class CartController {
  async getCartByUserId(req, res) {
    let { id } = req.params;

    let cart = await cartModel.findOne({ "Users._id": id });
    console.log(cart)
    if (cart) {
      const {cakes}=cart
      console.log(cakes)
      const list=[]
      for (const item of cakes) {
         const cake = await cakeModel.findOne({_id:item.cake})
         list.push({
           cakes:cake,
           quantity:item.quantity
         })
      }
      return res.status(200).json(list);
    }
     return res.status(400).json({msg:"err"});
  }
  async addCart(req, res) {
    let { userId, cakeId, quantity } = req.body;
    let cart = await cartModel.create({ user: userId, cakes:[{cake:cakeId,quantity}] });
    if (cart) {
      return res.status(200).json({ msg: "Success" });
    }
    return res.status(400).json({ msg: "Err" });
  }

}
module.exports = new CartController();
