# Chime Palden — Portfolio

Personal portfolio website showcasing my background, software development experience, projects, and technical skills.

**Published portfolio:** https://chimepalden.github.io/profile

> Angular 22 migration completed and deployed to GitHub Pages. The production portfolio is live.

## Technology Stack

- **Framework:** Angular 22
- **Language:** TypeScript
- **UI:** HTML5, CSS3, Bootstrap 5
- **Icons:** Font Awesome
- **Routing:** Angular standalone components and lazy-loaded routes
- **Maps:** Angular Google Maps
- **Testing:** Vitest
- **Build tools:** Angular CLI and Angular build system
- **Version control:** Git and GitHub

## Application Features

- Home page
- Resume and education pages
- Projects portfolio
- About page
- Contact page with Google Maps integration
- Responsive navigation and page layouts
- Lazy-loaded page components

## Accessibility & Inclusive Design

Accessibility and inclusive design were considered throughout the portfolio's UI improvements, with a focus on usability across different devices and interaction methods.

- **Semantic HTML:** Improved heading hierarchy and document structure for clearer content organization.
- **Keyboard accessibility:** Verified keyboard navigation, logical focus order, visible focus indicators, and keyboard operation of interactive elements.
- **Screen reader support:** Applied appropriate ARIA attributes and accessible names to help assistive technologies interpret interface elements.
- **Color contrast:** Reviewed text and interface contrast to improve readability.
- **Responsive accessibility:** Tested layouts across screen sizes, including text resizing, reflow, and orientation.
- **WCAG 2.2 AA:** Reviewed applicable success criteria, including relevant criteria introduced in WCAG 2.2.

These improvements support a more accessible, responsive, and inclusive user experience.

## Application Routes

| Route | Page |
|---|---|
| `/home` | Home |
| `/resume` | Resume |
| `/resume/academicprojects` | Academic Projects / Education |
| `/resume/courses` | Courses |
| `/projects` | Projects |
| `/about` | About |
| `/contact` | Contact |

The root route redirects to `/home`, and unknown routes also redirect to `/home`.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/chimepalden/profile.git
cd profile
npm ci
```

### Development Server

Start the local development server:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application reloads automatically when source files change.

### Unit Tests

Run the unit tests:

```bash
npm test
```

The project uses Vitest through the Angular build system.

### Production Build

Build the application for production:

```bash
npm run build
```

The generated production files are placed in the Angular CLI output directory under `dist/`.

## GitHub Pages Deployment

The portfolio is deployed to GitHub Pages from the `master` branch using the GitHub Actions deployment workflow:
- **Deployment source**: `master` branch (docs/ directory)
- **Production base path**: `/profile/`
- **Routing**: Custom `404.html` fallback supports direct navigation and page refreshes on Angular routes.
- **Build output**: Production deployment artifacts are generated in `docs/`.

For details about the hosting configuration, Angular SPA routing and GitHub Pages fallback implementation, see [GitHub Pages Deployment Documentation](docs/github-pages-deployment.md).

## Upgrade Documentation

The Angular migration is documented in the repository:

- [Angular Upgrade Baseline](docs/angular-upgrade-baseline.md)
- [Angular Upgrade Phase 2](docs/angular-upgrade-phase2.md)
- [Angular Upgrade Phase 3](docs/angular-upgrade-phase3.md)
- [Angular Upgrade Phase 4](docs/angular-upgrade-phase4.md)
- [GitHub Pages Deployment](docs/github-pages-deployment.md)

These documents preserve the migration history, architectural decisions, implementation details, verification results and production deployment record.

## License

This project is maintained as a personal portfolio.
