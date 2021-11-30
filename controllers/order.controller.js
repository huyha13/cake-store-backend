const orderModel = require("../models/order.moduel")
class OrderController {
   async getOrderByCartId(req,res){
    let {id} = req.params
    let order = await orderModel.findOne({"Cart._id": id })
    if(order){
      return res.status(200).json(order)
    }
    return res.status(400).json({order:[]})
   }
   async getAllOrder(req,res){
     orderModel.find({},(err,order)=>{
       if(!err){
         return res.status(200).json(order)
       }
       return res.status(400).json("Error get data")
     })
   }
   async createOrder(req,res){
     let {cartId}=req.body
     let order = await orderModel.create({cartId})
     if(order){
       return res.status(200).json({msg:"sussces"})
     }
     return res.status(400).json({msg:"Error"})
   }
      
}
module.exports = new OrderController()

