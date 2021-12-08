const express=require('express')
const router=express.Router()
const newsController =require('../controllers/news.controller')
router.put("/:id",newsController.updateNews)
router.delete("/:id",newsController.deleteNews)
router.post("/create",newsController.createNews)
router.get("/:id",newsController.getNewsById)
router.get("/",newsController.getAllNews)
module.exports=router