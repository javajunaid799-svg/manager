const express = require('express');
const router = express.Router();

// Register Route
router.post('/register', (req, res) => {
    // User data-va database-la save panna inga logic eludhunum
    res.json({ message: "Registration successful!" });
});

// Login Route
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Email & password check panni token (JWT) generate pannuvom
    res.json({ message: "Login successful!", email });
});

module.exports = router;