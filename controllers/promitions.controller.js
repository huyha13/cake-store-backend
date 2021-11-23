const promitionsModel = require("../models/promotions.model");
class PromotionsController {
  async getPromotionsByPagination(req, res) {
    let { page } = req.query;
    if (!page) {
      page = 1;
    }
    let limit = 3;
    let total = await promitionsModel.find().count();
    let promitionsList = await promitionsModel
      .find()
      .limit(Number.parseInt(limit))
      .skip((page - 1) * limit);
    if (promitionsList) {
      console.log(promitionsList)
      return res.status(200).json({
        promitions: promitionsList,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    }
    return res.status(400).json({ msg: "Err" });
  }
  async getPromotionsById (req,res){
    console.log(req.url)
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
    const {new_img, title, content}=req.body
    let promotions = await promotionsModel.create({
      promition_name, discount,date_begin,date_end,content
    })
    return res.status(200).json({ promotions});
  }
  async updatePromotions(req, res){
    const id = req.params.id;
    const {promition_name, discount, date_begin,date_end,content } = req.body;
    promotionsModel.findByIdAndUpdate({ _id: id}, { promition_name, discount, date_begin,date_end,content})
   .then(()=>res.json({msg:"Cap nhat thanh cong"}))
   .catch((err)=> res.json({msg:err}))
  }
}
module.exports = new PromotionsController();