const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Middleware
app.use(express.json());

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
