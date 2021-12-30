const express=require('express')
const router=express.Router()
const perOrderController =require('../controllers/per-order.controller')
router.post("/create",perOrderController.createPerOrder)
router.delete("/:id",perOrderController.deletePerOder)
router.get("/",perOrderController.getALlPerOrder)
module.exports=router