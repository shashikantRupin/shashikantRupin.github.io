# 👨‍💻 Shashikant Rupin — Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=githubpages)](https://shashikantrupin.github.io/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

A modern, responsive, and performance-optimized personal portfolio built with **React** and powered by **Vite**.

🌐 **Live Website:** [https://shashikantrupin.github.io](https://shashikantrupin.github.io/)

---

## 🚀 Features

- ⚡ **Blazing Fast**: Powered by **Vite** with instant Hot Module Replacement (HMR) and optimized rollup production bundles.
- 🎨 **Modern Aesthetics**: Sleek dark theme with glassmorphism, custom typography, and dynamic animations.
- 📱 **Fully Responsive**: Seamless layout across mobile, tablet, laptop, and desktop screens.
- 💼 **Featured Projects**: Showcase of full-stack MERN & web apps with live preview links, source code, and tech stack tags.
- 📊 **GitHub Activity**: Real-time GitHub contribution calendar and live stats widgets.
- 📜 **Resume Integration**: Direct resume viewing and download options.
- 📬 **Interactive Contact**: Direct email and social connect links.

---

## 🛠️ Tech Stack

- **Framework / Library**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom Design System & Glassmorphism)
- **Icons**: [FontAwesome](https://fontawesome.com/), [React Icons](https://react-icons.github.io/react-icons/), [Unicons](https://iconscout.com/unicons)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/), [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect)
- **Stats**: [React GitHub Calendar](https://github.com/grubersjoe/react-github-calendar)
- **Deployment**: [GitHub Pages](https://pages.github.com/) (`gh-pages`)

---

## 📁 Project Structure

```text
├── build/                 # Production build output
├── public/                # Static assets (favicons, manifest, etc.)
├── src/
│   ├── components/        # React UI components
│   │   ├── About.jsx      # About Me section
│   │   ├── Contact.jsx    # Contact section & form
│   │   ├── Footer.jsx     # Footer & social links
│   │   ├── Github.jsx     # GitHub calendar & stats
│   │   ├── Intro.jsx      # Hero section with typewriter effect
│   │   ├── Navbar.jsx     # Sticky navigation bar
│   │   ├── Project.jsx    # Featured project cards
│   │   └── Skills.jsx     # Tech stack & tools grid
│   ├── data/
│   │   └── projects.js    # Projects data & metadata
│   ├── images/            # Pictures and project screenshots
│   ├── resume/            # PDF resume asset
│   ├── App.css            # Global portfolio styles
│   ├── App.jsx            # Main React App component
│   ├── index.css          # Base CSS reset & fonts
│   └── index.jsx          # React entrypoint
├── index.html             # Vite HTML root template
├── package.json           # Dependencies & NPM scripts
├── vite.config.js         # Vite configuration
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shashikantRupin/shashikantRupin.github.io.git
cd shashikantRupin.github.io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
# or
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` / `npm start` | Starts the local Vite development server with instant HMR |
| `npm run build` | Compiles and optimizes the production bundle into the `build/` directory |
| `npm run preview` | Locally previews the production build |
| `npm run deploy` | Runs `npm run build` and deploys the `build/` folder to GitHub Pages |

---

## 🚀 Deployment

To deploy updates to GitHub Pages:
```bash
npm run deploy
```

---

## 📬 Contact & Socials

- **Developer**: Shashikant Rupin
- **GitHub**: [@shashikantRupin](https://github.com/shashikantRupin)
- **LinkedIn**: [Rupin Raj](https://www.linkedin.com/in/rupin-raj-d98/)
- **Email**: [shashikantrupin123@gmail.com](mailto:shashikantrupin123@gmail.com)
