# Charlotte Portfolio — Creative Designer & Photographer SPA

A modern, responsive Single Page Application (SPA) built with vanilla **HTML5**, **CSS3**, and **JavaScript**. Designed specifically for creative designers and photographers to showcase visual works, graphics, photography, and video reels with effortless customization.

---

## ✨ Key Features

1. **Pure Vanilla Stack (HTML, CSS & JS)**
   - Lightweight, zero-dependency Single Page Application architecture with smooth section transitions, filtering, and lightbox previews.
2. **Modern Creative & Photography Aesthetic**
   - Editorial typography, gallery-first layout, smooth micro-interactions, and masonry/grid portfolio showcases tailored for visual artists.
3. **Dynamic Media & Customizable Placeholders (`media/` folder)**
   - Built-in customizable placeholders for hero banners, graphic design pieces, photography galleries, and video showreels.
   - Automatically loads images (`.jpg`, `.png`, `.webp`, `.svg`) and videos (`.mp4`, `.webm`) from the local `media/` directory with graceful fallback placeholders when files are missing or being swapped.
4. **JSON-Driven Owner Profile (`data/profile.json`)**
   - Centralized configuration file storing the owner's name, bio, contact details, email, location, and social media handles—no HTML edits required to update personal details.
5. **Fully Mobile Responsive**
   - Fluid layouts using CSS Grid, Flexbox, and responsive typography (`clamp()`) that adapt seamlessly across mobile phones, tablets, laptops, and ultra-wide displays, complete with a touch-friendly mobile navigation menu.
6. **One-Click Theme & Color Switcher**
   - Interactive theme toggle button in the navigation bar allowing visitors to switch between curated color palettes (e.g., **Dark Studio**, **Light Editorial**, **Warm Sepia**, and **Neon Cyber**) powered by CSS custom properties (`:root` variables) and persisted via `localStorage`.

---

## 📁 Project Structure

```text
CharlottePortfolio/
├── index.html          # Main Single Page Application entry point
├── css/
│   └── styles.css      # Core styles, responsive breakpoints & CSS theme variables
├── js/
│   └── app.js          # Profile JSON loader, media gallery renderer & theme switcher
├── data/
│   └── profile.json    # Owner info, contact details, social links & media manifest
├── media/              # Drop your images, graphics, and videos here
│   ├── hero/           # Hero background image/video or portrait
│   ├── photography/    # Photography portfolio items
│   ├── graphics/       # Graphic design & branding projects
│   └── video/          # Showreels and motion graphics clips
└── README.md           # Project documentation
```

---

## ⚙️ Customizing Owner Information (`data/profile.json`)

Update `data/profile.json` to personalize your name, contact info, email, social links, and portfolio items:

```json
{
  "name": "Charlotte Vance",
  "title": "Creative Designer & Visual Photographer",
  "tagline": "Crafting visual stories through lens, light, and intentional design.",
  "location": "New York, NY",
  "contact": {
    "email": "hello@charlottevance.studio",
    "phone": "+1 (555) 234-5678",
    "availability": "Available for freelance & commissions"
  },
  "socials": {
    "instagram": "https://instagram.com/charlottevance",
    "behance": "https://behance.net/charlottevance",
    "dribbble": "https://dribbble.com/charlottevance",
    "linkedin": "https://linkedin.com/in/charlottevance",
    "vimeo": "https://vimeo.com/charlottevance"
  },
  "mediaItems": [
    {
      "id": "work-01",
      "title": "Noir Architectural Series",
      "category": "photography",
      "type": "image",
      "src": "media/photography/noir-architecture.jpg",
      "placeholderText": "Photography Placeholder — 1200x1500"
    },
    {
      "id": "work-02",
      "title": "Kinetix Brand Identity",
      "category": "graphics",
      "type": "image",
      "src": "media/graphics/kinetix-brand.jpg",
      "placeholderText": "Graphic Design Placeholder — 1600x1200"
    },
    {
      "id": "work-03",
      "title": "2026 Visual Showreel",
      "category": "video",
      "type": "video",
      "src": "media/video/showreel-2026.mp4",
      "poster": "media/video/showreel-poster.jpg",
      "placeholderText": "Video Reel Placeholder — 1920x1080 (MP4)"
    }
  ]
}
```

---

## 🖼️ Adding Graphics & Media (`media/` Folder)

1. Place your image files (`.jpg`, `.png`, `.webp`, `.avif`) or video files (`.mp4`, `.webm`) inside the `media/` directory.
2. Reference the file path in `data/profile.json` under `mediaItems` (or match the default filenames).
3. **Automatic Placeholders**: If a file in `media/` does not exist yet, the SPA automatically renders a styled, customizable SVG/CSS placeholder card displaying the expected dimensions and asset path so you can preview the layout before final assets are ready.

---

## 🎨 Theme & Color Customization

Clicking the **Theme Button** in the header cycles through preset color themes or opens the quick color picker. Themes are controlled via CSS variables in `css/styles.css`:

```css
:root[data-theme="dark"] {
  --bg-primary: #0d0d0f;
  --bg-surface: #16161a;
  --text-primary: #f5f5f7;
  --text-muted: #9496a1;
  --accent-color: #e2b887;
}

:root[data-theme="light"] {
  --bg-primary: #faf8f5;
  --bg-surface: #ffffff;
  --text-primary: #141416;
  --text-muted: #5c5e66;
  --accent-color: #c96a4b;
}
```

To add your own color theme, define a new `:root[data-theme="your-theme"]` block in `css/styles.css` and add the theme key to the theme list in `js/app.js`.

---

## 🚀 Getting Started

Because the app uses `fetch()` to load `data/profile.json`, serve the folder over a local HTTP server rather than opening `index.html` via `file://`:

### Option 1: VS Code Live Server
Right-click `index.html` and select **Open with Live Server**.

### Option 2: Python HTTP Server
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Option 3: Node.js (`npx serve`)
```bash
npx serve .
```

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout Behavior |
| :--- | :--- | :--- |
| **Mobile** | `< 640px` | Single-column gallery, collapsible hamburger menu, touch-optimized lightbox |
| **Tablet** | `640px – 1024px` | Two-column masonry grid, adaptive typography |
| **Desktop** | `> 1024px` | Multi-column asymmetric gallery, hover-reveal metadata & video previews |

