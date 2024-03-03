const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorite');

async function getFavorite(req, res, next) {
    let favorite;
    try {
        favorite = await Favorite.findById(req.params.id);
        if (favorite == null) {
            return res.status(404).json({ message: 'Cannot find favorite' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.favorite = favorite;
    next();
}

// Get All Favorites
router.get('/', async (req, res) => {
    try {
        const favorites = await Favorite.find();
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get Favorite by ID
router.get('/:id', getFavorite, async (req, res) => {
    res.json(res.favorite);
});

// Create a Favorite
router.post('/', async (req, res) => {
    const favorite = new Favorite({
        user_id: req.body.user_id,
        user_email: req.body.user_email,
        state_name: req.body.state_name,
    });

    try {
        const newFavorite = await favorite.save();
        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a Favorite
router.patch('/:id', getFavorite, async (req, res) => {
    if (req.body.user_email != null) {
        res.favorite.user_email = req.body.user_email;
    }
    try {
        const updatedFavorite = await res.favorite.save();
        res.json(updatedFavorite);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a Favorite
router.delete('/:id', getFavorite, async (req, res) => {
    try {
        await res.favorite.deleteOne();
        res.json({ message: 'Favorite has been deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
