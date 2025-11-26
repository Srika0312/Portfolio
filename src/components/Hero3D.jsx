import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import './Hero3D.css'
import {
    BlenderLogo,
    AfterEffectsLogo,
    PhotoshopLogo,
    DaVinciResolveLogo,
    PremiereProLogo
} from './SoftwareLogos3D'

// 3D Scene Component with Software Logos
const Scene3D = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#06b6d4" />

            {/* Software Logos positioned around the scene */}
            <BlenderLogo position={[-3, 0, -2]} />
            <AfterEffectsLogo position={[3, 1, -3]} />
            <PhotoshopLogo position={[0, -2, -1]} />
            <DaVinciResolveLogo position={[-2, 2, -4]} />
            <PremiereProLogo position={[2.5, -1, -2.5]} />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </>
    )
}

const Hero3D = () => {
    const scrollToGallery = () => {
        const gallery = document.getElementById('gallery')
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="hero-section">
            {/* 3D Background Canvas */}
            <div className="hero-canvas">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Scene3D />
                </Canvas>
            </div>

            {/* Hero Content */}
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        CREATIVE
                        <span className="gradient-text"> 3D ARTIST</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Crafting immersive digital experiences through stunning 3D art,
                        character design, and environmental storytelling
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.button
                            className="cta-button primary"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToGallery}
                        >
                            View My Work
                        </motion.button>

                        <motion.button
                            className="cta-button secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    onClick={scrollToGallery}
                >
                    <motion.div
                        className="scroll-mouse"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <div className="scroll-wheel"></div>
                    </motion.div>
                    <p className="scroll-text">Scroll to explore</p>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero3D
