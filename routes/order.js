const express=require('express')
const router=express.Router()
const orderController=require("../controllers/order.controller")
router.get("/detail/:id",orderController.getOrderById)
router.post("/create",orderController.createOrder)
router.get("/:id",orderController.getOrderByUserId)
router.get("/",orderController.getAllOrder)
module.exports=router