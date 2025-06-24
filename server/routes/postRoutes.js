const express = require('express');
const { createPost, getAllPostsForUser, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/postControllers');
const { protect } = require('../middleware/authMiddleware');
const { uploadFile, uploadMultipleFiles } = require('../middleware/uploadMiddleware');

const router = express.Router();

router.post('/', protect, uploadFile, createPost);
router.get('/user', protect, getAllPostsForUser); // Get all posts for the logged-in user
router.get('/', protect, getAllPosts);
router.get('/:id', protect, getPostById);
router.put('/:id', protect, uploadMultipleFiles, updatePost);
router.delete('/:id', protect, deletePost);

module.exports = router;
// This file defines the routes for blog posts, including creating, retrieving, updating, and deleting posts.