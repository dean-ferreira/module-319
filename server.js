const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const State = require('./models/State');
const allStates = require('./data/states');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Routers
const favoriteRouter = require('./routes/favorites');

// Middleware
app.use(express.json());

// Use Routers
app.use('/fav', favoriteRouter);
app.use('/states', require('./routes/states'));

// Routes
app.get('/seed', async (req, res) => {
    await State.deleteMany({});
    await State.create(allStates);
    res.json({ message: 'Database seeded' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
