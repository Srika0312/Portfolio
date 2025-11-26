import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './LoadingScreen.css'

const LoadingScreen = ({ loading }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval)
                        return 100
                    }
                    return prev + 2
                })
            }, 30)

            return () => clearInterval(interval)
        }
    }, [loading])

    return (
        <motion.div
            className={`loading-screen ${!loading ? 'hidden' : ''}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: loading ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="loading-content">
                <motion.div
                    className="loading-logo"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    3D PORTFOLIO
                </motion.div>

                <div className="loading-bar">
                    <motion.div
                        className="loading-progress"
                        style={{ width: `${progress}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>

                <p className="loading-text">Loading amazing 3D experience... {progress}%</p>
            </div>
        </motion.div>
    )
}

export default LoadingScreen
