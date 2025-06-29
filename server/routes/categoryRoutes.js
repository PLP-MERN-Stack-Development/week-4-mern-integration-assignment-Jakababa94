const express = require('express');
const { createCategory, getAllCategories, getPublishedCategories } = require('../controllers/categoryController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, authorize(["admin"]), createCategory);
router.get('/', protect, getAllCategories);                // Admin gets all
router.get('/published', getPublishedCategories);          // Public gets published

module.exports = router;
