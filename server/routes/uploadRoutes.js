const express = require('express');
const { uploadFile, uploadMultipleFiles } = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/single', uploadFile, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }
  res.status(200).json({
    success: true,
    message: 'File uploaded successfully',
    file: req.file,
  });
});

router.post('/multiple', uploadMultipleFiles, (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ success: false, message: 'No files uploaded' });
  }
  res.status(200).json({
    success: true,
    message: 'Files uploaded successfully',
    files: req.files,
  });
});
module.exports = router;