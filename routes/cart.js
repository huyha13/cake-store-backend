const express=require('express')
const router=express.Router()
const cartController =require('../controllers/cart.controller')
router.get("/:id",cartController.getCartByUserId)
router.post("/create",cartController.addCart)
module.exports=router