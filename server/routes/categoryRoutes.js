const express = require('express');
const { createCategory, getAllCategories } = require('../controllers/categoryController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, authorize(["admin"]), createCategory);
router.get('/', protect, getAllCategories);

module.exports = router;
