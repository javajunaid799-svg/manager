const mongoose = require('mongoose');

// Schema Definition
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        required: true,
        unique: true, // Orey email-la rendu per register panna mudiyadhu
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024 // Password hash panna length adhighama thevai padum
    },
    date: {
        type: Date,
        default: Date.now // User create aagura time automatic-ah save aagum
    }
});

// Model-ah export panrom
module.exports = mongoose.model('User', userSchema);
