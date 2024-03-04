const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

// Schemas
const State = require('./models/State');

// Seeds
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
const statesRouter = require('./routes/states');
const usersRouter = require('./routes/users');

// Middleware
app.use(express.json());

// Use Routers
app.use('/fav', favoriteRouter);
app.use('/states', statesRouter);
app.use('/users', usersRouter);

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
