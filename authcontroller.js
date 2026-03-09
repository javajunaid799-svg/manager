const User = require("../models/user"); // Import your User model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Register a user
// @route POST /api/users/register
// @access public
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Validation: Check if fields are empty
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are mandatory!" });
        }

        // 2. Check if user already exists
        const userAvailable = await User.findOne({ email });
        if (userAvailable) {
            return res.status(400).json({ message: "User already registered!" });
        }

        // 3. Hash the password (Security best practice)
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Create new user
        const user = await User.create({
            username: name,
            email,
            password: hashedPassword, 
        });

        if (user) {
            res.status(201).json({ _id: user.id, email: user.email });
        } else {
            res.status(400).json({ message: "User data is not valid" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Login a user
// @route POST /api/users/login
// @access public
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are mandatory!" });
        }

        const user = await User.findOne({ email });

        // Compare password with hashed password in database
        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = jwt.sign(
                {
                    user: {
                        username: user.username,
                        email: user.email,
                        id: user.id,
                    },
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "15m" }
            );
            res.status(200).json({ accessToken });
        } else {
            res.status(401).json({ message: "Email or password is not valid" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

