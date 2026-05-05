# Rahma Tamer - Personal Portfolio

A modern, bilingual (Arabic/English) personal portfolio website built with **React**, **Tailwind CSS v4**, and **Vite**. Features a dark glassmorphic design, smooth animations, and full RTL support.

---

## 🚀 Tech Stack

- **React 19** + Vite (rolldown-vite)
- **Tailwind CSS v4**
- **Framer Motion** – animations
- **Lucide React** – icons
- **EmailJS** – contact form (optional)

---

## ✨ Features

- 🌙 Dark / Light theme toggle
- 🌐 English / Arabic language toggle (full RTL support)
- 📱 Fully responsive design
- 🤖 Built-in AI chatbot assistant
- 📊 Interactive skill radar chart
- 🎯 Project matcher wizard
- ⬇️ Resume / CV download button
- 🖼️ Personal profile photo support

---

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components (Button, Chatbot, SkillRadar, etc.)
├── context/        # Language & Theme context providers
├── layout/         # Navbar & Footer
├── sections/       # Page sections (Hero, About, Skills, Projects, etc.)
├── utils/          # Animation utilities
├── data.js         # All portfolio content (EN + AR)
└── index.css       # Global styles & design tokens

public/
├── profile-photo.jpg   # ← Replace with your photo
├── resume.pdf          # ← Replace with your CV
└── projects/           # Project preview images
```

---

## 🛠 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/RahmaTamer/portfolio_Rahma_Tamer.git
cd portfolio_Rahma_Tamer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

The app will run on: `http://localhost:5173/`

### 4. Build for production

```bash
npm run build
```

---

## 🖼️ Adding Your Assets

| File | Location | Purpose |
|------|----------|---------|
| Profile photo | `public/profile-photo.jpg` | Displayed in Hero & About sections |
| Resume / CV | `public/resume.pdf` | Downloaded via the Resume button |

> **Note:** Keep the exact filenames, or update the paths in `src/data.js` (lines 16 and `avatar` field).

---

## ✏️ Customizing Content

All portfolio content (name, skills, projects, experience, etc.) is in one file:

**`src/data.js`** — contains two exports:
- `portfolioDataEN` — English content
- `portfolioDataAR` — Arabic content

---

## 🌐 Deploying to Vercel

### Option A: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option B: Via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**
3. Import your GitHub repository
4. Set the following build settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy** ✅

> No environment variables are required for deployment.

---

## 📬 Contact

- **GitHub:** [RahmaTamer](https://github.com/RahmaTamer)
- **Email:** rahma.tamer67@gmail.com
- **LinkedIn:** [rahma-tamer](https://www.linkedin.com/in/rahma-tamer/)
