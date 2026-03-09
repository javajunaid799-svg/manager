
const Contact = require("../models/contactModel"); // Database model-ah import pannunga

// 1. Get all contacts
exports.getContacts = async (req, res) => {
    // User login panni irundha, avangaloda contacts-ah mattum fetch pannum
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
};

// 2. Create new contact
exports.createContact = async (req, res) => {
    const { name, email, phone } = req.body;
    
    if (!name || !email || !phone) {
        return res.status(400).json({ message: "Ellaa fields-um fill pannanum!" });
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id // Inga thaan contact-ah user-kooda connect pannuvom
    });

    res.status(201).json(contact);
};

