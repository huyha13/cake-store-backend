const express=require('express')
const router=express.Router()
const userController =require('../controllers/user.controller')
router.get("/:id",userController.getUserById)
router.post("/login",userController.login)
router.post("/register",userController.register)
module.exports=router