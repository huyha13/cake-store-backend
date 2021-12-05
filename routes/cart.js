const express=require('express')
const router=express.Router()
const cartController =require('../controllers/cart.controller')
router.delete("/delete",cartController.deleteCakeOfList)
router.post("/create",cartController.addCart)
router.get("/:id",cartController.getCartByUserId)
module.exports=router