const express = require('express');
const router = express.Router();
const State = require('../models/state');

async function getStateByName(req, res, next) {
    let state;
    try {
        state = await State.findOne({
            name: req.params.name.toLowerCase(),
        });
        if (state == null) {
            return res.status(404).json({ message: 'Cannot find state' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.state = state;
    next();
}

// Get All States
router.get('/', async (req, res) => {
    try {
        const states = await State.find();
        res.json(states);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get State by Name
router.get('/:name', getStateByName, async (req, res) => {
    res.json(res.state);
});

// Update State
router.patch('/:name', getStateByName, async (req, res) => {
    if (req.body.diesel != null) {
        res.state.diesel = req.body.diesel;
    }
    if (req.body.gasoline != null) {
        res.state.gasoline = req.body.gasoline;
    }
    if (req.body.midGrade != null) {
        res.state.midGrade = req.body.midGrade;
    }
    if (req.body.premium != null) {
        res.state.premium = req.body.premium;
    }
    try {
        const updatedState = await res.state.save();
        res.json(updatedState);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
