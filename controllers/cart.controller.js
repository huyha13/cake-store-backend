const { json } = require("express");
const cakeModel = require("../models/cake.model");
const cartModel = require("../models/cart.model");
class CartController {
  async getCartByUserId(req, res) {
    let { id } = req.params;
    let cart = await cartModel.findOne({ "user": id });
    console.log(id)
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
    let idOld = await cartModel.find({
      user:userId
    })
    if (idOld.length===0) {
      let cart = await cartModel.create({ user: userId, cakes:[{cake:cakeId,quantity}] });
      return res.status(200).json(cart);
    }
    let check =0 
    for(let item of idOld[0].cakes){
      if(item.cake==cakeId){
        item.quantity+=quantity
        check =1 
      }
    }
    if (check===0){
      idOld[0].cakes.push({
        cake:cakeId,
        quantity: quantity
      })
    }
    console.log(idOld[0].cakes)
    await cartModel.updateOne({ user:userId}, {$set:{cakes:idOld[0].cakes}},(err, db)=>{
      console.log(err)
    }).clone().catch(function(err){ console.log(err)})
    return res.status(200).json({msg:"sucsse"})
  }
  async deleteCakeOfList(req,res){
    let { userId ,cakeId } = req.body;
    let idOld = await cartModel.find({
      user:userId
    })
    for(var i = 0; i < idOld[0].cakes.length; i++) {
      if(idOld[0].cakes[i].cake == cakeId) {
        idOld[0].cakes.splice(i, 1);
        break;
      }
    }
    console.log(idOld[0].cakes)
    await cartModel.updateOne({ user:userId}, {$set:{cakes:idOld[0].cakes}},(err, db)=>{
      console.log(err)
    }).clone().catch(function(err){ console.log(err)})
    return res.status(200).json({msg:"sucsse"})
   }
}
module.exports = new CartController();



