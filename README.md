# 🖥️ DarshanOS — macOS-style Portfolio Web App

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&style=flat-square)](https://vite.dev/)
[![Sass](https://img.shields.io/badge/Sass-1.97.2-CC6699?logo=sass&style=flat-square)](https://sass-lang.com/)
[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen?logo=vercel&style=flat-square)](https://darshan-os.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

🔗 **Live Demo:** [darshan-os.vercel.app](https://darshan-os.vercel.app/)

**DarshanOS** is a premium, interactive macOS-inspired web portfolio built to showcase the technical expertise, project work, and professional background of **Darshan Madan Walher**. The application mimics a desktop operating system environment in a web browser, offering draggable, resizable windows, an interactive command-line emulator, a syntax-highlighted code profile reader, GitHub portfolio integration, a Spotify player widget, and full mobile responsive support.

---

## ✨ Features & Capabilities

### 1. 🪟 Reusable Window Manager (`MacWindow`)
* Powered by `react-rnd` (React Resizable and Draggable), allowing users to drag and resize windows fluidly across the desktop viewport.
* Classic macOS window decorations: Title bar, close/minimize/expand color-coded window control dots (red, yellow, green), and window focus management.
* Out-of-bounds containment to prevent windows from being dragged off-screen.
* Fully responsive: Disables dragging and resizing on mobile screens, shifting to a structured fullscreen view.

### 2. 🐚 Interactive Terminal Emulator (`Console`)
* Built with `react-console-emulator` to offer a terminal-style CLI interaction.
* Fully custom-themed terminal with an dynamic zsh prompt (`darshan:~$ `) and Monospace font styling.
* Supports interactive system commands:
  * `about` — Renders Darshan's personal bio, role, and location.
  * `skills` — Displays technical expertise structured across Frontend, Backend, Data/AI, and Security layers.
  * `projects` — Lists highlights of major portfolio projects.
  * `contact` — Outputs direct contact emails and location details.
  * `github` & `linkedin` — Opens social and developer profiles in a new tab.
  * `resume` — Triggers a new window to read the resume file.

### 3. 📝 Interactive Notes Application (`Note`)
* Implements a live code reader that fetches a TypeScript profile (`note.txt` / `darshan.profile.ts`) from the public directory.
* Parses and renders files on-the-fly using `react-markdown`.
* Provides rich, developer-grade syntax highlighting using `react-syntax-highlighter` (themed with `vscDarkPlus`).

### 4. 🗂️ Dynamic GitHub Card Showcase (`GitHub`)
* Renders portfolio projects dynamically from `/src/assets/github.json`.
* Features custom visual cards for each repository, including title, visual banners, project description, tags, repository links, and live deployment demo links.

### 5. 🎵 Spotify Player Integration (`Spotify`)
* Integrates a mini Spotify web-player iframe widget inside a window, allowing visitors to play background music or curated playlists while browsing the portfolio.

### 6. 📄 Resume PDF Viewer (`Resume`)
* Embeds a clean PDF reader to inspect Darshan's CV directly in-app, complete with a top action bar for downloading the file.

### 7. 📱 Premium OS Dock & Menu Bar
* **Menu Bar (Top)**: Real-time dynamic clock, status indicator icons (Wi-Fi), and clickable menu items (File, Window selector, and Terminal launchers).
* **Launch Dock (Bottom)**: Floating launcher dock matching macOS, featuring custom application icons that launch or restore applications. Hides intelligently on mobile when a window is open to optimize screen space.

---

## 🛠️ Technology Stack & Dependencies

| Category | Technologies | Description |
|---|---|---|
| **Core Architecture** | React 19, JavaScript (ES6+), HTML5 | Component-driven front-end logic and application routing |
| **Bundler & Dev Server**| Vite 7, HMR | High-performance developer server and builds |
| **Styles & Assets** | Sass / SCSS, CSS Variables | Preprocessor stylesheet organization, animations, and typography |
| **Window Actions** | `react-rnd` | Layout resizing and absolute drag coordinates |
| **Terminal Sandbox** | `react-console-emulator` | Custom terminal styling and command handler configuration |
| **Markdown & Syntax** | `react-markdown`, `react-syntax-highlighter` | Dynamic TS layout highlighter with Prism |

---

## 📁 Directory Structure

```text
Mac_Os/
├── public/                     # Static assets
│   ├── Doc-Icon/               # Icons for the application dock
│   ├── NavBar-Icon/            # SVG icons for top menu bar
│   ├── mac-wallpaper.jpg       # OS Desktop background image
│   ├── note.txt                # Raw TS profile content loaded by Notes app
│   └── resume.pdf              # PDF CV download/iframe asset
├── src/
│   ├── assets/
│   │   └── github.json         # Array of repository details and tags
│   ├── Components/
│   │   ├── windows/            # Individual window applications
│   │   │   ├── Console.jsx     # Terminal emulator widget
│   │   │   ├── GitHub.jsx      # Projects list card grid
│   │   │   ├── MacWindow.jsx   # Base container wrapping react-rnd
│   │   │   ├── Note.jsx        # Markdown rendering + Syntax highlighting
│   │   │   ├── Resume.jsx      # PDF reader iframe
│   │   │   └── Spotify.jsx     # Spotify iframe widget
│   │   ├── DateTime.jsx        # Dynamic Date/Time menu bar component
│   │   ├── Dock.jsx            # Desktop application dock launcher
│   │   └── NavBar.jsx          # Top-aligned system menu bar
│   ├── App.jsx                 # Central window state and layout organizer
│   ├── App.css / app.scss      # Main application styles
│   └── main.jsx                # React DOM entry point
├── package.json                # Dependencies and project scripts
├── vite.config.js              # Vite React configuration
└── README.md                   # Project documentation
```

---

## 🚀 Setup & Execution

To run **DarshanOS** locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the repository
```bash
git clone https://github.com/Darshanwalher/Mac_Os.git
cd Mac_Os
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
Runs the app in development mode with Hot Module Replacement (HMR).
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for production
Compiles the application to highly optimized static assets in the `/dist` directory.
```bash
npm run build
```

### 5. Lint the project
Checks source code formatting and warnings.
```bash
npm run lint
```

---

## 👤 Developer Profile Summary

* **Developer**: Darshan Madan Walher
* **Focus**: Data Analytics, React Development, and Cybersecurity
* **Location**: Pune, India
* **Education**: Bachelor of Technology (B.Tech) – Computer Engineering at JSPM's Jayawantrao Sawant College of Engineering
* **Key Skills**:
  * **Frontend**: React.js, JavaScript, HTML5, CSS3/Sass, Streamlit UI
  * **Backend**: Python, Flask, MongoDB, REST APIs
  * **Data/AI**: Pandas, NumPy, Matplotlib, Scikit-learn, XGBoost, Explainable AI (SHAP)
  * **Cybersecurity**: OWASP Top 10, vulnerability scanning, Kali Linux, security auditing
