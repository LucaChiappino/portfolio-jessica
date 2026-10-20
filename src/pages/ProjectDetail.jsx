import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import './ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="error-message">
          <h1>Progetto non trovato</h1>
          <Link to="/projects" className="back-link">
            {t('projects.backToProjects')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/projects" className="back-link">
          ← {t('projects.backToProjects')}
        </Link>

        <div className="project-header">
          <h1 className="project-detail-title">{project.title[currentLang]}</h1>
          <div className="project-detail-meta">
            {project.year && (
              <div className="meta-item">
                <span className="meta-label">{t('projects.year')}:</span>
                <span className="meta-value">{project.year}</span>
              </div>
            )}
            {project.client && (
              <div className="meta-item">
                <span className="meta-label">{t('projects.client')}:</span>
                <span className="meta-value">{project.client}</span>
              </div>
            )}
          </div>
          {project.description && (
            <p className="project-description">{project.description[currentLang]}</p>
          )}
        </div>

        <div className="project-gallery">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={image} 
                alt={`${project.title[currentLang]} - ${index + 1}`}
                className="gallery-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1200x900/f0f0f0/666?text=Image+Coming+Soon';
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectDetail;
