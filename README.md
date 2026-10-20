# Portfolio Interior Designer

Portfolio website elegante e minimalista per interior designer, costruito con React + Vite.

## 🎨 Caratteristiche

- Design minimalista ed elegante
- Multilingua (Italiano/Inglese)
- Animazioni fluide con Framer Motion
- Responsive design
- Galleria progetti con dettaglio
- Sezione About e Contatti
- Contenuti gestiti tramite JSON (facile da aggiornare)

## 🚀 Tecnologie

- **React** - Library UI
- **Vite** - Build tool veloce
- **React Router** - Navigazione
- **i18next** - Internazionalizzazione
- **Framer Motion** - Animazioni

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview build di produzione
npm run preview
```

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/              # Pagine dell'applicazione
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/               # Dati dei progetti
│   └── projects.json
├── i18n/               # Configurazione traduzioni
│   ├── config.js
│   └── translations.json
└── App.jsx
```

## 🖼️ Aggiungere Progetti

Per aggiungere un nuovo progetto, modifica il file `src/data/projects.json`:

```json
{
  "id": "nuovo-progetto",
  "slug": "nuovo-progetto",
  "title": {
    "it": "Nome Progetto",
    "en": "Project Name"
  },
  "year": "2024",
  "client": "Nome Cliente",
  "description": {
    "it": "Descrizione in italiano",
    "en": "Description in English"
  },
  "coverImage": "/projects/nuovo-progetto/cover.jpg",
  "images": [
    "/projects/nuovo-progetto/image1.jpg",
    "/projects/nuovo-progetto/image2.jpg"
  ]
}
```

Aggiungi le immagini nella cartella `public/projects/nome-progetto/`.

## 🌐 Deploy

Il sito può essere facilmente deployato su:

- **Vercel** (raccomandato per React)
- **Netlify**
- **GitHub Pages**
- Qualsiasi servizio di hosting statico

### Deploy su Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Personalizzazione

### Cambiare i colori
Modifica i file CSS in `src/pages/` e `src/components/`

### Aggiungere pagine
1. Crea il componente in `src/pages/`
2. Aggiungi la rotta in `src/App.jsx`
3. Aggiungi la voce di menu in `src/components/Navbar.jsx`
4. Aggiungi le traduzioni in `src/i18n/translations.json`

### Modificare traduzioni
Edita `src/i18n/translations.json` per cambiare o aggiungere testi.

## 📧 Configurare il Form di Contatto

Il form attualmente è solo frontend. Per renderlo funzionante, puoi usare:

- **EmailJS** - Servizio gratuito per inviare email
- **Formspree** - Backend form semplice
- **Netlify Forms** - Se usi Netlify
- API personalizzata

## 📄 Licenza

Questo progetto è stato creato per uso personale.

## 🤝 Supporto

Per domande o problemi, apri un issue su GitHub.
