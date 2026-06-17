const express = require("express");
const router = express.Router();

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller.js');

const protect = require('../middleware/auth.middleware.js');
const authorizeRoles = require('../middleware/role.middleware.js');
const upload = require("../middleware/upload");

// PUBLIC
router.get('/', getProducts);
router.get('/:id', getProduct);

// ADMIN ONLY 🔒
router.post(
    '/',
    protect,
    authorizeRoles("admin"),
    upload.single("image"),
    createProduct
);
router.put('/:id', protect, authorizeRoles("admin"), updateProduct);
router.delete('/:id', protect, authorizeRoles("admin"), deleteProduct);

module.exports = router;