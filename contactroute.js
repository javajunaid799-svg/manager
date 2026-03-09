const express = require('express');
const router = express.Router();

// POST Route - Contact form submit aagum bodhu idhu dhaan work aagum
router.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // Validation check
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Ellaa field-ayum fill pannunga!" });
    }

    // Inga dhaan Database-la save panna logic varum (e.g., MongoDB)
    console.log(`Message received from ${name}: ${message}`);

    res.status(200).json({ success: "Unga message successfully send aayiduchu!" });
});

