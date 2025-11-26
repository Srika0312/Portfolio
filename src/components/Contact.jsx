import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.')
            setFormData({ name: '', email: '', message: '' })
            setIsSubmitting(false)
        }, 1500)
    }

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">GET IN TOUCH</h2>
                    <p className="section-subtitle">
                        Let's collaborate on your next amazing project
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="contact-info-title gradient-text">Let's Create Together</h3>
                        <p className="contact-info-text">
                            I'm always excited to work on new and challenging projects.
                            Whether you need character design, environment art, or any 3D creative work,
                            feel free to reach out!
                        </p>

                        <div className="contact-details">
                            <motion.div
                                className="contact-detail-item"
                                whileHover={{ x: 10 }}
                            >
                                <span className="detail-icon">📧</span>
                                <div className="detail-text">
                                    <span className="detail-label">Email</span>
                                    <span className="detail-value">artist@3dportfolio.com</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="contact-detail-item"
                                whileHover={{ x: 10 }}
                            >
                                <span className="detail-icon">📱</span>
                                <div className="detail-text">
                                    <span className="detail-label">Phone</span>
                                    <span className="detail-value">+1 (555) 123-4567</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="contact-detail-item"
                                whileHover={{ x: 10 }}
                            >
                                <span className="detail-icon">📍</span>
                                <div className="detail-text">
                                    <span className="detail-label">Location</span>
                                    <span className="detail-value">San Francisco, CA</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                required
                                rows="6"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="button-spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </motion.button>
                    </motion.form>
                </div>

                <motion.footer
                    className="footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="footer-text">
                        © 2024 3D Artist Portfolio. Crafted with passion and creativity.
                    </p>
                </motion.footer>
            </div>
        </section>
    )
}

export default Contact
