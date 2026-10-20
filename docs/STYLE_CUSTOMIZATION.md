# 🎨 Guida alla Personalizzazione dello Stile

## Cambiare i Colori del Sito

### Palette Attuale
Il sito usa una palette minimalista:
- **Nero**: `#000` (testi principali, pulsanti)
- **Grigio scuro**: `#666` (testi secondari)
- **Grigio chiaro**: `#f5f5f5`, `#f8f8f8` (sfondi)
- **Bianco**: `#fff` (sfondo principale)

### Come Cambiare i Colori

#### 1. Creare un file di variabili CSS

Aggiungi all'inizio di `src/index.css`:

```css
:root {
  /* Colori principali */
  --color-primary: #000000;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-background: #ffffff;
  --color-background-alt: #f8f8f8;
  --color-border: rgba(0, 0, 0, 0.1);
  
  /* Esempio palette calda */
  /* --color-primary: #8B7355; */
  /* --color-text: #2C2416; */
  /* --color-text-light: #8B7355; */
  
  /* Esempio palette blu */
  /* --color-primary: #2C3E50; */
  /* --color-text: #1A1A1A; */
  /* --color-text-light: #7F8C8D; */
}
```

#### 2. Usare le variabili nei componenti

Sostituisci i colori hardcoded con le variabili. Esempio in `Navbar.css`:

```css
.navbar-logo {
  color: var(--color-primary);
}

.navbar-link {
  color: var(--color-text-light);
}

.navbar-link:hover {
  color: var(--color-primary);
}
```

---

## Cambiare i Font

### Font Attuale
Sistema font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'...`

### Usare Google Fonts

#### 1. Scegli un font su [Google Fonts](https://fonts.google.com/)

Font consigliati per portfolio:
- **Moderni minimalisti**: Inter, Poppins, Work Sans
- **Eleganti**: Cormorant Garamond, Playfair Display
- **Classici**: Lora, Crimson Text

#### 2. Aggiungi in `index.html`:

```html
<head>
  <!-- Altri meta tag -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
</head>
```

#### 3. Aggiorna `src/index.css`:

```css
:root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

#### 4. Font per titoli diverso dal body

In `src/App.css`:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}
```

---

## Layout e Spaziature

### Cambiare la larghezza massima

Cerca `max-width: 1400px` nei file CSS e modifica:

```css
.container {
  max-width: 1200px;  /* Più stretto */
  /* o */
  max-width: 1600px;  /* Più largo */
}
```

### Spaziature

Modifica padding e margin per dare più "respiro":

```css
/* In Home.css */
.hero {
  padding: 8rem 2rem 4rem;  /* Aumenta da 6rem a 8rem */
}

.projects-grid {
  gap: 3rem;  /* Aumenta da 2rem a 3rem */
}
```

---

## Griglia Progetti

### Layout Homepage

In `src/pages/Home.css`, la griglia è:

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}
```

**Variazioni:**

```css
/* 3 colonne fisse */
grid-template-columns: repeat(3, 1fr);

/* Progetti più piccoli */
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

/* Progetti più grandi */
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));

/* 2 colonne fisse */
grid-template-columns: repeat(2, 1fr);
```

### Rapporto Aspetto Immagini

```css
.project-image-wrapper {
  aspect-ratio: 4/3;  /* Attuale */
  /* Prova: */
  /* aspect-ratio: 16/9; */  /* Più panoramico */
  /* aspect-ratio: 1/1; */    /* Quadrato */
  /* aspect-ratio: 3/4; */    /* Verticale */
}
```

---

## Animazioni

### Velocità Animazioni

In tutti i file con `framer-motion`, modifica `duration`:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}  /* Aumenta per rallentare */
>
```

### Disattivare Animazioni

Rimuovi i componenti `motion` e sostituisci con `div` normali:

```jsx
// Da:
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// A:
<div>
```

### Hover Effects Personalizzati

In qualsiasi `.css` file:

```css
.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);  /* Solleva la card */
  /* o */
  transform: scale(1.02);        /* Ingrandisce leggermente */
}
```

---

## Navbar

### Navbar Trasparente

In `src/components/Navbar.css`:

```css
.navbar {
  background: transparent;  /* Invece di rgba(255, 255, 255, 0.95) */
  backdrop-filter: none;
}

/* Diventa solida allo scroll con JavaScript */
```

### Navbar Sempre Solida

```css
.navbar {
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
```

### Centrare il Logo

```css
.navbar-container {
  justify-content: center;  /* Invece di space-between */
}
```

---

## Footer

### Footer Scuro

In `src/components/Footer.css`:

```css
.footer {
  background: #000;
  color: #fff;
  border-top: none;
}

.footer-text {
  color: rgba(255, 255, 255, 0.7);
}
```

---

## Esempi di Palette Complete

### Palette Elegante Beige

```css
:root {
  --color-primary: #8B7355;
  --color-text: #2C2416;
  --color-text-light: #A08968;
  --color-background: #FAF8F3;
  --color-background-alt: #F0EBE3;
  --color-border: rgba(139, 115, 85, 0.2);
}
```

### Palette Moderna Blu Navy

```css
:root {
  --color-primary: #1A2332;
  --color-text: #1A2332;
  --color-text-light: #6C7A8C;
  --color-background: #FFFFFF;
  --color-background-alt: #F7F9FC;
  --color-border: rgba(26, 35, 50, 0.1);
}
```

### Palette Minimalista Grigia

```css
:root {
  --color-primary: #2D2D2D;
  --color-text: #1A1A1A;
  --color-text-light: #808080;
  --color-background: #FAFAFA;
  --color-background-alt: #F5F5F5;
  --color-border: rgba(0, 0, 0, 0.08);
}
```

---

## Testing Responsive

Testa sempre le modifiche su:
- Desktop (1920px, 1440px, 1280px)
- Tablet (768px)
- Mobile (375px, 414px)

Usa Chrome DevTools: F12 → Toggle Device Toolbar
