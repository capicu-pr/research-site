# Capicú Research Site

A standalone research-focused website for Capicú's R&D division, showcasing active projects, team members, publications, and collaboration opportunities in wearable AI and biomedical technology.

## Overview

This is a dedicated research site that operates independently from the main Capicú website, focusing specifically on research and development activities. It maintains the same styling and character as the main site while providing detailed information about:

- **Active Research Projects**: Current initiatives in wearable AI, embedded sensors, and biomedical instrumentation
- **Research Team**: Core R&D team members and Scientific Advisory Committee
- **Recent Publications**: Academic contributions and research papers
- **Collaboration Opportunities**: Partnership types and contact forms for potential collaborators

## Features

### 🧠 Research Focus Areas
- **Wearable Technologies**: Developing next-generation wearable devices with embedded AI capabilities
- **Embedded Sensors**: Creating intelligent sensor systems for local data processing
- **Biomedical Instrumentation**: Advancing medical device technology through AI integration
- **AI Integration**: Novel approaches to integrate AI into small, resource-constrained devices

### 👥 Team Showcase
- **R&D Team**: Core research personnel with expertise in AI, biomedical engineering, and embedded systems
- **Scientific Advisory Committee**: Distinguished researchers guiding research direction
- **Research Partners**: Academic and institutional collaborators

### 📚 Publications & Projects
- Recent academic publications in top-tier journals
- Active research projects with detailed descriptions
- Research collaboration opportunities

### 🤝 Collaboration Platform
- Detailed partnership types (Academic Institutions, Research Laboratories, Industry Partners)
- Comprehensive contact forms for collaboration inquiries
- Clear response time expectations and contact information

## Site Structure

```
/                           # Main research overview page
/team                       # Research team and advisory committee
/collaborate                # Collaboration opportunities and contact
```

## Design & Styling

The research site maintains the same visual identity as the main Capicú site:

- **Color Scheme**: Navy (#0b2342), Red (#e63946), Beige (#F9F5EA)
- **Typography**: Inter font family with consistent sizing
- **Components**: Card-based layouts with hover effects and smooth transitions
- **Responsive**: Mobile-first design with breakpoints at 900px, 600px, and 400px

### Key Design Elements

- **Research Navbar**: Dedicated navigation with "Research" branding
- **Animated Icons**: Floating icons in hero sections
- **Interactive Cards**: Hover effects and flip animations for team members
- **Form Integration**: Formspree integration for collaboration inquiries

## Technology Stack

- **Frontend**: React 19 with Vite
- **Routing**: React Router DOM
- **Styling**: CSS with CSS custom properties
- **Icons**: React Icons (FontAwesome)
- **Forms**: Formspree for contact form handling
- **Deployment**: GitHub Pages

## Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## Content Management

### Research Projects
Update the `activeProjects` array in `src/pages/Research.jsx` to add or modify research projects.

### Team Members
Update the `rndTeam` and `advisoryCommittee` arrays in `src/pages/ResearchTeam.jsx` to manage team information.

### Publications
Update the `recentPublications` array in `src/pages/Research.jsx` to add new publications.

### Collaboration Areas
Modify the `collaborationAreas` and `partnershipTypes` arrays in `src/pages/ResearchCollaborate.jsx` to update collaboration focus areas.

## Customization

### Colors
Update CSS custom properties in `src/index.css`:
```css
:root {
  --beige: #F9F5EA;
  --navy: #0b2342;
  --red: #e63946;
}
```

### Styling
All research-specific styles are in:
- `src/styles/Research.css`
- `src/styles/ResearchTeam.css`
- `src/styles/ResearchCollaborate.css`
- `src/styles/ResearchNavbar.css`

## Deployment

The site is configured for deployment to GitHub Pages with the following settings:

- **Homepage**: `https://capicupuertorico.com`
- **Build Directory**: `dist/`
- **Deploy Script**: `gh-pages -d dist`

## Research Subdomain

The site is designed to work with the research subdomain `research.capicupuertorico.com`. A simple redirect page (`research-index.html`) is included for the subdomain setup. All links to the main site use direct hrefs to `https://capicupuertorico.com`.

## Contact

For research collaboration inquiries:
- **Email**: research@capicupuertorico.com
- **Website**: research.capicupuertorico.com
- **Response Time**: 2-3 business days

## License

This project is part of Capicú's research division. All rights reserved.