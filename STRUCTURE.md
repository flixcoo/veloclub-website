# Véloclub Website - Modulare Struktur

Diese Website wurde modularisiert für bessere Wartbarkeit und Übersichtlichkeit.

## 📁 Projekt-Struktur

```
src/
├── App.js                      # Haupt-App mit React Router
├── data/
│   └── content.js              # Zentrale Konfiguration (Tour-Daten, Social Links)
├── components/
│   ├── Header.js              # Navigation
│   ├── Hero.js                # Hero-Sektion mit Bandnamen
│   ├── About.js               # Über die Band
│   ├── Music.js               # Spotify/Apple Music Embeds
│   ├── Live.js                # Tour-Termine
│   └── Footer.js              # Footer mit Social Links
├── pages/
│   ├── Home.js                # Startseite (kombiniert alle Komponenten)
│   ├── Impressum.js           # Impressum-Seite
│   └── Datenschutz.js         # Datenschutz-Seite
└── styles/
    └── App.styles.css         # Zentrale CSS-Datei mit allen Styles
```

## 🔗 Navigation

Die Website verwendet **React Router** für die Navigation zwischen Seiten:
- `/` - Startseite (Home)
- `/impressum` - Impressum
- `/datenschutz` - Datenschutz

Die rechtlichen Seiten haben das gleiche Header/Footer-Design wie die Hauptseite, aber einen vereinfachten Content-Bereich mit einem "Zurück zur Startseite" Link.

## ✏️ Wie bearbeite ich die Website?

### Tour-Termine ändern/hinzufügen
Bearbeite: `src/data/content.js`

```javascript
export const TOUR_DATES = [
  { id: 1, date: '12.04.2025', city: 'Hamburg', venue: 'Molotow', link: 'https://tickets.de' },
  // Weitere Termine hier hinzufügen...
];
```

### Social Media Links ändern
Bearbeite: `src/data/content.js`

```javascript
export const SOCIALS = {
  instagram: 'https://instagram.com/veloclubband',
  // Weitere Links hier...
};
```

### Design/Styling anpassen
Bearbeite: `src/styles/App.styles.css`

CSS-Variablen für schnelle Anpassungen:
```css
:root {
  --bg-color: #FAFAF5;      /* Hintergrundfarbe */
  --text-color: #111111;    /* Textfarbe */
  --accent-color: #FF4D00;  /* Akzentfarbe (Orange) */
}
```

### Inhalte ändern
- **Header/Navigation**: `src/components/Header.js`
- **Hero-Sektion**: `src/components/Hero.js`
- **Band-Info**: `src/components/About.js`
- **Musik-Embeds**: `src/components/Music.js`
- **Tour-Termine**: `src/components/Live.js`
- **Footer**: `src/components/Footer.js`
- **Impressum**: `src/pages/Impressum.js` (⚠️ Rechtlich erforderlich - mit echten Daten ausfüllen!)
- **Datenschutz**: `src/pages/Datenschutz.js`

## 🚀 Entwicklung starten

```bash
npm install        # Dependencies installieren
npm start         # Entwicklungsserver starten
npm run build     # Production Build erstellen
```

## 💡 Vorteile der Modularisierung

✅ **Übersichtlich**: Jede Komponente hat ihre eigene Datei  
✅ **Wartbar**: Änderungen sind schnell und gezielt möglich  
✅ **Wiederverwendbar**: Komponenten können leicht erweitert werden  
✅ **Skalierbar**: Neue Sektionen können einfach hinzugefügt werden  

## 📝 Nächste Schritte

1. **⚠️ WICHTIG - Impressum ausfüllen**: Die Platzhalter in `src/pages/Impressum.js` mit echten Daten ersetzen (rechtlich erforderlich!)
2. **Bilder hinzufügen**: Ersetze die Platzhalter in Hero.js und About.js mit echten Bildern
3. **SEO optimieren**: Meta-Tags in `public/index.html` anpassen
4. **Analytics**: Google Analytics oder ähnliches integrieren (optional)

