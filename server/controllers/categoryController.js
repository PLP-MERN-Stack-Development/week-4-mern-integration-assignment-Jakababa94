const Category = require('../models/Category');

// POST: Create a new category
exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
    
        // Check if category already exists
        const existingCategory = await Category.findOne({ name: name.toLowerCase() });
        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: 'Category already exists',
            });
        }

        const newCategory = new Category({
            name: name.toLowerCase(),
            description,
        });

        await newCategory.save();
        res.status(201).json({
            success: true,
            data: newCategory,
        });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// GET /api/categories: Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({
            success: true,
            data: categories,
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};
