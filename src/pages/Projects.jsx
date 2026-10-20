import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import './Projects.css';

function Projects() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="projects-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">{t('projects.title')}</h1>
      </motion.div>

      <div className="projects-list">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/projects/${project.slug}`} className="project-link">
              <div className="project-image-container">
                <img 
                  src={project.coverImage} 
                  alt={project.title[currentLang]}
                  className="project-list-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/f0f0f0/666?text=Image+Coming+Soon';
                  }}
                />
              </div>
              <div className="project-info">
                <h2 className="project-list-title">{project.title[currentLang]}</h2>
                <div className="project-meta">
                  <span className="project-meta-item">{project.year}</span>
                  {project.client && (
                    <>
                      <span className="project-meta-separator">•</span>
                      <span className="project-meta-item">{project.client}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
