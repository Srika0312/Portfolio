import { motion } from 'framer-motion'
import './About.css'

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">ABOUT ME</h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-card glass"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="about-image">
                            <div className="image-placeholder">
                                <span className="placeholder-icon">👨‍🎨</span>
                            </div>
                        </div>

                        <div className="about-text">
                            <h3 className="about-subtitle gradient-text">SRIKANTH PATHMANAABAN</h3>
                            <p className="about-description">
                                As a dedicated 3D artist, I specialize in creating high-quality characters, immersive environments, and detailed props for animations, products, and interactive experiences. I focus on clean modeling, expressive animation, and cinematic presentation to bring ideas to life.
                            </p>
                            <p className="about-description">
                                My work combines technical expertise with creative vision, bringing ideas to
                                life through cutting-edge 3D software and rendering techniques. I'm passionate
                                about pushing the boundaries of digital art and creating memorable visual experiences.
                            </p>

                            <div className="about-stats">
                                <motion.div
                                    className="stat-item"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="stat-number gradient-text">50+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </motion.div>

                                <motion.div
                                    className="stat-item"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="stat-number gradient-text">5+</span>
                                    <span className="stat-label">Years Experience</span>
                                </motion.div>

                                <motion.div
                                    className="stat-item"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="stat-number gradient-text">30+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </motion.div>
                            </div>

                            <div className="about-social">
                                <motion.a
                                    href="#"
                                    className="social-link"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="social-icon">🎨</span>
                                    ArtStation
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="social-link"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="social-icon">💼</span>
                                    LinkedIn
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="social-link"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="social-icon">🐦</span>
                                    Twitter
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
