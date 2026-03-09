const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. Middlewares
app.use(express.json()); // JSON data-va read panna idhu venum
app.use(cors()); // Frontend to Backend connection error varaama irukka

// 2. Import Routes
const authRoute = require('./routes/authroute');
const contactRoute = require('./routes/contactroute');

// 3. Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/contact', contactRoute);

// 4. Connect to MongoDB
mongoose.connect(process.env.DB_URL)
    .then(() => console.log("Database connect aayiduchu! ✅"))
    .catch((err) => console.log("DB Connection Error: ", err));

// 5. Server Port Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});
