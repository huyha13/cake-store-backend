const promotionsModel = require("../models/promotions.model");
class PromotionsController {
  getAllPromotion(req, res) {
    promotionsModel.find({}, (err, promotion) => {
      if (!err) {
        res.json(promotion);
      } else {
        res.status(400).json("Error get data");
      }
    });
  }
  async getPromotionsByPagination(req, res) {
    let { page } = req.query;
    if (!page) {
      page = 1;
    }
    let limit = 3;
    let total = await promotionsModel.find().count();
    let promotionsList = await promotionsModel
      .find()
      .limit(Number.parseInt(limit))
      .skip((page - 1) * limit);
    if (promotionsList) {
      console.log(promotionsList)
      return res.status(200).json({
        promotions: promotionsList,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    }
    return res.status(400).json({ msg: "Err" });
  }
  async getPromotionsById (req,res){
    console.log(req)
    const id = req.params.id;
    promotionsModel.find({ _id: id }, (err, promotions) => {
      if (!err) {
        res.json(promotions);
      } else {
        res.status(400).json("Error get data");
      }
    });
  }
  
  async deletePromotions (req,res){
    const id = req.params.id;
    promotionsModel.deleteOne({_id :id},(err,promotions)=>{
      if(!err){
        res.json(promotions)
      }
      else{
        res.status(400).json('Erroge delete data')
      }
    })
  }
  async createPromotions(req,res){
    const {promotion_name, content, promotion_image}=req.body
    let promotions = await promotionsModel.create({
      promotion_name,content,promotion_image
    })
    return res.status(200).json({ promotions});
  }
  async updatePromotions(req, res){
    const id = req.params.id;
    const {promotion_name, content, promotion_image } = req.body;
    promotionsModel.findByIdAndUpdate({ _id: id}, {  promotion_name,content,promotion_image})
   .then(()=>res.json({msg:"Cap nhat thanh cong"}))
   .catch((err)=> res.json({msg:err}))
  }
}
module.exports = new PromotionsController();