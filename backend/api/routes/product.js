const express=require('express');
const router=express.Router();
const productController=require('../controllers/products')
const checkAuth=require('../middleware/check-auth');


router.post('/addproduct',checkAuth ,productController.addProduct);
router.get('/getallproducts',checkAuth,productController.viewAllProducts)



module.exports=router;