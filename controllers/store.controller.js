const storeModel = require("../models/store.model");
class StoreController {
  async getStoreByPagination(req, res) {
    let { page } = req.query;
    if (!page) {
      page = 1;
    }
    let limit = 3;
    let total = await storeModel.find().count();
    let storeList = await storeModel
      .find()
      .limit(Number.parseInt(limit))
      .skip((page - 1) * limit);
    if (storeList) {
      return res.status(200).json({
        stores: storeList,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    }
    return res.status(400).json({ msg: "Err" });
  }
  async getStoreById (req,res){
    console.log(req.url)
    const id = req.params.id;
    storeModel.find({ _id: id }, (err, store) => {
      if (!err) {
        res.json(store);
      } else {
        res.status(400).json("Error get data");
      }
    });
  }
  
  async deleteStore (req,res){
    const id = req.params.id;
    storeModel.deleteOne({_id :id},(err,store)=>{
      if(!err){
        res.json(store)
      }
      else{
        res.status(400).json('Erroge delete data')
      }
    })
  }
  async createStore(req,res){
    const {store_name, store_address, phone,map}=req.body
    let store = await storeModel.create({
      store_name, store_address, phone,map
    })
    return res.status(200).json({store});
  }
  async updateStore(req, res){
    const id = req.params.id;
    const {store_name, store_address, phone,map } = req.body;
    storeModel.findByIdAndUpdate({ _id: id}, { store_name, store_address, phone,map})
   .then(()=>res.json({msg:"Cap nhat thanh cong"}))
   .catch((err)=> res.json({msg:err}))
  }
}
module.exports = new StoreController();