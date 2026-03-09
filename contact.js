const mongoose = require('mongoose');

// Database structure-ah define panrom
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // Names-la munnadi pinadi irukka extra space-ah remove pannum
    },
    email: {
        type: String,
        required: true,
        lowercase: true, // Email-ah eppovum small letters-la save pannum
        trim: true
    },
    message: {
        type: String,
        required: true,
        minlength: 10 // Message romba chinna irukka koodadhu
    },
    createdAt: {
        type: Date,
        default: Date.now // User eppo message anuppunaanga-nu auto-ah record aagum
    }
});

// "Contact" nu table (collection) name vechi export panrom
module.exports = mongoose.model('Contact', contactSchema);
