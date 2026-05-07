## Portfolio Website Plan

A sleek, dark-themed single-page portfolio with smooth-scroll navigation, vibrant accent gradients, and subtle motion. All content uses realistic placeholders you can later swap.

### Design system
- Deep navy/near-black background with a vibrant accent (electric violet → cyan gradient)
- Elegant typography: large display headings, comfortable body text
- Glassmorphism cards with subtle borders, soft glow on hover
- Smooth fade/slide-in animations on scroll
- Fully responsive (mobile hamburger menu, stacked sections)

### Sections (in order)

1. **Sticky Navbar** — Logo/name on left, smooth-scroll links (Home, Education, Skills, Projects, Internships, Certifications, Contact), mobile hamburger.

2. **Home / Hero** — Big greeting ("Hi, I'm [Your Name]"), animated role tagline (e.g., typing effect: Developer / Designer / Student), short bio, primary CTA (View Projects) + secondary (Contact Me), social icons, decorative gradient blob/avatar.

3. **Education** — Vertical timeline with 2–3 entries (degree, institution, year, GPA/highlights).

4. **Skills** — Grouped categories (Languages, Frameworks, Tools) shown as icon + label chips/cards with hover effect.

5. **Projects** — Grid of 3–6 project cards: thumbnail, title, description, tech stack badges, GitHub/Live links.

6. **Internships** — Timeline/cards with company, role, duration, key responsibilities/achievements (bullets).

7. **Certifications** — Card grid: cert name, issuer, date, "View credential" link.

8. **Contact** — Heading + invitation copy, prominent email button (mailto), social link cards (LinkedIn, GitHub, Twitter/X), location.

9. **Footer** — Copyright, quick links, "Built with ❤".

### Technical notes
- React + Vite + Tailwind, design tokens in `index.css` (HSL) and `tailwind.config.ts`
- All sections live in `src/pages/Index.tsx` composed of section components in `src/components/sections/`
- Smooth scroll via `scroll-behavior: smooth` + anchor IDs
- Icons from `lucide-react`; subtle scroll reveal via Intersection Observer hook
- No backend; contact section is informational with mailto + social links

After approval, you'll be able to replace placeholder name, projects, and links directly in the section files.