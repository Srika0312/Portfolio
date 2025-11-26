import { motion } from 'framer-motion'
import { useState } from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project, index, onClick }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick}
            layout
        >
            <div className="card-image-container">
                <div className="card-placeholder">
                    <motion.span
                        className="placeholder-icon"
                        animate={{
                            scale: isHovered ? 1.2 : 1,
                            rotate: isHovered ? 360 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        🎨
                    </motion.span>
                    <p className="placeholder-text">{project.category}</p>
                </div>

                <motion.div
                    className="card-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="view-text">View Project</span>
                </motion.div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-category">{project.category}</p>
                <p className="card-description">{project.description}</p>

                <div className="card-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="card-tag">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="card-gradient-border"></div>
        </motion.div>
    )
}

export default ProjectCard
