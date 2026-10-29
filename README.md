# Chandini Sri Mounika Vissamsetti — Personal Portfolio

> **Computer Science Graduate | Software Engineer | AI/ML & Generative AI Developer**  
> SRM University-AP (Specialization in Artificial Intelligence & Machine Learning)  
> Vijayawada, Andhra Pradesh, India

---

## 🌟 Overview

A modern, responsive, editorial-grade personal portfolio website built with **pure semantic HTML5, modern CSS3, and vanilla JavaScript (zero external framework dependencies)**. Designed specifically to present verified engineering capabilities, research internships, national achievements, certifications, and deployed projects to technology recruiters and hiring managers.

- **Live Deployment Path**: Designed for instant hosting on **GitHub Pages**, **Netlify**, or **Vercel** with zero build steps.
- **Existing Portfolio URL**: [https://chandinisrimounika.github.io/Chandinisrimounika_Updated_portfolio/](https://chandinisrimounika.github.io/Chandinisrimounika_Updated_portfolio/)

---

## 🎨 Design System & Branding

- **Palette**: Warm editorial aesthetic featuring off-white paper canvas (`#faf8f5`), rich charcoal typography (`#191c1a`), muted terracotta accents (`#c25e3e`), and sage/deep teal highlights (`#23695f`).
- **Typography**: Google Fonts `Plus Jakarta Sans` paired with `Newsreader` serif accents and `JetBrains Mono` for terminal/code elements.
- **Theme Switcher**: Instant light mode and dark mode toggle with smooth CSS variable transitions and `localStorage` preference memory.
- **Hero Photograph**: Authentic formal portrait framed with subtle technical indicators, floating technology tags, and live opportunity status badge.

---

## 📂 Architecture & Directory Structure

```text
chandini-portfolio/
├── index.html            # Complete semantic HTML5 single-page application
├── 404.html              # Custom branded 404 error page
├── css/
│   └── style.css         # Responsive styling, design tokens, and light/dark theme system
├── js/
│   ├── data.js           # Centralized structured data (Projects, Skills, Experience, Certs)
│   └── main.js           # Vanilla JS controller (Theme toggle, filters, search, modals, form)
├── assets/
│   ├── profile-photo.jpg # Formal portrait photograph
│   ├── Chandini-Sri-Mounika-Vissamsetti-Resume.pdf # Original verified resume
│   └── certifications/   # Official badge SVGs and certificate PNGs/PDFs
│       ├── claude-101-badge.svg
│       ├── claude-code-in-action-badge.svg
│       ├── flipkart-grid-7.png
│       ├── naukri-young-turks.png
│       ├── naukri-young-turks.pdf
│       ├── oracle-generative-ai.png
│       ├── oracle-generative-ai.pdf
│       ├── oracle-ai-foundations.png
│       ├── oracle-ai-foundations.pdf
│       ├── coursera-dsa-badge.svg
│       ├── ibm-pytorch-badge.svg
│       ├── infosys-ai-badge.svg
│       ├── infosys-python-badge.svg
│       ├── github-pull-shark.svg
│       └── edunet-internship.pdf
└── README.md             # Documentation and deployment guide
```

---

## 🚀 How to Run Locally

Because this project is built entirely with native **HTML, CSS, and JavaScript**, no installation or compilation step is required.

### Option 1: Direct File Open
Double-click `index.html` in your file explorer to open it directly in any modern browser (Chrome, Firefox, Safari, Edge).

### Option 2: Using Any Lightweight HTTP Server
Using Python (built into macOS, Linux, and Windows):
```bash
# Navigate to the portfolio folder
cd path/to/chandini-portfolio

# Start a local server on port 8000
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

Using Node.js:
```bash
npx serve .
```

---

## 🌐 Deployment Instructions

### 1. Deploying to GitHub Pages
1. Commit all files in this directory to your repository (e.g. `chandinisrimounika-s_Portfolio` or `<username>.github.io`).
2. In your GitHub repository, go to **Settings** → **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Click **Save**. Your website will be live in 1–2 minutes!

---

## 📋 Verified Features Included

- **Sticky Navigation & Active Scroll Spy**: Highlights current section during scrolling; includes mobile drawer menu.
- **Hero Section**: Two-column layout with formal portrait, technical pills, terminal preview, and primary CTAs.
- **About Me**: Education timeline (SRM University-AP, 7.93 CGPA), editorial bio, and "What I Bring" analytical rigor cards.
- **Technical Skills**: 6 functional categories with level distinction ("Project Proven" vs "Core Studied & Certified") and category filter tabs.
- **Featured Projects**: Top 6 cards with live demos, GitHub links, and detailed architecture modals.
- **Searchable Project Archive**: Dynamic live search across all 15 GitHub repositories.
- **Experience Timeline**: Deep Learning Research Intern at SRM University-AP and Frontend Developer Intern at Edunet / IBM SkillsBuild.
- **Certifications Gallery**: Authentic badges for Claude Academy, Oracle University (GenAI Professional & AI Foundations), IBM, Coursera, and Infosys.
- **Achievements**: Visual showcases for Flipkart GRiD 7.0 (National Semi-Finalist), Naukri Young Turks (93.28%ile), and GitHub Pull Shark.
- **Dedicated Resume**: One-click PDF download and in-browser view with verified document credentials.
- **Contact**: Functional `mailto:` email drafter, 1-click WhatsApp connector, copy-to-clipboard buttons, and toast notifications.
