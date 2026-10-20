# 🚀 Guida Rapida

## 1. Avvia il Progetto

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

## 2. Personalizza i Contenuti

### Logo e Titolo
- Apri `src/components/Navbar.jsx`
- Modifica il testo `Portfolio` con il tuo nome/brand

### Informazioni Contatti
- Apri `src/pages/Contact.jsx`
- Sostituisci email, telefono e indirizzo con i tuoi dati

### Biografia
- Apri `src/pages/About.jsx`
- Scrivi la tua biografia e informazioni professionali
- Sostituisci l'immagine placeholder con la tua foto

### Footer
- Apri `src/components/Footer.jsx`
- Personalizza il testo del copyright

## 3. Aggiungi i Tuoi Progetti

### Passo 1: Prepara le Immagini
1. Crea una cartella per ogni progetto in `public/projects/`
   Esempio: `public/projects/appartamento-milano/`

2. Inserisci le immagini del progetto:
   - `cover.jpg` (immagine principale)
   - `image1.jpg`, `image2.jpg`, ecc. (altre foto)

### Passo 2: Aggiorna projects.json
Apri `src/data/projects.json` e aggiungi i tuoi progetti:

```json
{
  "id": "appartamento-milano",
  "slug": "appartamento-milano",
  "title": {
    "it": "Appartamento Milano Centro",
    "en": "Milan City Center Apartment"
  },
  "year": "2024",
  "client": "Nome Cliente (opzionale)",
  "description": {
    "it": "Ristrutturazione completa di un appartamento di 120mq nel centro di Milano...",
    "en": "Complete renovation of a 120sqm apartment in Milan city center..."
  },
  "coverImage": "/projects/appartamento-milano/cover.jpg",
  "images": [
    "/projects/appartamento-milano/image1.jpg",
    "/projects/appartamento-milano/image2.jpg",
    "/projects/appartamento-milano/image3.jpg"
  ]
}
```

## 4. Modifica Testi e Traduzioni

Apri `src/i18n/translations.json` per modificare tutti i testi del sito in italiano e inglese.

## 5. Personalizza lo Stile

### Colori
I file CSS principali sono in:
- `src/components/*.css` (Navbar e Footer)
- `src/pages/*.css` (tutte le pagine)

### Font
Per cambiare font, modifica `src/index.css` e `src/App.css`

## 6. Build per Produzione

Quando sei pronto per pubblicare:

```bash
npm run build
```

I file ottimizzati saranno in `dist/`

## 7. Deploy

### Opzione A: Vercel (Raccomandato)
1. Crea account su [vercel.com](https://vercel.com)
2. Collega il tuo repository GitHub
3. Deploy automatico!

### Opzione B: Netlify
1. Crea account su [netlify.com](https://netlify.com)
2. Drag & drop della cartella `dist/` dopo il build
3. Sito online!

## 📋 Checklist Prima del Deploy

- [ ] Ho sostituito tutti i testi placeholder
- [ ] Ho aggiunto i miei progetti reali
- [ ] Ho inserito le mie informazioni di contatto
- [ ] Ho aggiunto la mia foto nella sezione About
- [ ] Ho testato il sito in italiano e inglese
- [ ] Ho testato il sito su mobile
- [ ] Ho ottimizzato tutte le immagini
- [ ] Ho personalizzato il file `index.html` (titolo e meta tags)

## 🆘 Problemi Comuni

**Il server non parte?**
- Controlla che Node.js sia installato: `node --version`
- Prova a reinstallare: `npm install`

**Le immagini non si vedono?**
- Verifica che le immagini siano in `public/projects/`
- Controlla che i percorsi in `projects.json` siano corretti
- Le immagini devono iniziare con `/projects/...`

**Errori durante il build?**
- Pulisci la cache: `npm run build -- --clean`
- Riprova: `npm run build`

## 🎯 Prossimi Passi

1. Aggiungi Google Analytics (opzionale)
2. Configura un form di contatto funzionante con EmailJS
3. Ottimizza le immagini con lazy loading
4. Aggiungi un blog (opzionale)

---

**Hai domande?** Consulta il README.md principale o la documentazione di React.
