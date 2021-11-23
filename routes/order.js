const express=require('express')
const router=express.Router()
const orderController =require('../Controllers/order.controller')
router.get("/",orderController.getOrderByPagination)
module.exports=router