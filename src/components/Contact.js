// Contact.js
import React, { useState } from 'react';
import './css/Contact.css';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        let formIsValid = true;
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name) {
            newErrors.name = 'Name is required';
            formIsValid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
            formIsValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
            formIsValid = false;
        }

        if (!formData.message) {
            newErrors.message = 'Message is required';
            formIsValid = false;
        }

        setErrors(newErrors);

        if (formIsValid) {
            try {
                const response = await emailjs.send(
                    'service_x9spn0b',
                    'template_t0tj3kg', 
                    formData,
                    'v6AAMJnNt3orHaz3K' 
                );

                if (response.status === 200) {
                    Swal.fire({
                        title: 'Message Sent!',
                        text: 'Thank you for your message. We will get back to you soon.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        timer: 6000,
                        timerProgressBar: true,
                    });
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    console.error('EmailJS Error:', response);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There was a problem sending your message. Please try again later.',
                    });
                }
            } catch (error) {
                console.error('EmailJS Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the required fields and use a valid email format.',
            });
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <div className="error-message">{errors.name}</div>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <div className="error-message">{errors.email}</div>}

                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required 
                />
                {errors.message && <div className="error-message">{errors.message}</div>}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
            </form>
        </section>
    );
}

export default Contact;