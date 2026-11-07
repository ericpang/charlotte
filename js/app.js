/**
 * Charlotte Vance — Creative Designer & Photographer SPA
 * Handles:
 * 1. Loading owner info, contact, socials & media manifest from data/profile.json
 * 2. Rendering customizable media placeholders from the media/ folder
 * 3. Live media swapping & graceful fallback placeholders
 * 4. Category filtering & Lightbox modal preview
 * 5. Theme color switching (Obsidian, Ivory, Sepia, Emerald + Custom Accent)
 * 6. Mobile responsive navigation
 */

const FALLBACK_PROFILE_DATA = {
  name: "Charlotte Vance",
  logoText: "CV.",
  title: "Creative Designer & Visual Photographer",
  tagline: "Crafting visual stories through lens, light, and intentional design.",
  bio: "Multidisciplinary art director, graphic designer, and editorial photographer with 8+ years of experience shaping visual identities, architectural photography series, and motion campaigns for global culture and luxury brands.",
  location: "New York, NY — Worldwide",
  stats: [
    { value: "08+", label: "Years Experience" },
    { value: "140+", label: "Projects Delivered" },
    { value: "19", label: "Design & Photo Awards" }
  ],
  contact: {
    email: "hello@charlottevance.studio",
    phone: "+1 (555) 234-5678",
    studio: "245 Mercer St, Suite 4B, New York, NY 10012",
    availability: "Available for Q1/Q2 commissions & creative direction"
  },
  socials: {
    instagram: "https://instagram.com/charlottevance",
    behance: "https://behance.net/charlottevance",
    dribbble: "https://dribbble.com/charlottevance",
    linkedin: "https://linkedin.com/in/charlottevance",
    vimeo: "https://vimeo.com/charlottevance"
  },
  heroMedia: {
    portraitSrc: "media/hero/portrait-hero.svg",
    portraitPlaceholder: "Hero Portrait — media/hero/portrait-hero.jpg (900×1100)",
    reelSrc: "media/video/hero-showreel.mp4",
    reelPoster: "media/hero/showreel-poster.svg",
    reelPlaceholder: "Showreel Video — media/video/hero-showreel.mp4 (1920×1080)"
  },
  services: [
    {
      number: "01",
      title: "Editorial & Architectural Photography",
      description: "High-contrast monochrome and natural-light color photography for fashion houses, architectural digests, and Monograph publications.",
      tags: ["Medium Format", "Studio Lighting", "Location Scouting", "Color Grading"]
    },
    {
      number: "02",
      title: "Brand Identity & Graphic Systems",
      description: "Holistic visual ecosystems encompassing custom typography, packaging design, art direction, and print collateral.",
      tags: ["Art Direction", "Typography", "Packaging", "Brand Guidelines"]
    },
    {
      number: "03",
      title: "Motion Graphics & Visual Reels",
      description: "Cinematic title sequences, social campaign reels, and experimental 3D/2D kinetic typography loops.",
      tags: ["Title Design", "Cinema 4D", "After Effects", "Sound Design"]
    }
  ],
  mediaItems: [
    {
      id: "work-01",
      title: "Brutalist Silence — Concrete & Shadow",
      subtitle: "Architectural Photography Series, Zurich",
      year: "2026",
      category: "photography",
      aspect: "tall",
      type: "image",
      src: "media/photography/brutalist-silence.svg",
      dimensions: "1200 × 1600",
      placeholderText: "Photography Placeholder — media/photography/brutalist-silence.jpg"
    },
    {
      id: "work-02",
      title: "Aether Botanical — Luxury Skincare Identity",
      subtitle: "Brand Strategy, Packaging & Graphic System",
      year: "2026",
      category: "graphics",
      aspect: "wide",
      type: "image",
      src: "media/graphics/aether-botanical.svg",
      dimensions: "1600 × 1100",
      placeholderText: "Graphic Design Placeholder — media/graphics/aether-botanical.jpg"
    },
    {
      id: "work-03",
      title: "Kinetic Chroma — 2026 Studio Showreel",
      subtitle: "Motion Direction & Visual Compilation",
      year: "2026",
      category: "video",
      aspect: "wide",
      type: "video",
      src: "media/video/showreel-2026.mp4",
      poster: "media/video/showreel-poster.svg",
      dimensions: "1920 × 1080 MP4",
      placeholderText: "Video Placeholder — media/video/showreel-2026.mp4"
    },
    {
      id: "work-04",
      title: "Solstice in Kyoto — Dusk Portraits",
      subtitle: "35mm Film Editorial Commission",
      year: "2025",
      category: "photography",
      aspect: "square",
      type: "image",
      src: "media/photography/solstice-kyoto.svg",
      dimensions: "1200 × 1200",
      placeholderText: "Photography Placeholder — media/photography/solstice-kyoto.jpg"
    },
    {
      id: "work-05",
      title: "Kunsthalle Exhibition Monograph",
      subtitle: "Swiss Grid Editorial & Poster Series",
      year: "2025",
      category: "graphics",
      aspect: "tall",
      type: "image",
      src: "media/graphics/kunsthalle-poster.svg",
      dimensions: "1200 × 1600",
      placeholderText: "Graphic Design Placeholder — media/graphics/kunsthalle-poster.jpg"
    },
    {
      id: "work-06",
      title: "Nocturne Frequency — Audio-Reactive Loop",
      subtitle: "Experimental Motion & Stage Visuals",
      year: "2025",
      category: "video",
      aspect: "square",
      type: "video",
      src: "media/video/nocturne-loop.mp4",
      poster: "media/video/nocturne-poster.svg",
      dimensions: "1080 × 1080 MP4",
      placeholderText: "Video Placeholder — media/video/nocturne-loop.mp4"
    },
    {
      id: "work-07",
      title: "Velvet Mirage — High Fashion Lookbook",
      subtitle: "Studio Lighting & Color Direction, Paris",
      year: "2025",
      category: "photography",
      aspect: "wide",
      type: "image",
      src: "media/photography/velvet-mirage.svg",
      dimensions: "1600 × 1000",
      placeholderText: "Photography Placeholder — media/photography/velvet-mirage.jpg"
    },
    {
      id: "work-08",
      title: "Vespera Vinyl & Sonic Packaging",
      subtitle: "Gatefold LP Sleeve & Custom Display Typeface",
      year: "2025",
      category: "graphics",
      aspect: "square",
      type: "image",
      src: "media/graphics/vespera-vinyl.svg",
      dimensions: "1400 × 1400",
      placeholderText: "Graphic Design Placeholder — media/graphics/vespera-vinyl.jpg"
    }
  ]
};

const THEMES = [
  { id: "dark", label: "Obsidian", defaultAccent: "#e2b887" },
  { id: "light", label: "Ivory", defaultAccent: "#c96a4b" },
  { id: "sepia", label: "Warm Film", defaultAccent: "#e09f67" },
  { id: "emerald", label: "Emerald", defaultAccent: "#34d399" }
];

let appState = {
  profile: null,
  activeFilter: "all",
  currentThemeIndex: 0
};

document.addEventListener("DOMContentLoaded", async () => {
  initThemeSystem();
  initNavigation();
  initPlaceholderGuidesToggle();
  initHeroMediaSwap();
  initShowreelControls();
  initLightbox();
  initContactForm();

  const profileData = await loadProfileJson();
  appState.profile = profileData;

  bindOwnerProfile(profileData);
  renderPortfolioGallery(profileData.mediaItems || []);
  renderServices(profileData.services || []);
  initFilterTabs(profileData.mediaItems || []);
});

/**
 * Fetches owner profile and media manifest from data/profile.json
 */
async function loadProfileJson() {
  const statusBadge = document.getElementById("jsonStatusBadge");
  try {
    const response = await fetch("data/profile.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (statusBadge) statusBadge.textContent = "Loaded via fetch()";
    return data;
  } catch (err) {
    if (statusBadge) statusBadge.textContent = "Loaded (Local Fallback)";
    return FALLBACK_PROFILE_DATA;
  }
}

/**
 * Binds JSON owner fields (name, contact, email, socials) across the DOM
 */
function bindOwnerProfile(profile) {
  const flatMap = {
    name: profile.name,
    logoText: profile.logoText || "CV.",
    title: profile.title,
    tagline: profile.tagline,
    bio: profile.bio,
    location: profile.location,
    email: profile.contact?.email,
    phone: profile.contact?.phone,
    studio: profile.contact?.studio,
    availability: profile.contact?.availability
  };

  document.querySelectorAll("[data-bind]").forEach((el) => {
    const key = el.getAttribute("data-bind");
    if (flatMap[key]) {
      el.textContent = flatMap[key];
    }
    const hrefType = el.getAttribute("data-bind-href");
    if (hrefType === "mailto" && flatMap.email) {
      el.setAttribute("href", `mailto:${flatMap.email}`);
    } else if (hrefType === "tel" && flatMap.phone) {
      el.setAttribute("href", `tel:${flatMap.phone.replace(/[^+\d]/g, "")}`);
    }
  });

  // Hero media paths from JSON
  if (profile.heroMedia?.portraitSrc) {
    const heroImg = document.getElementById("heroPortraitImg");
    const heroPath = document.getElementById("heroPortraitPath");
    if (heroImg) heroImg.src = profile.heroMedia.portraitSrc;
    if (heroPath) heroPath.textContent = profile.heroMedia.portraitSrc;
  }

  // Stats
  const statsContainer = document.getElementById("heroStats");
  if (statsContainer && Array.isArray(profile.stats)) {
    statsContainer.innerHTML = profile.stats
      .map(
        (stat) => `
        <div class="stat-item">
          <div class="stat-card-num">${escapeHtml(stat.value)}</div>
          <div class="stat-card-label">${escapeHtml(stat.label)}</div>
        </div>
      `
      )
      .join("");
  }

  // Social Media Handles
  const socialContainer = document.getElementById("socialLinksContainer");
  const footerSocials = document.getElementById("footerSocials");
  if (profile.socials) {
    const entries = Object.entries(profile.socials);
    if (socialContainer) {
      socialContainer.innerHTML = entries
        .map(
          ([platform, url]) => `
          <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="social-pill">
            <span>${escapeHtml(platform)}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        `
        )
        .join("");
    }
    if (footerSocials) {
      footerSocials.innerHTML = entries
        .map(
          ([platform, url]) =>
            `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(platform)}</a>`
        )
        .join("");
    }
  }

  // JSON Inspector Preview
  const jsonBox = document.getElementById("jsonPreviewBox");
  if (jsonBox) {
    const summaryJson = {
      name: profile.name,
      title: profile.title,
      contact: profile.contact,
      socials: profile.socials
    };
    jsonBox.textContent = JSON.stringify(summaryJson, null, 2);
  }

  const footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
}

/**
 * Renders portfolio items from media/ folder with customizable placeholders
 */
function renderPortfolioGallery(items) {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  const filtered =
    appState.activeFilter === "all"
      ? items
      : items.filter((item) => item.category === appState.activeFilter);

  grid.innerHTML = filtered
    .map((item) => {
      const isVideo = item.type === "video";
      const badgeLabel = isVideo
        ? `VIDEO · ${item.dimensions || "MP4"}`
        : `${item.category.toUpperCase()} · ${item.dimensions || "IMAGE"}`;

      const mediaMarkup = isVideo
        ? `<video
             class="media-asset"
             src="${escapeHtml(item.src)}"
             poster="${escapeHtml(item.poster || "")}"
             muted
             loop
             playsinline
             preload="metadata"
           ></video>`
        : `<img
             class="media-asset"
             src="${escapeHtml(item.src)}"
             alt="${escapeHtml(item.title)}"
             loading="lazy"
           />`;

      return `
        <article class="portfolio-card" data-category="${escapeHtml(item.category)}" data-aspect="${escapeHtml(item.aspect || "wide")}" data-id="${escapeHtml(item.id)}">
          <div class="portfolio-card-media media-frame" data-lightbox-id="${escapeHtml(item.id)}">
            ${mediaMarkup}
            <div class="placeholder-overlay">
              <span class="placeholder-badge">${escapeHtml(badgeLabel)}</span>
              <code class="placeholder-path">${escapeHtml(item.src)}</code>
            </div>
            <div class="frame-caption-bar">
              <span class="mono-label">${escapeHtml(item.year || "2026")}</span>
              <label class="swap-media-btn" title="Test a custom image or video in this placeholder" onclick="event.stopPropagation()">
                <input type="file" accept="image/*,video/*" class="sr-only card-swap-input" data-card-id="${escapeHtml(item.id)}" />
                <span>Swap Media</span>
              </label>
            </div>
          </div>

          <div class="portfolio-card-footer">
            <div>
              <h3 class="portfolio-card-title">${escapeHtml(item.title)}</h3>
              <p class="portfolio-card-sub">${escapeHtml(item.subtitle || item.placeholderText || "")}</p>
            </div>
            <div class="portfolio-card-actions">
              <button type="button" class="expand-btn" data-expand-id="${escapeHtml(item.id)}">
                INSPECT &nearr;
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  // Attach fallback error handler if a file in media/ is missing
  grid.querySelectorAll("img.media-asset").forEach((img) => {
    img.addEventListener("error", () => {
      const cardMedia = img.closest(".portfolio-card-media");
      if (!cardMedia) return;
      const srcPath = img.getAttribute("src");
      img.replaceWith(createFallbackPlaceholderNode(srcPath));
    });
  });

  // Hover video play preview
  grid.querySelectorAll("video.media-asset").forEach((vid) => {
    const frame = vid.closest(".portfolio-card-media");
    frame?.addEventListener("mouseenter", () => {
      vid.play().catch(() => {});
    });
    frame?.addEventListener("mouseleave", () => {
      vid.pause();
    });
  });

  // Attach live "Swap Media" handlers on each gallery card
  grid.querySelectorAll(".card-swap-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const cardId = input.getAttribute("data-card-id");
      const card = grid.querySelector(`.portfolio-card[data-id="${cardId}"]`);
      if (!card) return;

      const mediaContainer = card.querySelector(".portfolio-card-media");
      const oldAsset = mediaContainer.querySelector(".media-asset, .missing-media-fallback");
      const objectUrl = URL.createObjectURL(file);
      const isVideoFile = file.type.startsWith("video/");

      let newEl;
      if (isVideoFile) {
        newEl = document.createElement("video");
        newEl.src = objectUrl;
        newEl.muted = true;
        newEl.loop = true;
        newEl.autoplay = true;
        newEl.playsInline = true;
        newEl.className = "media-asset";
      } else {
        newEl = document.createElement("img");
        newEl.src = objectUrl;
        newEl.alt = file.name;
        newEl.className = "media-asset";
      }

      if (oldAsset) oldAsset.replaceWith(newEl);
      const pathBadge = mediaContainer.querySelector(".placeholder-path");
      if (pathBadge) pathBadge.textContent = `media/custom/${file.name}`;

      // Update item in memory so Lightbox shows the swapped file
      const targetItem = appState.profile.mediaItems.find((i) => i.id === cardId);
      if (targetItem) {
        targetItem.src = objectUrl;
        targetItem.type = isVideoFile ? "video" : "image";
      }
    });
  });

  // Attach Lightbox triggers
  grid.querySelectorAll("[data-lightbox-id], [data-expand-id]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const id =
        trigger.getAttribute("data-lightbox-id") ||
        trigger.getAttribute("data-expand-id");
      openLightboxById(id);
    });
  });
}

function createFallbackPlaceholderNode(srcPath) {
  const div = document.createElement("div");
  div.className = "missing-media-fallback";
  div.innerHTML = `
    <span class="mono-label">CUSTOMIZABLE PLACEHOLDER</span>
    <p style="margin-top:0.4rem;font-weight:600;">Drop file into <code>${escapeHtml(srcPath)}</code></p>
    <p style="font-size:0.8rem;color:var(--text-muted);margin-top:0.25rem;">Or click "Swap Media" below to preview</p>
  `;
  return div;
}

/**
 * Renders Creative Services from profile.json
 */
function renderServices(services) {
  const container = document.getElementById("servicesGrid");
  if (!container) return;

  container.innerHTML = services
    .map(
      (srv) => `
      <article class="service-card">
        <div>
          <span class="service-num">${escapeHtml(srv.number)} // DISCIPLINE</span>
          <h3 class="service-title">${escapeHtml(srv.title)}</h3>
          <p class="service-desc">${escapeHtml(srv.description)}</p>
        </div>
        <ul class="service-tags">
          ${(srv.tags || [])
            .map((t) => `<li class="service-tag">${escapeHtml(t)}</li>`)
            .join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

/**
 * Filter Tabs Logic
 */
function initFilterTabs(items) {
  const counts = {
    all: items.length,
    photography: items.filter((i) => i.category === "photography").length,
    graphics: items.filter((i) => i.category === "graphics").length,
    video: items.filter((i) => i.category === "video").length
  };

  Object.entries(counts).forEach(([key, val]) => {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = val;
  });

  document.querySelectorAll(".filter-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      appState.activeFilter = btn.getAttribute("data-filter") || "all";
      renderPortfolioGallery(appState.profile.mediaItems || []);
    });
  });
}

/**
 * Theme Switcher Button + Palette Popover + Custom Accent Picker
 */
function initThemeSystem() {
  const root = document.documentElement;
  const cycleBtn = document.getElementById("themeCycleBtn");
  const themeLabel = document.getElementById("currentThemeLabel");
  const paletteTrigger = document.getElementById("themePaletteTrigger");
  const popover = document.getElementById("themePopover");
  const accentPicker = document.getElementById("customAccentPicker");

  const savedTheme = localStorage.getItem("charlotte_theme") || "dark";
  const savedAccent = localStorage.getItem("charlotte_custom_accent");

  const initialIdx = THEMES.findIndex((t) => t.id === savedTheme);
  appState.currentThemeIndex = initialIdx >= 0 ? initialIdx : 0;
  applyTheme(THEMES[appState.currentThemeIndex].id, savedAccent);

  // Cycle theme on main button click
  cycleBtn?.addEventListener("click", () => {
    appState.currentThemeIndex = (appState.currentThemeIndex + 1) % THEMES.length;
    const nextTheme = THEMES[appState.currentThemeIndex];
    localStorage.removeItem("charlotte_custom_accent");
    applyTheme(nextTheme.id, null);
  });

  // Toggle palette popover
  paletteTrigger?.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = popover.hasAttribute("hidden");
    if (isHidden) {
      popover.removeAttribute("hidden");
      paletteTrigger.setAttribute("aria-expanded", "true");
    } else {
      popover.setAttribute("hidden", "");
      paletteTrigger.setAttribute("aria-expanded", "false");
    }
  });

  // Preset option buttons inside popover
  document.querySelectorAll("[data-theme-select]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const themeId = btn.getAttribute("data-theme-select");
      const idx = THEMES.findIndex((t) => t.id === themeId);
      if (idx >= 0) appState.currentThemeIndex = idx;
      localStorage.removeItem("charlotte_custom_accent");
      applyTheme(themeId, null);
    });
  });

  // Custom accent color picker
  accentPicker?.addEventListener("input", (e) => {
    const color = e.target.value;
    root.style.setProperty("--accent", color);
    localStorage.setItem("charlotte_custom_accent", color);
  });

  // Close popover on outside click
  document.addEventListener("click", (e) => {
    if (popover && !popover.hasAttribute("hidden")) {
      if (!popover.contains(e.target) && e.target !== paletteTrigger) {
        popover.setAttribute("hidden", "");
        paletteTrigger?.setAttribute("aria-expanded", "false");
      }
    }
  });

  function applyTheme(themeId, customAccent) {
    const themeObj = THEMES.find((t) => t.id === themeId) || THEMES[0];
    root.setAttribute("data-theme", themeObj.id);
    localStorage.setItem("charlotte_theme", themeObj.id);

    if (customAccent) {
      root.style.setProperty("--accent", customAccent);
      if (accentPicker) accentPicker.value = customAccent;
    } else {
      root.style.removeProperty("--accent");
      if (accentPicker) accentPicker.value = themeObj.defaultAccent;
    }

    if (themeLabel) themeLabel.textContent = themeObj.label;

    document.querySelectorAll("[data-theme-select]").forEach((btn) => {
      btn.classList.toggle(
        "active",
        btn.getAttribute("data-theme-select") === themeObj.id
      );
    });
  }
}

/**
 * Toggle Media Placeholder Path Overlays
 */
function initPlaceholderGuidesToggle() {
  const btn = document.getElementById("placeholderGuideToggle");
  btn?.addEventListener("click", () => {
    const isPressed = btn.getAttribute("aria-pressed") === "true";
    const nextState = !isPressed;
    btn.setAttribute("aria-pressed", String(nextState));
    document.body.classList.toggle("hide-media-guides", !nextState);
  });
}

/**
 * Hero Portrait Live Swap
 */
function initHeroMediaSwap() {
  const input = document.querySelector('[data-swap-target="heroPortraitImg"]');
  input?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = document.getElementById("heroPortraitImg");
    const pathEl = document.getElementById("heroPortraitPath");
    if (img) img.src = URL.createObjectURL(file);
    if (pathEl) pathEl.textContent = `media/hero/${file.name}`;
  });
}

/**
 * Showreel Video Player & Custom Video Loader
 */
function initShowreelControls() {
  const video = document.getElementById("heroShowreelVideo");
  const playBtn = document.getElementById("reelPlayBtn");
  const playStatus = document.getElementById("reelPlayStatus");
  const fileInput = document.getElementById("showreelFileInput");

  playBtn?.addEventListener("click", () => {
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => {
          if (playStatus) playStatus.textContent = "Pause Showreel";
        })
        .catch(() => {
          if (playStatus)
            playStatus.textContent = "Poster Active (Load MP4 in media/video/)";
        });
    } else {
      video.pause();
      if (playStatus) playStatus.textContent = "Play Reel / Preview";
    }
  });

  fileInput?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file || !video) return;
    const url = URL.createObjectURL(file);
    if (file.type.startsWith("video/")) {
      video.src = url;
      video.play().catch(() => {});
      if (playStatus) playStatus.textContent = `Playing: ${file.name}`;
    } else if (file.type.startsWith("image/")) {
      video.poster = url;
      if (playStatus) playStatus.textContent = `Poster Updated: ${file.name}`;
    }
  });
}

/**
 * Lightbox Modal for Inspecting Portfolio Media
 */
function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxClose");
  const backdrop = document.getElementById("lightboxBackdrop");

  const closeLightbox = () => {
    if (!modal) return;
    modal.setAttribute("hidden", "");
    const stage = document.getElementById("lightboxStage");
    if (stage) stage.innerHTML = "";
  };

  closeBtn?.addEventListener("click", closeLightbox);
  backdrop?.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hasAttribute("hidden")) {
      closeLightbox();
    }
  });
}

function openLightboxById(id) {
  const item = appState.profile?.mediaItems?.find((i) => i.id === id);
  if (!item) return;

  const modal = document.getElementById("lightboxModal");
  const stage = document.getElementById("lightboxStage");
  const title = document.getElementById("lightboxTitle");
  const subtitle = document.getElementById("lightboxSubtitle");
  const category = document.getElementById("lightboxCategory");
  const pathEl = document.getElementById("lightboxPath");

  if (!modal || !stage) return;

  if (item.type === "video") {
    stage.innerHTML = `<video src="${escapeHtml(item.src)}" poster="${escapeHtml(item.poster || "")}" controls autoplay loop playsinline></video>`;
  } else {
    stage.innerHTML = `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title)}" />`;
  }

  if (title) title.textContent = item.title;
  if (subtitle) subtitle.textContent = item.subtitle || "";
  if (category) category.textContent = `${item.category.toUpperCase()} // ${item.year || "2026"}`;
  if (pathEl) pathEl.textContent = item.src;

  modal.removeAttribute("hidden");
}

/**
 * Mobile Menu & Smooth Scroll Active Link Tracking
 */
function initNavigation() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav-link");

  menuBtn?.addEventListener("click", () => {
    const isOpen = mainNav?.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav?.classList.remove("open");
      menuBtn?.setAttribute("aria-expanded", "false");
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

/**
 * Contact Form Submission Handler
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const senderName = formData.get("senderName");
    const scope = formData.get("projectScope");
    const ownerEmail =
      appState.profile?.contact?.email || "hello@charlottevance.studio";

    if (feedback) {
      feedback.removeAttribute("hidden");
      feedback.textContent = `Thank you, ${senderName}! Your ${scope} inquiry has been prepared for ${ownerEmail}.`;
    }
    form.reset();
  });
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

