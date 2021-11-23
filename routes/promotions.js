const express=require('express')
const router=express.Router()
const promitionsController =require('../controllers/promitions.controller')
router.get("/:",promitionsController.updatePromotions)
router.post("/create",promitionsController.createPromotions)
router.delete("/:id",promitionsController.deletePromotions)
router.get("/:id",promitionsController.getPromotionsById)
router.get("/",promitionsController.getPromotionsByPagination)
module.exports=router