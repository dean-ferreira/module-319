const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    state_name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Favorite', favoriteSchema);
