const cakeModel = require("../models/cake.model");
let CakeModel = require("../models/cake.model");
class CakeControler {
  getAllCakes(req, res) {
    CakeModel.find({}, (err, cake) => {
      if (!err) {
        res.json(cake);
      } else {
        res.status(400).json("Error get data");
      }
    });
  }
  getCakeById(req, res) {
    const id = req.params.id;
    CakeModel.find({ _id: id }, (err, cake) => {
      if (!err) {
        res.json(cake);
      } else {
        res.status(400).json("Error get data");
      }
    });
  }
  async getCakesByPagination(req, res) {
    //  console.log(req)
    let { page, limit } = req.query;
    limit = 2;
    if (!page) {
      page = 1;
    }
    let total = await CakeModel.find().count();
    let cakes = await CakeModel.find({})
      .limit(Number.parseInt(limit))
      .skip((page - 1) * limit);
    if (cakes) {
      return res.json({
        cakes: cakes,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    }
    return res.status(400).json({ msg: "Err get data" });
  }
  async getCakesByNameAndCategory(req, res) {
    let { query, category, page, limit } = req.query;
    limit = 2;
    if (!page) {
      page = 1;
    }
    let total = await CakeModel.find().count();
    let cakes = await CakeModel.find({
      name: { $regex: query.toLowerCase(), $options: "$i" },
      category: { $regex: category.toLowerCase(), $options: "$i" },
    })
      .limit(Number.parseInt(limit))
      .skip((page - 1) * limit);
    if (cakes) {
      return res.json({
        cakes: cakes,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    }
    return res.status(400).json({ msg: "Err get data" });
  }
  async createCake(req, res){
    const {cake_name,cake_img,cake_type,date_make,expiry,quantity,status,price}=req.body
    let cake=await CakeModel.create({
      cake_name,cake_img,cake_type,date_make,expiry,quantity,status,price
    })
    return res.status(200).json({ cake});
  }
  async deleteCake(req, res){
    const id = req.params.id;
    CakeModel.deleteOne({_id:id}, (err, cake) =>{
      if(!err){
         res.json(cake)
      }
      else{
         res.status(400).json("Erroge delete data")
      }
    })
  }
  async updateCake( req , res){
    const id = req.params.id;
   const {  cake_name, cake_img, cake_type,date_make,expiry,quantity,status,price } = req.body;
   CakeModel.findByIdAndUpdate({ _id: id}, { cake_name, cake_img, cake_type,date_make,expiry,quantity,status,price})
   .then(()=>res.json({msg:"Cap nhat thanh cong"}))
   .catch((err)=> res.json({msg:err}))
  }
}
module.exports = new CakeControler();






