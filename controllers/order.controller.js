const orderModel = require("../models/order.moduel")
const userModel = require("../models/user.model")
class OrderController {
   async getOrderByUserId(req,res){
    let {id} = req.params
    let order = await orderModel.find({"user": id }).populate('cakes').populate('user')
    console.log(order)
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
     let {userId,status,transport,name,total,address,phone,cakes}=req.body
     let order = await orderModel.create({user:userId,status,transport,name, total,address,phone,cakes})
     console.log(req.body)
     if(order){
       return res.status(200).json({msg:"sussces"})
     }
     return res.status(400).json({msg:"Error"})
   }
   getOrderById(req, res) {
    const id = req.params.id;
    orderModel.find({ _id: id }, (err, order) => {
      if (!err) {
        res.json(order);
      } else {
        res.status(400).json("Error get data");
      }
    }).populate('cakes').populate('user');
  }
}
module.exports = new OrderController()

