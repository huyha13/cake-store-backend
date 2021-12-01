const orderModel = require("../models/order.moduel")
const userModel = require("../models/user.model")
class OrderController {
   async getOrderByUserId(req,res){
    let {id} = req.params
    let order = await orderModel.findOne({"Users._id": id })
    console.log(id)
    if(order){
      return res.status(200).json(order)
    }
    return res.status(400).json({order:"cant get"})
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
     let {userId,status,transport,name,total}=req.body
     let order = await orderModel.create({user:userId,status,transport,name, total})
     if(order){
       return res.status(200).json({msg:"sussces"})
     }
     return res.status(400).json({msg:"Error"})
   }
      
}
module.exports = new OrderController()

