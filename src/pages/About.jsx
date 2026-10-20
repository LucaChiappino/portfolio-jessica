import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import profiloImg from '../assets/profilo.jpg';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">{t('about.title')}</h1>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src={profiloImg} 
              alt="Interior Designer"
              className="profile-image"
            />
          </div>
          
          <div className="about-text">
            <p className="about-description">
              {t('about.description')}
            </p>
            
            <div className="about-details">
              <p>
                Inserisci qui una descrizione più dettagliata della tua esperienza, 
                filosofia di design, formazione e approccio ai progetti.
              </p>
              
              <p>
                Questo spazio può includere informazioni su:
              </p>
              
              <ul>
                <li>Formazione e background professionale</li>
                <li>Filosofia di design e approccio progettuale</li>
                <li>Tipologie di progetti realizzati</li>
                <li>Collaborazioni e riconoscimenti</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
