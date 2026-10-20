import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">{t('contact.title')}</h1>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3 className="info-label">{t('contact.email')}</h3>
              <a href="mailto:jessica.difonte@gmail.com" className="info-value">
                jessica.difonte@gmail.com
              </a>
            </div>

            <div className="info-item">
              <h3 className="info-label">{t('contact.phone')}</h3>
              <a href="tel:+393406083793" className="info-value">
                +39 340 608 3793
              </a>
            </div>

            <div className="info-item">
              <h3 className="info-label">{t('contact.address')}</h3>
              <p className="info-value">
                Corso Novara 93<br />
                10154 Torino, Italia
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
