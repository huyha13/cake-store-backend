const perOrderModel = require("../models/per-order.model")

class PerOrderController {
    async createPerOrder(req,res){
        let {full_name,email,phone,content} = req.body
        let perOrder = await perOrderModel.create({
            full_name,email,phone,content
        })
        return res.status(200).json(perOrder)
     }
     async getALlPerOrder(req,res){
         perOrderModel.find({},(err,perorder)=>{
             if(!err){
                 res.status(200).json(perorder)
             }else {
                res.status(400).json("Error get data");
             }
         })
     }
     async deletePerOder(req, res){
        const id = req.params.id;
        perOrderModel.deleteOne({_id:id}, (err, perorder) =>{
          if(!err){
             res.json(perorder)
          }
          else{
             res.status(400).json("Erroge delete data")
          }
        })
      }
}
module.exports = new PerOrderController();