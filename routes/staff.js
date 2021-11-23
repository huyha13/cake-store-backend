const express=require('express')
const router=express.Router()
const staffController =require('../controllers/staff.controller')
router.put("/:id",staffController.updateStaff)
router.post("/create",staffController.createStaff)
router.delete("/:id",staffController.deleteStaff)
router.get("/:id",staffController.getStaffById)
router.get("/",staffController.getStaffByPagination)
module.exports=router