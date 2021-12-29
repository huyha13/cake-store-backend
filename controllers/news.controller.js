const NewsModel = require("../models/news.model");
const newsModel = require("../models/news.model");
class NewsController {
  async getAllNews(req,res){
    NewsModel.find({}, (err,news) =>{
      if(!err){
        res.json(news)
      }
      else{
        res.status(400).json('Get all erroge')
      }
    })
  }
  async getNewsById (req,res){
    console.log(req.url)
    const id = req.params.id;
    NewsModel.find({ _id: id }, (err, news) => {
      if (!err) {
        res.json(news);
      } else {
        res.status(400).json("Error get data");
      }
    });
  }
  async getNewsByPagination(req, res) {
    console.log(req)
    let { page } = req.query;
    if (!page) {
      page = 1;
    }
    let limit = 3;
    let total = await NewsModel.find().count();
    let newsList = await NewsModel
      .find()
      .limit(Number.parseInt(limit))
      .skip((page - 1) * limit);
    if (newsList) {
      return res.status(200).json({
        news: newsList,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    }
    return res.status(400).json({ msg: "Err" });
  }
  
  async deleteNews (req,res){
    const id = req.params.id;
    NewsModel.deleteOne({_id :id},(err,news)=>{
      if(!err){
        res.json(news)
      }
      else{
        res.status(400).json('Erroge delete data')
      }
    })
  }
  async createNews(req,res){
    const {new_image, title, content}=req.body
    let news = await NewsModel.create({
      new_image, title, content
    })
    return res.status(200).json({ news});
  }
  async updateNews(req, res){
    const id = req.params.id;
    const { new_image, title, content } = req.body;
    NewsModel.findByIdAndUpdate({ _id: id}, { new_image, title, content})
   .then(()=>res.json({msg:"Cap nhat thanh cong"}))
   .catch((err)=> res.json({msg:err}))
  }
}
module.exports = new NewsController();
