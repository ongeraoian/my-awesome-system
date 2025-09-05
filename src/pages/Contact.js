import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

const Contactus = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Replace the placeholders with the form data for emailjs
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      // Send the email using EmailJS
      const response = await emailjs.send(
        'service_qzef8z1',    // Correct Service ID
        'template_5ldjdzv',   // Correct Template ID
        templateParams,       // Data to replace the template variables
        'W4h6lMjxlyTSsZhw7'  // Correct User ID
      );

      // Notify the user of success
      alert('Message sent successfully!');
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactDetails}>
        <h2>Contact Information</h2>
        <div className={styles.infoItem}>
          <span className={styles.icon}>📞</span>
          <div>
            <h4>Phone</h4>
            <p>0727676338</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.icon}>📧</span>
          <div>
            <h4>Email Us</h4>
            <p>info@multside.co.ke</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.icon}>📍</span>
          <div>
            <h4>Address</h4>
            <p>K-mall, Kiambu Rd</p>
          </div>
        </div>
        {/* Add updated iframe map below the address */}
        <div className={styles.mapContainer}>
          <div style={{ width: '100%' }}>
            <iframe
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=K-mall,%20kiambu%20road+(Multside)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="location-map"
            >
              <a href="https://www.gps.ie/">gps map</a>
            </iframe>
          </div>
        </div>
      </div>

      <div className={styles.contactForm}>
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              placeholder="Your message here.."
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
