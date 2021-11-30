const express=require('express')
const router=express.Router()
const orderController=require("../controllers/order.controller")
router.post("/create",orderController.createOrder)
router.get("/:id",orderController.getOrderByCartId)
router.get("/",orderController.getAllOrder)
module.exports=router