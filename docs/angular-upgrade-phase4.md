# Angular Upgrade — Phase 4: Angular 22 Implementation and Integration Plan

## 1. Objective

Upgrade the existing Angular 10 portfolio to Angular 22 while preserving the original GitHub repository, project history, and live GitHub Pages deployment.

The implementation strategy has changed from a sequential, in-place Angular upgrade to a fresh Angular 22 application scaffold with deliberate recreation of the existing portfolio functionality.

This approach was selected to avoid carrying forward legacy application configuration and dependencies while allowing the original application to remain available as a reference and fallback.

Phase 4 documents:
- The revised migration strategy and its rationale.
- The new Angular 22 application structure and dependencies.
- Recreated pages and application functionality.
- Runtime and dependency considerations.
- Verification and quality assurance requirements.
- Git integration and deployment planning.

## 2. Git Baseline and Repository Protection

### Existing repository

- Repository: `https://github.com/chimepalden/profile.git`
- Local repository: `~/workspace/github/profile`
- Active branch: `feature/angular-upgrade`
- Remote tracking branch: `origin/feature/angular-upgrade`
- Phase 3 audit commit: `ac1d49c`
- Phase 3 baseline commit: `be3499a`

Existing branches include:
- `master`: production GitHub Pages portfolio.
- `develop`: existing development branch.
- `v1.0.0`: previous version.
- `v2.0.0`: existing portfolio release.
- `feature/angular-upgrade`: upgrade planning and audit work.

The local repository is connected to the existing GitHub repository through the `origin` remote.

### New Angular 22 application

- Local directory: `~/workspace/github/profile-angular22`
- Created as a sibling application to the original `profile` directory.
- Initially scaffolded using Angular CLI 22 with `--skip-git`.
- Does not currently have an independent Git repository.
- Application implementation and validation are performed independently of the original Angular 10 repository.

### Repository protection requirements

- Preserve the original `profile` repository and its Git history.
- Keep the existing production `master` branch unchanged until release approval.
- Preserve `Profile_info.txt`; it is intentionally untracked.
- Preserve the Phase 4 planning document and other existing upgrade documentation.
- Do not initialize an unrelated GitHub repository for the new application unless a separate repository is explicitly chosen.
- Integrate the validated Angular 22 implementation into the existing repository through a deliberate Git workflow.
- Avoid overwriting existing branches or committing generated files unintentionally.

## 3. Revised Migration Strategy

### Previous approach

The original plan was to upgrade the Angular 10 application one major version at a time:

Angular 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20 → 21 → 22.

This would require repeated framework, CLI, TypeScript, Node.js, and dependency compatibility checks.

### Adopted approach: Fresh Angular 22 scaffold

Instead of performing the sequential in-place upgrade, a new Angular 22 application was created.

The new application recreates the existing portfolio functionality using the current Angular framework and compatible dependencies.

Reasons for choosing this approach:

- The portfolio is relatively small.
- The original application can remain intact as a reference.
- A fresh scaffold avoids unnecessary legacy configuration.
- Standalone components provide a modern application structure.
- Dependencies can be selected deliberately rather than migrated indiscriminately.
- The new application can be validated independently before Git integration and deployment.

This is a functional reimplementation of the existing portfolio, not a conventional in-place framework upgrade.

### Implementation principles

1. Preserve the original application's content, navigation, and user-facing functionality.
2. Use Angular 22 and its supported CLI/build tooling.
3. Prefer standalone components and standalone routing.
4. Use lazy-loaded routes for appropriate page components.
5. Adopt compatible dependencies and avoid unnecessary packages.
6. Preserve responsive layouts and existing portfolio styling where practical.
7. Verify changes through production builds and browser testing.
8. Keep the original Angular 10 application available until the new version is released successfully.

## 4. Runtime and Core Dependencies

### Original Angular 10 environment

Phase 3 recorded the following original environment:

- Angular framework: 10.0.14
- Angular CLI: 10.0.8
- Angular build tooling: 0.1000.8
- TypeScript: 3.9.7
- RxJS: 6.5.5
- Zone.js: 0.10.3
- Webpack: 4.43.0
- Bootstrap: 4.5.2
- Node.js: 20.11.1
- npm: 10.2.4

The original application required `NODE_OPTIONS=--openssl-legacy-provider` for its build under the tested Node.js 20 environment.

### Angular 22 environment

The new application was scaffolded with Angular CLI 22.2.4.

Verified framework and build packages:

- Angular core: 22.2.3
- Angular Google Maps: 22.2.5
- Angular build tooling: 22.2.4
- Bootstrap: 5.3.8
- Font Awesome Free: 7.3.1

The development environment has also used:

- Node.js: 24.22.0
- npm: 11.19.1

The exact installed dependency versions and lockfile remain the source of truth for the new application's configuration.

### Compatibility requirements

- Use Angular's official compatibility table for the selected Angular version.
- Keep framework, CLI, compiler, and build-tool versions compatible.
- Verify Node.js and TypeScript requirements before changing the runtime or dependencies.
- Check RxJS and Zone.js compatibility.
- Commit the lockfile as part of intentional dependency changes.
- Avoid unrelated dependency updates during migration and integration.

Official references:

- Version compatibility: https://angular.dev/reference/versions
- Angular Update Guide: https://angular.dev/update-guide
- Angular releases: https://angular.dev/reference/releases
- Angular CLI update command: https://angular.dev/cli/update

## 5. Application Implementation and Dependency Decisions

### 5.1 Angular application architecture

The new application uses:

- Standalone Angular components.
- Angular standalone routing.
- Lazy-loaded page components.
- TypeScript.
- Bootstrap 5.
- Font Awesome Free.
- Angular's current application build tooling.

The original NgModule-based implementation is not being carried forward wholesale.

### 5.2 Portfolio pages

The following pages have been recreated:

- Home
- Resume
- Education and nested resume routes
- Projects
- About
- Contact

The application also includes:

- Responsive navigation.
- Resume dropdown navigation.
- Footer.
- Existing portfolio images and assets.
- Responsive project cards.
- Font Awesome icons.

The application has been started successfully using `npm start`, and the recreated pages have been manually checked in the browser.

### 5.3 Bootstrap and Font Awesome

The original application used Bootstrap 4.5.2.

The new implementation uses Bootstrap 5.3.8.

Changes include:
- Updated Bootstrap markup and responsive layout classes.
- Updated dropdown and navigation behavior.
- Bootstrap 5 JavaScript ESM import.
- Removal of the previous Bootstrap 4 dependency approach.

Font Awesome Free 7.3.1 is used for portfolio icons.

The full Bootstrap and Font Awesome CSS files account for most of the optimized stylesheet size. These dependencies are retained because they are actively used.

### 5.4 Google Maps migration

Original implementation:
- `@agm/core`
- `<agm-map>`
- `<agm-marker>`

New implementation:
- `@angular/google-maps`
- `<google-map>`
- `<map-advanced-marker>`

The new implementation preserves the existing map centre:

- Latitude: 43.656163
- Longitude: -79.462725

The map renders successfully in the local application.

Additional requirements before deployment:

- Use a suitable Google Maps Map ID for production advanced markers.
- Restrict the browser API key by HTTP referrer.
- Restrict API access to the required Google Maps APIs.
- Monitor API usage.
- Do not commit unrestricted keys or local key configuration.
- Verify the deployed map on GitHub Pages.

A browser-exposed Maps API key is not a true secret. API and referrer restrictions are necessary to reduce unauthorized usage.

### 5.5 Legacy dependencies

The following dependencies and tools were identified in the original Angular 10 application and should not be carried forward automatically:

- `@agm/core`
- `@types/googlemaps`
- TSLint
- Codelyzer
- Protractor
- Legacy Karma/Jasmine and Webpack tooling
- Bootstrap 4
- jQuery

Review actual usage and compatibility before retaining or replacing any dependency.

Do not remove dependencies solely because they are old. Each decision should be based on functionality, compatibility, and maintenance requirements.

## 6. Existing Baseline Risks and Outstanding Issues

The original Angular 10 Phase 3 audit recorded:

- Manual runtime and route verification remained outstanding.
- Existing unit tests had failures involving an obsolete root-template assertion, unknown navigation/footer elements, and a Karma/webpack-dev-middleware error.
- Legacy Protractor test execution was unverified.
- The original dependency audit reported 187 vulnerabilities; applicability and remediation had not yet been assessed.
- The original Angular 10 application had legacy dependency and runtime compatibility concerns.

These are historical findings from the original application.

They should not automatically be classified as defects in the new Angular 22 implementation.

The new application's dependencies, build, and test results must be assessed independently.

## 7. Angular 22 Verification Checkpoints

### 7.1 Completed initial verification

- [x] Fresh Angular 22 application scaffolded.
- [x] Bootstrap 5 integrated.
- [x] Font Awesome integrated.
- [x] Existing portfolio images copied into the new application.
- [x] Home page recreated.
- [x] Resume and nested education routes recreated.
- [x] Projects page recreated with responsive layout.
- [x] About page recreated.
- [x] Contact page recreated.
- [x] Google Maps integration implemented using Angular Google Maps.
- [x] Responsive navigation and dropdown behavior checked.
- [x] Footer and copyright year updated to 2026.
- [x] Development application started successfully.
- [x] Production build completed successfully.

### 7.2 Production build result

Latest verified build:

- Initial raw bundle: 629.22 kB.
- Estimated initial transfer size: 124.68 kB.
- Initial bundle warning threshold: 500 kB.
- Initial bundle error threshold: 1 MB.
- Production build completed successfully.
- Lazy-loaded chunks generated for the portfolio pages.

The 500 kB warning is intentionally retained as a bundle-size guardrail.

The warning is not a build failure. The current dependency footprint is accepted provisionally and can be revisited if meaningful optimization opportunities are identified.

### 7.3 Remaining quality assurance

Before integration and deployment:

- [ ] Review Angular 22 code against current Angular conventions.
- [ ] Review TypeScript strictness and compiler configuration.
- [ ] Assess component and routing tests.
- [ ] Verify keyboard navigation and accessibility.
- [ ] Check image alternative text and form labels.
- [ ] Review color contrast and responsive behavior.
- [ ] Run `npm audit` and assess vulnerabilities.
- [ ] Review production dependencies.
- [ ] Check browser-console errors and failed network requests.
- [ ] Verify Google Maps API key restrictions.
- [ ] Verify all routes and functionality in a production build.
- [ ] Check production asset paths and GitHub Pages base path.

Do not treat a successful production build as a substitute for functional, accessibility, and security testing.

## 8. Git Integration and Deployment Strategy

### 8.1 Git integration

The Angular 22 application currently exists separately from the original Git repository.

The intended integration strategy is:

1. Preserve the original `profile` repository and its existing history.
2. Keep the Phase 4 documentation and audit work on `feature/angular-upgrade`.
3. Complete quality assurance in `profile-angular22`.
4. Determine the appropriate integration point in the existing repository.
5. Integrate the Angular 22 application deliberately, reviewing configuration, source files, assets, dependencies, and lockfile.
6. Test the integrated application before merging or promoting it.
7. Preserve the original Angular 10 release history.

Do not initialize a separate GitHub repository or overwrite the existing repository as part of the integration unless that decision is explicitly revised.

### 8.2 Release strategy

The intended release flow is:

`feature/angular-upgrade` → integration and validation → `master` → GitHub Pages.

The exact branch merge sequence must be confirmed before integration.

The existing `master`, `develop`, and `v2.0.0` branches must remain protected until the new version is approved.

The Angular 22 application should be treated as the next portfolio release rather than silently replacing the previous release.

### 8.3 GitHub Pages deployment

Before deployment:

- Configure the correct `/profile/` base path.
- Verify the production output directory.
- Confirm asset URLs resolve correctly.
- Confirm direct navigation and refresh behavior on nested routes.
- Configure the Google Maps key through a controlled build/deployment configuration.
- Avoid committing API keys.
- Use a repeatable GitHub Actions workflow where practical.
- Deploy only after production and functional verification.
- Verify the live GitHub Pages application after release.

Official deployment reference:

https://angular.dev/tools/cli/deployment

## 9. Phase 4 Completion Criteria

- [x] Revised migration strategy selected.
- [x] Fresh Angular 22 application scaffolded.
- [x] Main portfolio pages recreated.
- [x] Core dependencies integrated.
- [x] Initial browser verification completed.
- [x] Production build completed.
- [ ] Angular 22 code-quality review completed.
- [ ] Unit and accessibility testing assessed.
- [ ] Dependency and security review completed.
- [ ] Google Maps production configuration verified.
- [ ] Git integration strategy finalized.
- [ ] Integration and deployment checks completed.

## 10. Status and Decision Record

**Status: Angular 22 implementation substantially completed; quality assurance and integration remain in progress.**

### Key architectural decision

The project changed from a sequential in-place Angular upgrade to a fresh Angular 22 scaffold and functional reimplementation.

This decision was made to:
- Reduce legacy configuration and dependency carryover.
- Keep the original Angular 10 application intact.
- Simplify adoption of standalone Angular architecture.
- Validate the new implementation independently.
- Preserve the existing GitHub repository and production deployment.

The change in migration strategy does not change the final objective: upgrade the existing portfolio and publish the validated Angular 22 application through the existing GitHub Pages repository.

No production release is authorized solely by this document. Complete the outstanding verification, integration, and deployment steps before replacing the live portfolio.

---

**Document status:** Updated to reflect the adopted Angular 22 implementation approach.

**Last updated:** October 30, 2026.
