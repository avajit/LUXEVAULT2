const mongoose = require('mongoose');
require('dotenv').config();
console.log('MongoDB URI:', process.env.MONGO_URI);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
