# Rithika Senthilkumar — Portfolio Website

A modern personal portfolio built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**. This project showcases portfolio sections for education, skills, projects, internships, certifications, and contact details with an animated landing experience and responsive layout.

## 🚀 Project Overview

- **Single-page portfolio** with smooth navigation and animated hero section
- **Responsive UI** optimized for desktop and mobile
- **Custom sections** for Education, Skills, Projects, Internships, Certifications, and Contact
- **Interactive components** built with Radix/`@shadcn/ui`-style primitives
- **Theme-ready** design using Tailwind utility classes and custom animations

## 🧩 Key Features

- Animated hero text loop and decorative background effects
- Project showcase section with clean cards and links
- Contact section with email and social media integration
- Client-side routing using `react-router-dom`
- Real-time toast notifications via `sonner`
- Form validation support with `react-hook-form` and `zod` (available for future contact form enhancements)

## 📁 Project Structure

- `src/pages/Index.tsx` — main portfolio page
- `src/components/portfolio/` — portfolio sections and page components
- `src/components/ui/` — reusable UI primitives and design system components
- `src/main.tsx` — application bootstrap
- `src/App.tsx` — app router, providers, and global wrappers

## 🛠️ Tech Stack

- `vite`
- `react`
- `typescript`
- `tailwindcss`
- `react-router-dom`
- `@tanstack/react-query`
- `lucide-react`
- `sonner`
- `zod`
- `vitest`

## 🌐 Live Demo

Deployed site: [\[https://rithika-portfolio-gold.vercel.app/](https://rithika-portfolio-gold.vercel.app/)

## ✅ Setup & Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal to preview the site.

## 🧪 Build & Test

- Build for production:
  ```bash
  npm run build
  ```

- Preview the production build locally:
  ```bash
  npm run preview
  ```

- Run tests:
  ```bash
  npm run test
  ```

- Run tests in watch mode:
  ```bash
  npm run test:watch
  ```

## 🔧 Notes

- The portfolio currently uses a static landing page structure.
- `resume.pdf` is expected to be served from the `public` directory.
- Metadata is set dynamically in `src/pages/Index.tsx` for page title and description.



## 📬 Contact

For updates and enhancements, open an issue or use the contact section in the portfolio.
 

