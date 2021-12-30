const express=require('express')
const router=express.Router()
const perOrderController =require('../controllers/per-order.controller')
router.post("/create",perOrderController.createPerOrder)
router.post("/:id",perOrderController.deletePerOder)
router.post("/",perOrderController.getALlPerOrder)
module.exports=router