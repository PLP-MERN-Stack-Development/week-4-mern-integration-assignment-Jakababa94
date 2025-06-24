const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const uploadFile = upload.single('file'); // for single file upload
const uploadMultipleFiles = upload.array('files', 10); // for multiple files, max 10

module.exports = { uploadFile, uploadMultipleFiles, upload };
