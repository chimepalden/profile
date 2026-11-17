# GitHub Pages Deployment — Angular 22 SPA Nested-Route Handling

## 1. Overview

The portfolio is built with Angular 22 and deployed to GitHub Pages as a Single-Page Application (SPA).

Angular Router manages application navigation through client-side routes. However, GitHub Pages is a static hosting platform and does not natively rewrite requests for nested Angular routes to the application's `index.html`.

As a result, directly accessing or refreshing a nested route can return an HTTP 404 response.

To support nested-route navigation on GitHub Pages, the deployment includes a custom `404.html` fallback containing the Angular application shell. This allows Angular Router to resolve the requested route after the application loads.

**Production website:** https://chimepalden.github.io/profile/

## 2. GitHub Pages Deployment Architecture

The production deployment uses the following configuration:

| Configuration | Value |
|---|---|
| Repository | `chimepalden/profile` |
| Production branch | `master` |
| GitHub Pages source | `master` branch |
| Deployment directory | `docs/` |
| Framework | Angular 22 |
| Routing | Angular Router |
| Base path | `/profile/` |
| Deployment method | GitHub Actions |

The Angular application is built for the repository's GitHub Pages path rather than the domain root.

The production build uses:

```bash
npx ng build --configuration production --output-path dist/github-pages
```

The Angular production build is generated in `dist/github-pages`. The deployment workflow prepares the production artifacts in `docs/`, which is the configured GitHub Pages publishing directory.

## 3. Angular Nested Routes

Angular Router manages navigation within the portfolio.

The application uses standalone components and lazy-loaded routes.

Examples of application routes include:

| Route | Component/Page |
|---|---|
| `/home` | Home |
| `/resume` | Resume |
| `/projects` | Projects |
| `/about` | About |
| `/contact` | Contact |

When a visitor navigates between these routes through the application, Angular Router handles the navigation in the browser without requesting a separate HTML document for every page.

However, directly accessing a nested route or refreshing the browser introduces a hosting consideration.

## 4. Supporting Nested Routes on GitHub Pages

### 4.1 Why the 404 fallback is required

GitHub Pages is a static hosting platform. When receiving a request, it attempts to locate a matching static resource, such as a file or directory.

For example, when a visitor directly accesses: https://chimepalden.github.io/profile/home

GitHub Pages attempts to locate a corresponding resource for `/profile/home`.

Since `/home` is an Angular client-side route rather than a physical file or directory, GitHub Pages cannot resolve it as a static resource and returns an HTTP 404 response.

### 4.2 Custom 404.html implementation

To support Angular nested routes, a custom `404.html` fallback is included in the GitHub Pages deployment directory.

The fallback contains the Angular application shell, including:

- The Angular root element (`<app-root>`).
- The production JavaScript bundles.
- The application stylesheets.
- The base URL configuration (`/profile/`).

The deployed `docs/index.html` and `docs/404.html` contain equivalent application shell markup.

When GitHub Pages cannot locate a requested nested route, it serves the custom `404.html` fallback. The browser loads the Angular application, and Angular Router resolves the requested route using the current browser URL.

### 4.3 Request and rendering sequence

For a direct request to `/profile/home`, the sequence is:

1. The browser requests `/profile/home`.
2. GitHub Pages looks for a matching static resource.
3. No matching physical resource is found.
4. GitHub Pages returns an HTTP 404 response and serves the custom `404.html` fallback.
5. The browser parses the fallback HTML and loads the Angular application bundles.
6. Angular bootstraps the application.
7. Angular Router identifies `/home` and loads the Home component.
8. The requested page renders successfully.

The browser retains the requested URL: https://chimepalden.github.io/profile/home

The fallback does not redirect the visitor to the root page.

## 5. Understanding the HTTP 404 Response

The successful rendering of an Angular route does not change the original HTTP response status.

Two separate processes are involved:

- **HTTP and hosting layer:** GitHub Pages returns a 404 because the requested nested route does not correspond to a physical static resource.
- **Angular application layer:** Angular successfully bootstraps and resolves the requested client-side route.

Consequently, the page can render correctly even though the browser's Network panel or console reports an HTTP 404 response.

This is an expected limitation of the GitHub Pages SPA fallback approach. The fallback allows the application to function, but it does not convert the original HTTP response into a successful 200 response.

## 6. Alternative Approaches

Other approaches can support Angular client-side routing on static hosting platforms:

- **Hash-based routing:** Uses URL fragments (e.g., `/profile/#/home`) so the hosting server does not receive nested Angular routes.
- **SPA rewrite support:** Hosting platforms such as Netlify and Cloudflare Pages can rewrite unknown routes to `index.html`, allowing Angular Router to handle navigation with successful HTTP responses.

### Selected Approach

The custom `404.html` fallback is retained because it supports clean Angular URLs on the existing GitHub Pages deployment without requiring changes to the application's routing configuration.

## 7. Deployment Verification

The following checks help verify the GitHub Pages deployment and Angular routing behaviour.

| Verification | Expected result |
|---|---|
| Open the portfolio root URL | Home page loads |
| Navigate using the application navbar | Angular routes render correctly |
| Directly access `/profile/home` | Home page renders |
| Refresh a nested route | Requested page renders |
| Directly access `/profile/about` | About page renders |
| Directly access `/profile/contact` | Contact page renders |
| Check application assets | JavaScript and CSS bundles load |
| Check browser console | No unexpected application errors |

An HTTP 404 response for a nested route can still occur with the custom fallback approach. Verify that the Angular application successfully renders the requested route rather than treating the HTTP status alone as evidence of a routing failure.

## 8. Related Documentation

The Angular migration and implementation history is documented separately:

- [Angular Upgrade Baseline](angular-upgrade-baseline.md)
- [Angular Upgrade Phase 2](angular-upgrade-phase2.md)
- [Angular Upgrade Phase 3](angular-upgrade-phase3.md)
- [Angular Upgrade Phase 4](angular-upgrade-phase4.md)

These documents cover the Angular migration, architectural decisions, implementation changes, and production integration.

This document focuses on the GitHub Pages hosting configuration and the deployment considerations specific to Angular SPA nested-route handling.