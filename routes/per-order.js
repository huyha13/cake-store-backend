const express=require('express')
const router=express.Router()
const perOrderController =require('../controllers/per-order.controller')
router.post("/create",perOrderController.createPerOrder)
module.exports=router