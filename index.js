// index.js

const express = require('express');
const connectDB = require('./utils/db');
const volunteerRoutes = require('./routes/volunteerRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/volunteers', volunteerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
