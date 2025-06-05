const express = require('express');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, title, message } = req.body;

    if (!name || !email || !title || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Save to DB
        const newMessage = new Contact({ name, email, title, message });
        await newMessage.save();

        // Send email to site owner
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,     // Your Gmail email
                pass: process.env.EMAIL_PASS      // Your Gmail app password
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact: ${title}`,
            html: `
        <h3>You received a new message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
        });

        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.get('/all', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch messages' });
    }
});

module.exports = router;
