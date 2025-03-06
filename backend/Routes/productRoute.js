const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const productController = require('../Controllers/productController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });

router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

router.post('/add', upload.single('image'), productController.addProduct); 
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById); 
router.put('/:productId', upload.single('image'), productController.editProduct); 
router.delete('/:productId', productController.deleteProduct); 

module.exports = router;