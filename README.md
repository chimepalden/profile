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

The portfolio is deployed to GitHub Pages:

Live website: https://chimepalden.github.io/profile/

The Angular 22 production release is deployed from the `master` branch.

The GitHub Actions deployment workflow successfully builds and deploys the application.

The Angular production build is configured for the repository base path:

```text
/profile/
```
GitHub Pages routing fallback is maintained to support direct navigation and refreshes on application routes.

The `docs/` directory contains the prepared GitHub Pages deployment artifacts.

## Upgrade Documentation

The Angular migration is documented in the repository:

- [Angular Upgrade Baseline](docs/angular-upgrade-baseline.md)
- [Angular Upgrade Phase 2](docs/angular-upgrade-phase2.md)
- [Angular Upgrade Phase 3](docs/angular-upgrade-phase3.md)
- [Angular Upgrade Phase 4](docs/angular-upgrade-phase4.md)

These documents preserve the migration history, architectural decisions, implementation details, verification results and production deployment record.

## License

This project is maintained as a personal portfolio.
