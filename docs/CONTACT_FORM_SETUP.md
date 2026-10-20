# 📧 Configurare il Form di Contatto

Il form attualmente è solo frontend. Ecco come renderlo funzionante con EmailJS (gratis fino a 200 email/mese).

## Opzione 1: EmailJS (Raccomandato - Gratuito)

### Passo 1: Crea Account
1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/)
2. Registrati gratuitamente

### Passo 2: Configura Email Service
1. Nel dashboard, vai su "Email Services"
2. Clicca "Add New Service"
3. Scegli il tuo provider (Gmail, Outlook, etc.)
4. Segui le istruzioni per collegare l'email

### Passo 3: Crea Template Email
1. Vai su "Email Templates"
2. Crea un nuovo template con questo contenuto:

```
Nuovo messaggio da {{from_name}}

Email: {{from_email}}

Messaggio:
{{message}}
```

### Passo 4: Installa EmailJS

```bash
npm install @emailjs/browser
```

### Passo 5: Aggiorna Contact.jsx

Sostituisci il file `src/pages/Contact.jsx` con questo codice:

```jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',      // Sostituisci con il tuo Service ID
        'YOUR_TEMPLATE_ID',     // Sostituisci con il tuo Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'       // Sostituisci con la tua Public Key
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Errore invio email:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

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
              <a href="mailto:info@example.com" className="info-value">
                info@example.com
              </a>
            </div>

            <div className="info-item">
              <h3 className="info-label">{t('contact.phone')}</h3>
              <a href="tel:+39000000000" className="info-value">
                +39 000 000 000
              </a>
            </div>

            <div className="info-item">
              <h3 className="info-label">{t('contact.address')}</h3>
              <p className="info-value">
                Via Esempio, 123<br />
                00000 Città, Italia
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.name')}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.email')}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.message')}
                required
                rows="6"
                className="form-textarea"
              />
            </div>

            {isError && (
              <p style={{ color: 'red' }}>
                Errore nell'invio. Riprova più tardi.
              </p>
            )}

            <button 
              type="submit" 
              className="form-submit"
              disabled={isSubmitted || isLoading}
            >
              {isLoading 
                ? 'Invio...' 
                : isSubmitted 
                  ? t('contact.messageSent')
                  : t('contact.sendMessage')
              }
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
```

### Passo 6: Trova le tue Credenziali

Nel dashboard EmailJS:
- **Service ID**: In "Email Services"
- **Template ID**: In "Email Templates"
- **Public Key**: In "Account" → "General"

Sostituisci questi valori nel codice sopra.

---

## Opzione 2: Formspree (Più Semplice)

1. Vai su [https://formspree.io/](https://formspree.io/)
2. Crea un account gratuito
3. Ottieni il tuo endpoint URL
4. Cambia il form in `Contact.jsx`:

```jsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  className="contact-form"
>
  <input type="text" name="name" required placeholder="Nome" />
  <input type="email" name="email" required placeholder="Email" />
  <textarea name="message" required placeholder="Messaggio"></textarea>
  <button type="submit">Invia</button>
</form>
```

---

## Opzione 3: Netlify Forms (Se usi Netlify)

Se fai deploy su Netlify, basta aggiungere `netlify` al form:

```jsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  className="contact-form"
>
  <input type="hidden" name="form-name" value="contact" />
  {/* resto del form */}
</form>
```

---

## Raccomandazione

**EmailJS** è la soluzione migliore perché:
- ✅ Completamente gratuito (200 email/mese)
- ✅ Nessun backend necessario
- ✅ Email di conferma automatiche
- ✅ Personalizzazione completa
- ✅ Funziona su qualsiasi hosting
