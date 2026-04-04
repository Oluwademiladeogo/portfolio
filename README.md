# Demilade Bickersteth - Personal Portfolio

A professional, high-impact personal landing page for a technical founder, built with Next.js 14+, TypeScript, and TailwindCSS v4.

## Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, TailwindCSS v4
- **Stunning Animations**: Framer Motion, animated neural networks, and concentric circles
- **Fully Responsive**: Mobile-first design with optimized breakpoints
- **SEO Optimized**: Meta tags, Open Graph, structured data (JSON-LD)
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized animations (60fps), lazy loading, Lighthouse 90+ scores

## Project Structure

```
demilade-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with TailwindCSS v4
├── components/
│   ├── HeroSection.tsx          # Hero with animated background
│   ├── ConcentricCircles.tsx    # Animated circles component
│   ├── NeuralNetwork.tsx        # Neural network animation
│   ├── MissionSection.tsx       # Mission & Philosophy section
│   ├── LucidAISection.tsx       # Lucid AI featured section
│   ├── ProjectsSection.tsx      # Featured projects
│   ├── ExperienceSection.tsx    # Experience timeline
│   ├── SkillsSection.tsx        # Technical skills grid
│   ├── ValuesSection.tsx        # Values & Leadership
│   └── ContactSection.tsx       # Contact & CTA
├── lib/
│   └── schema.ts           # Structured data for SEO
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd demilade-portfolio
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion, Canvas API
- **Icons**: Lucide React
- **3D Graphics**: Three.js, React Three Fiber

## Sections

1. **Hero Section**: Animated background with concentric circles and neural network
2. **Mission & Philosophy**: Three-column grid with vision, approach, and impact
3. **Lucid AI**: Featured section for current venture
4. **Projects**: Four project cards with VoxPreference as featured
5. **Experience**: Timeline of roles and achievements
6. **Skills**: Visual grid of technical skills by category
7. **Values**: Leadership philosophy and values
8. **Contact**: Contact information with CTA

## Design System

### Colors
- **Primary Background**: `#0A1628` (Navy Deep), `#0D1B2A` (Navy Dark)
- **Accent**: `#00D9FF` (Cyan Bright), `#0EA5E9` (Cyan Blue)
- **Text**: Gray scale from `#E5E7EB` to `#9CA3AF`

### Typography
- **Font**: Inter (via Google Fonts)
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable with generous line-height

### Animations
- Subtle scroll-triggered fade-ins
- Hover effects with scale and glow
- Animated backgrounds with neural networks
- Smooth transitions (300ms duration)

## Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Reduced motion support for accessibility preferences
- High contrast text for readability
- Focus indicators for interactive elements

## Performance Optimizations

- Lazy loading of images and heavy animations
- Intersection Observer for scroll-triggered effects
- Canvas-based animations for 60fps performance
- Optimized bundle size with tree shaking
- Static generation where possible

## SEO

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (JSON-LD Person schema)
- Semantic HTML for better crawling
- Sitemap and robots.txt ready

## License

© 2024 Demilade Bickersteth. All rights reserved.

## Contact

- **Email**: bickerstethdemilade@gmail.com
- **Phone**: +234 915 773 4301
- **LinkedIn**: [linkedin.com/in/bickersteth](https://linkedin.com/in/bickersteth)
- **GitHub**: [github.com/Oluwademiladeogo](https://github.com/Oluwademiladeogo)
