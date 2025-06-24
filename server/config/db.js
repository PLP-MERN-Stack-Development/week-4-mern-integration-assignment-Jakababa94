const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI)
      .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
          console.log(`Server running on http://localhost:${PORT}`);
        });
      })
      .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
      });
    }

module.exports = connectDB;
