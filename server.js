require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email sending route
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Set up Nodemailer transporter using environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to another email service if needed
    auth: {
      user: process.env.EMAIL_USER, // Load email from environment variable
      pass: process.env.EMAIL_PASS, // Load password from environment variable
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Send to the email you want to receive messages at
    subject: `Contact Form Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
