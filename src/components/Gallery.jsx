import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projectsData, categories } from '../data/projects'
import './Gallery.css'

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const [selectedProject, setSelectedProject] = useState(null)

    const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory)

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">MY WORK</h2>
                    <p className="section-subtitle">
                        Explore my latest 3D art projects and creative endeavors
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    className="category-filter"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                            {activeCategory === category && (
                                <motion.div
                                    className="filter-indicator"
                                    layoutId="filterIndicator"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="projects-grid"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="project-modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                className="modal-content glass"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="modal-close"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    ✕
                                </button>

                                <div className="modal-image-container">
                                    <div className="modal-placeholder">
                                        <span className="placeholder-icon">🎨</span>
                                        <p>3D Model Viewer</p>
                                    </div>
                                </div>

                                <div className="modal-info">
                                    <h3 className="modal-title">{selectedProject.title}</h3>
                                    <p className="modal-category">{selectedProject.category}</p>
                                    <p className="modal-description">{selectedProject.description}</p>

                                    <div className="modal-tags">
                                        {selectedProject.tags.map((tag) => (
                                            <span key={tag} className="modal-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Gallery
