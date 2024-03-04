const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
