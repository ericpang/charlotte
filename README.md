# Charlotte Portfolio — Creative Designer & Photographer SPA

A modern, responsive Single Page Application (SPA) built with vanilla **HTML5**, **CSS3**, and **JavaScript**. Designed specifically for creative designers and photographers to showcase visual works, graphics, photography, and video reels with effortless customization.

---

## ✨ Key Features

1. **Pure Vanilla Stack (HTML, CSS & JS)**
   - Lightweight, zero-dependency Single Page Application architecture with smooth navigation, category filtering (`All Works`, `Photography`, `Graphic Design`, `Video & Motion`), and a fullscreen lightbox inspector.
2. **Modern Creative & Photography Aesthetic**
   - Editorial serif typography (`Cormorant Garamond`), clean UI sans (`Plus Jakarta Sans`), and technical camera/metadata monospace labels (`JetBrains Mono`) paired with an asymmetric gallery grid.
3. **Dynamic Media & Customizable Placeholders (`media/` folder)**
   - Built-in customizable placeholders for the hero portrait, graphic design pieces, photography series, and video showreels.
   - Automatically loads images (`.svg`, `.jpg`, `.png`, `.webp`) and videos (`.mp4`, `.webm`) from the local `media/` directory.
   - Includes a **Media Guides** toggle in the header to show/hide `media/` file path badges, plus a **Swap Media** button on every card to test local images and videos live in the browser.
4. **JSON-Driven Owner Profile (`data/profile.json`)**
   - Centralized configuration file storing the owner's name, bio, contact details, email, phone, studio address, and social media handles—bound dynamically across the entire page (with a built-in fallback so opening `index.html` directly via `file://` also works).
5. **Fully Mobile Responsive**
   - Fluid layouts using CSS Grid, Flexbox, and `clamp()` typography that adapt seamlessly across mobile phones (`< 480px`, `< 768px`), tablets (`< 1024px`), and desktop screens, complete with a collapsible mobile navigation menu.
6. **One-Click Theme & Color Switcher**
   - Interactive theme cycle button and palette popover in the navigation bar allowing visitors to switch between **Obsidian Dark**, **Editorial Ivory**, **Warm Film**, and **Cyber Emerald**, or pick a **Custom Accent Color** persisted via `localStorage`.

---

## 📁 Project Structure

```text
CharlottePortfolio/
├── index.html                           # Main Single Page Application entry point
├── css/
│   └── styles.css                       # Core styles, responsive breakpoints & theme variables
├── js/
│   └── app.js                           # JSON loader, gallery renderer, media swapper & theme switcher
├── data/
│   └── profile.json                     # Owner info, contact details, social links & media manifest
├── media/                               # Drop your images, graphics, and videos here
│   ├── hero/
│   │   ├── portrait-hero.svg            # Hero portrait placeholder
│   │   └── showreel-poster.svg          # Director's showreel poster placeholder
│   ├── photography/
│   │   ├── brutalist-silence.svg        # Photography placeholder 01
│   │   ├── solstice-kyoto.svg           # Photography placeholder 02
│   │   └── velvet-mirage.svg            # Photography placeholder 03
│   ├── graphics/
│   │   ├── aether-botanical.svg         # Graphic design placeholder 01
│   │   ├── kunsthalle-poster.svg        # Graphic design placeholder 02
│   │   └── vespera-vinyl.svg            # Graphic design placeholder 03
│   └── video/
│       ├── showreel-poster.svg          # Video card 01 poster
│       └── nocturne-poster.svg          # Video card 02 poster
└── README.md                            # Project documentation
```

---

## ⚙️ Customizing Owner Information (`data/profile.json`)

Edit `data/profile.json` to update the owner's name, contact details, email, social media links, and portfolio media items:

```json
{
  "name": "Charlotte Vance",
  "logoText": "CV.",
  "title": "Creative Designer & Visual Photographer",
  "tagline": "Crafting visual stories through lens, light, and intentional design.",
  "location": "New York, NY — Worldwide",
  "contact": {
    "email": "hello@charlottevance.studio",
    "phone": "+1 (555) 234-5678",
    "studio": "245 Mercer St, Suite 4B, New York, NY 10012",
    "availability": "Available for Q1/Q2 commissions & creative direction"
  },
  "socials": {
    "instagram": "https://instagram.com/charlottevance",
    "behance": "https://behance.net/charlottevance",
    "dribbble": "https://dribbble.com/charlottevance",
    "linkedin": "https://linkedin.com/in/charlottevance",
    "vimeo": "https://vimeo.com/charlottevance"
  }
}
```

---

## 🖼️ Adding Graphics & Media (`media/` Folder)

1. Place your image files (`.jpg`, `.png`, `.webp`, `.svg`) or video files (`.mp4`, `.webm`) inside `media/hero/`, `media/photography/`, `media/graphics/`, or `media/video/`.
2. Update the `"src"` path in `data/profile.json` under `mediaItems` (or overwrite the existing filenames).
3. **Live Browser Preview**: Click **Swap Media** on any placeholder card (or **Load Custom Video / Poster** on the showreel) to immediately preview local files from your computer without reloading the page.

---

## 🎨 Theme & Color Customization

- Click the **Theme Button** (`Obsidian` / `Ivory` / `Warm Film` / `Emerald`) in the top navigation bar to cycle through the 4 built-in color palettes.
- Click the **Color Swatch Trigger** next to the theme button to open the palette popover and select a preset or pick any **Custom Accent Color** using the color picker.
- Preferences are saved automatically in `localStorage`.

---

## 🚀 Getting Started

### Option 1: Open Directly
Open `index.html` in any modern web browser (includes a built-in fallback for `data/profile.json` when opened via `file://`).

### Option 2: Local HTTP Server (Recommended for Live `data/profile.json` Edits)
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.
