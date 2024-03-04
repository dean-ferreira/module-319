const express = require('express');
const router = express.Router();
const User = require('../models/user');

async function getUserById(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Get All Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get User by ID
router.get('/:id', getUserById, async (req, res) => {
    res.json(res.user);
});

// Create User
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        favoriteStates: req.body.favoriteStates,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update User
router.patch('/:id', getUserById, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name;
    }
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    if (req.body.favoriteStates != null) {
        res.user.favoriteStates = req.body.favoriteStates;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete User
router.delete('/:id', getUserById, async (req, res) => {
    try {
        await res.user.deleteOne();
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
