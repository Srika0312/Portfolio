import { motion } from 'framer-motion'
import { skillsData } from '../data/skills'
import './Skills.css'

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">SKILLS & EXPERTISE</h2>
                    <p className="section-subtitle">
                        Proficient in industry-standard tools and technologies
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillsData.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            className="skill-category glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="category-title">{category.category}</h3>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                    >
                                        <div className="skill-header">
                                            <div className="skill-name">
                                                <span className="skill-icon">{skill.icon}</span>
                                                <span>{skill.name}</span>
                                            </div>
                                            <span className="skill-level-text">{skill.level}%</span>
                                        </div>

                                        <div className="skill-bar-container">
                                            <motion.div
                                                className="skill-bar"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, ease: 'easeOut' }}
                                            >
                                                <div className="skill-bar-glow"></div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
