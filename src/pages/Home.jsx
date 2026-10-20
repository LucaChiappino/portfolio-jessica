import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import './Home.css';

function Home() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="home">
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">{t('home.title')}</h1>
        <p className="hero-subtitle">{t('home.subtitle')}</p>
      </motion.section>

      <section className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/projects/${project.slug}`} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.coverImage} 
                  alt={project.title[currentLang]}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/f0f0f0/666?text=Image+Coming+Soon';
                  }}
                />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title[currentLang]}</h3>
                  <p className="project-year">{project.year}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Home;
