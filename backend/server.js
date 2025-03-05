require('dotenv').config();
const express = require('express');
const connectDB = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes'); // Added product routes

const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);

app.use('/api/products', productRoutes); // Added product routes
// Start Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
