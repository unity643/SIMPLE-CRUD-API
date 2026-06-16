const express = require("express");
const router = express.Router();

const Product = require("../models/product.model.js");

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller.js');

const protect = require('../middleware/auth.middleware.js');

// PUBLIC routes
router.get('/', getProducts);
router.get('/:id', getProduct);

// PROTECTED routes 🔒
router.post('/', protect, createProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;