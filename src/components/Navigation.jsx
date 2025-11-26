import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navigation.css'

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = ['home', 'about', 'gallery', 'skills', 'contact']
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <motion.nav
            className={`navigation ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="nav-container">
                <motion.div
                    className="nav-logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('home')}
                >
                    <span className="logo-text">3D</span>
                    <span className="logo-accent">ARTIST</span>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="nav-menu desktop-menu">
                    {navItems.map((item) => (
                        <motion.li
                            key={item.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <motion.div
                                        className="active-indicator"
                                        layoutId="activeIndicator"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    height: mobileMenuOpen ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <ul className="mobile-nav-list">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: mobileMenuOpen ? 1 : 0,
                                x: mobileMenuOpen ? 0 : -20
                            }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.nav>
    )
}

export default Navigation
