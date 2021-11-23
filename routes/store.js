const express=require('express')
const router=express.Router()
const storeController =require('../controllers/store.controller')
router.get("/:id",storeController.updateStore)
router.get("/create",storeController.createStore)
router.delete("/:id",storeController.deleteStore)
router.get("/:id",storeController.getStoreById)
router.get("/",storeController.getStoreByPagination)
module.exports=router