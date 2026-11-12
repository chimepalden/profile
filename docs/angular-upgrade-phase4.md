# Angular Upgrade — Phase 4: Angular 22 Implementation and Integration

**Document status:** Implementation and integration substantially completed; final production verification and release remain pending.

**Last updated:** November 10, 2026

## 1. Objective

Modernize the existing Angular 10 portfolio by recreating its functionality in Angular 22 while preserving the original GitHub repository, project history, and live GitHub Pages deployment until the replacement is released.

The implementation strategy changed from a sequential, in-place Angular upgrade to a fresh Angular 22 application scaffold with deliberate recreation of the existing portfolio functionality.

This approach avoids carrying forward unnecessary legacy application configuration and dependencies while preserving the original application as a reference and fallback.

Phase 4 documents:

- The revised migration strategy and its rationale.
- The new Angular 22 application structure and dependencies.
- Recreated pages and application functionality.
- Runtime and dependency considerations.
- Verification and quality assurance results.
- Git integration and deployment preparation.
- Remaining release requirements.

## 2. Git Baseline and Repository Protection

### Existing repository

- Repository: `https://github.com/chimepalden/profile.git`
- Local repository: `~/workspace/github/profile`
- Current working branch: `develop`
- Angular 22 integration branch: `integration/angular22`
- Production branch: `master`
- Original upgrade branch: `feature/angular-upgrade`
- Remote: `origin`
- Phase 3 audit commit: `ac1d49c`
- Phase 3 baseline commit: `be3499a`
- Angular 22 integration commit: `fc16f1f`
- Commit message: `Complete Angular 22 migration and integration`

The original repository and Git history have been retained.

The Angular 22 implementation was integrated into the original repository's working tree through an overlay approach rather than importing an unrelated Git history.

The current integration branch was created from the upgrade work. The original `master` branch remains the production GitHub Pages branch.

### New Angular 22 application

- Local directory: `~/workspace/github/profile-angular22`
- Created as a sibling application to the original `profile` directory.
- Scaffolded using Angular CLI 22 with `--skip-git`.
- Does not have an independent Git repository.
- Used as the source for the fresh Angular 22 implementation.

The validated application files were subsequently integrated into the original `profile` repository on `integration/angular22`.

### Repository protection requirements

- Preserve the original `profile` repository and its Git history.
- Keep the production `master` branch unchanged until release approval.
- Preserve `Profile_info.txt`; it is intentionally untracked.
- Preserve all Angular upgrade documentation.
- Avoid initializing an unrelated GitHub repository.
- Keep the original Angular 10 deployment recoverable.
- Avoid committing generated files or local dependency caches unintentionally.
- Do not merge, push, or release without reviewing the final integration changes.

## 3. Revised Migration Strategy

### Previous approach

The original plan was to upgrade Angular 10 one major version at a time:

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
- Dependencies can be selected deliberately.
- The new application can be validated independently before integration.

This is a functional reimplementation of the existing portfolio, not a conventional in-place framework upgrade.

### Integration approach

The original Git repository was retained.

The Angular 22 implementation was integrated into the original repository's working tree on `integration/angular22`.

This approach preserves the existing Git history and avoids unrelated repository histories.

### Implementation principles

1. Preserve the original application's content, navigation, and user-facing functionality.
2. Use Angular 22 and supported CLI/build tooling.
3. Prefer standalone components and standalone routing.
4. Use lazy-loaded routes for appropriate page components.
5. Adopt compatible dependencies and avoid unnecessary packages.
6. Preserve responsive layouts and portfolio styling where practical.
7. Verify changes through tests, production builds, and browser testing.
8. Keep the original Angular 10 deployment available until the new version is successfully released.

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

The new application was scaffolded using Angular CLI 22.2.4.

The subsequently installed and verified package versions include:

- Angular core: 22.2.5
- Angular CLI: 22.2.6
- Angular build tooling: 22.2.6
- Angular Google Maps: 22.2.6
- TypeScript: 6.0.3
- RxJS: 7.8.x
- Bootstrap: 5.3.8
- Font Awesome Free: 7.3.1
- Vitest: 5.x
- jsdom: 30.x

Development environment:

- Node.js: 24.22.0
- npm: 11.19.1

The exact installed dependency versions and lockfile remain the source of truth.

### Compatibility requirements

- Use Angular's official compatibility table for the selected Angular version.
- Keep framework, CLI, compiler, and build-tool versions compatible.
- Verify Node.js and TypeScript requirements.
- Check RxJS and Zone.js compatibility.
- Keep the lockfile synchronized with intentional dependency changes.
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
- Angular application bootstrap through `bootstrapApplication()`.

The original NgModule-based implementation is not being carried forward wholesale.

### 5.2 Portfolio pages and routes

The following pages have been recreated:

- Home
- Resume
- Education and nested resume routes
- Projects
- About
- Contact

Application routes include:

- `/home`
- `/resume`
- `/resume/academicprojects`
- `/resume/courses`
- `/projects`
- `/about`
- `/contact`

The root route redirects to `/home`, and unknown routes redirect to `/home`.

The academic projects and courses routes currently use the Education component.

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
- Bootstrap 5 JavaScript bundle integration.
- Removal of the previous Bootstrap 4 dependency approach.

Font Awesome Free 7.3.1 is used for portfolio icons.

The generated production stylesheet includes the Bootstrap and Font Awesome CSS and associated font assets.

The dependencies are retained because they are actively used by the application.

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

Additional requirements before release:

- Use a suitable Google Maps Map ID for production advanced markers.
- Restrict the browser API key by HTTP referrer.
- Restrict API access to the required Google Maps APIs.
- Monitor API usage.
- Do not commit unrestricted keys or local key configuration.
- Verify the deployed map on GitHub Pages.

The current application retains the literal `key=#` placeholder in `src/index.html` and the generated deployment index. This placeholder is intentionally preserved; production map functionality still requires appropriate API configuration.

A browser-exposed Maps API key is not a true secret. API and referrer restrictions are necessary to reduce unauthorized usage.

### 5.5 Legacy dependencies and configuration cleanup

The following dependencies and tools were identified in the original Angular 10 application and were not carried forward:

- `@agm/core`
- `@types/googlemaps`
- TSLint
- Codelyzer
- Protractor
- Legacy Karma/Jasmine testing configuration
- Legacy Webpack configuration
- Bootstrap 4
- jQuery

Confirmed obsolete root-level files and directories removed:

- `e2e/`
- `karma.conf.js`
- `tslint.json`
- `tsconfig.base.json`

The new application uses Vitest for unit testing.

The new TypeScript configurations are:

- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.spec.json`

The `.gitignore` was updated to exclude the Angular `.angular/` cache directory.

The local `.angular/` cache and `node_modules/` directory are retained as local development resources and are not intended as deployment artifacts.

The inherited Angular 10 `.browserslistrc` was replaced with a configuration generated by Angular CLI 22 using `npx ng generate config browserslist`. The generated configuration uses the *Baseline Widely Available* policy dated May 7, 2026. The configuration was validated successfully using `npx browserslist`, which resolved the target browser list to modern Chrome, Edge, Firefox, Safari, iOS Safari, and Android browser versions. The legacy Angular 10 browser-target configuration and its outdated Internet Explorer references have been removed. Browser-target cleanup is complete.

### 5.6 README and project documentation

The root `README.md` was updated to describe the Angular 22 application, its technology stack, routes, development commands, testing, building, and GitHub Pages deployment.

The four existing upgrade documents in `docs/` are preserved:

- `angular-upgrade-baseline.md`
- `angular-upgrade-phase2.md`
- `angular-upgrade-phase3.md`
- `angular-upgrade-phase4.md`

The README changes passed `git diff --check`.

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

### 7.1 Completed implementation and initial verification

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
- [x] Main pages and navigation manually checked in the browser.
- [x] Angular 22 integration branch created in the original repository.
- [x] Angular 22 implementation integrated into the original repository working tree.

### 7.2 Dependency, test and security verification

- [x] `npm ci` completed successfully.
- [x] Vitest application creation test passed.
- [x] Vitest main navigation links test passed.
- [x] Total unit tests passed: 2 of 2.
- [x] `npm audit` reported zero vulnerabilities at the time of verification.
- [x] Package and lockfile reviewed.
- [x] Legacy Protractor, Karma and TSLint configuration files removed.
- [x] `.angular/` cache excluded through `.gitignore`.

The install process displayed allowlist warnings for some dependency install scripts, including `@parcel/watcher`, `esbuild`, `lmdb`, and `msgpackr-extract`. Installation completed successfully.

### 7.3 Production build results

Final Angular 22 production build:

- Build command: `npx ng build --configuration production --output-path dist/github-pages`
- Initial raw bundle: 630.38 kB.
- Estimated initial transfer size: 124.71 kB.
- Initial bundle warning threshold: 500 kB.
- Initial bundle error threshold: 1 MB.
- Production build completed successfully.
- Six lazy-loaded page chunks generated.
- No compilation errors.
- The expected 500 kB bundle budget warning remains.

The 500 kB warning is intentionally retained as a bundle-size guardrail.

The warning is not a build failure. The current dependency footprint is accepted provisionally and can be revisited if meaningful optimization opportunities are identified.

The fresh production build using `dist/github-pages` completed successfully. Its generated application files were compared against the prepared `docs/` directory and found to match exactly.

### 7.4 GitHub Pages deployment preparation

The existing production deployment was originally located in `docs/` and contained the Angular 10 application shell and generated bundles.

Before replacing it, a complete backup was created outside the repository:

`~/workspace/github/profile-docs-angular10-backup`

The backup was verified against the original `docs/` directory.

The Angular 22 preview build output was copied into `docs/`.

Deployment preparation completed:

- [x] Angular 22 generated `index.html` copied into `docs/`.
- [x] `404.html` replaced with a copy of the Angular 22 `index.html`.
- [x] Base path `/profile/` verified.
- [x] Google Maps placeholder `key=#` verified.
- [x] New hashed JavaScript bundles copied.
- [x] New generated stylesheet copied.
- [x] New favicon copied.
- [x] Font Awesome font assets copied.
- [x] All 18 images copied and compared against the backup.
- [x] `index.html` and `404.html` verified as identical.
- [x] Old Angular 10 JavaScript bundles and source maps removed.
- [x] Four Angular upgrade Markdown documents preserved.

The Angular 22 deployment directory now contains the new application bundles rather than the previous Angular 10 bundles.

The original Angular 10 deployment remains recoverable from the external backup.

The fresh production build was compared against the prepared `docs/` directory using `diff -qr`. No differences were found in the generated application files. The production `index.html` also matches `docs/index.html`, and `docs/404.html` remains identical to the application index.

### 7.5 Outstanding quality assurance and post-release improvements

#### Before production release:

- [x] Verify GitHub Pages deployment after PR merge.
- [x] Confirm homepage, primary navigation and major portfolio pages load correctly.
- [x] Verify direct route access and refresh behavior.
- [x] Confirm production assets, images, styles and fonts load correctly.
- [x] Inspect browser console and network requests for critical errors.
- [x] Perform a brief responsive and keyboard-navigation smoke test.

#### Post-release quality assurance and improvements:

- [ ] Conduct comprehensive cross-browser and device testing.
- [ ] Perform detailed accessibility review.
- [ ] Improve TypeScript strictness and code quality.
- [ ] Expand unit and integration test coverage.
- [ ] Review dependency maintenance and security.
- [ ] Investigate bundle-size optimization opportunities.
- [ ] Address identified UI, accessibility and performance improvements.

A successful production build is not a substitute for functional, accessibility, and security testing.

## 8. Git Integration and Deployment Strategy

### 8.1 Git integration

The Angular 22 application was initially developed in the separate sibling directory `profile-angular22`.

The implementation was subsequently integrated into the original Git repository.

Current integration state:

- Original repository: `profile`
- Development branch: `develop`
- Integration branch: `integration/angular22`
- Production branch: `master`
- Integration commit: `fc16f1f` — `Complete Angular 22 migration and integration`
- Original Git history preserved.
- Angular 22 source, configuration, dependencies, and assets integrated.
- README and `.gitignore` updated.
- Legacy Angular 10 testing and lint configuration removed.
- GitHub Pages output prepared under `docs/`.
- Integration changes committed and pushed to GitHub.
- `develop` synchronized with `origin/develop`.
- Pull request created from `develop` into `master`; final review and approval remain pending.

The following must be preserved:

- Original Git history.
- Existing release and development branches.
- `Profile_info.txt`, which remains intentionally untracked and local.
- Historical Angular upgrade documentation.
- External Angular 10 deployment backup.

### 8.2 Release strategy

The current integration and release workflow is:

`feature/angular-upgrade` → `integration/angular22` → `develop` → Pull Request review and approval → `master` → GitHub Pages verification.

The Angular 22 implementation has been committed and pushed to the original repository.

The develop branch contains the completed integration commit. A pull request from develop into master has been created for final review.

The production master branch remains unchanged until the pull request is approved and merged.

Existing feature branches and historical release branches are retained for reference and recovery.

The Angular 22 application should be treated as the next portfolio release rather than silently replacing the previous release.

### 8.3 GitHub Pages deployment

Before release:

- Configure the correct `/profile/` base path.
- Verify the fresh production output directory.
- Confirm asset URLs resolve correctly.
- Confirm direct navigation and refresh behavior on nested routes.
- Configure the Google Maps key through a controlled build/deployment configuration.
- Avoid committing unrestricted API keys.
- Use a repeatable GitHub Actions workflow where practical.
- Review the complete Git diff and staged changes.
- Confirm that only intended files are committed.
- Deploy only after production and functional verification.
- Verify the live GitHub Pages application after release.

The prepared `docs/` directory is not yet a production release. No changes have been pushed to `master` or published as the new live version.

Official deployment reference:

https://angular.dev/tools/cli/deployment

## 9. Phase 4 Completion Criteria

### Implementation

- [x] Revised migration strategy selected.
- [x] Fresh Angular 22 application scaffolded.
- [x] Main portfolio pages recreated.
- [x] Core dependencies integrated.
- [x] Angular 22 implementation integrated into the original repository working tree.
- [x] Legacy Angular 10 configuration cleanup completed, including browser-target configuration.
- [x] README updated.
- [x] GitHub Pages deployment artifacts prepared.
- [x] Phase 4 implementation and integration documentation updated.

### Verification

- [x] Production build completed successfully.
- [x] Initial browser verification completed.
- [x] Main navigation and application tests passed.
- [x] Production build output compared against GitHub Pages deployment artifacts.
- [x] Deployment assets and base path prepared.
- [x] Original Angular 10 deployment artifacts backed up.

### Git integration
- [x] Integration branch created and synchronized.
- [x] Angular 22 integration committed and pushed.
- [x] Changes merged into `develop`.
- [x] `develop` pushed to remote.
- [x] Pull request created from `develop` into `master`.

### Production release
- [x] Pull request reviewed and approved.
- [x] Pull request merged into `master`.
- [x] GitHub Pages production deployment verified.
- [x] Production smoke testing completed.
- [x] Angular 22 production release confirmed.

### Post-release quality assurance

- [ ] Comprehensive cross-browser and device testing completed.
- [ ] Accessibility review completed.
- [ ] Additional test coverage and code-quality improvements completed.
- [ ] Dependency and security review completed.
- [ ] Performance and bundle-size improvements evaluated.
- [ ] Outstanding post-release issues addressed or documented.

## 10. Status and Decision Record

**Status: Angular 22 implementation, repository integration, initial verification,GitHub Pages deployment preparation, production deployment and initial production smoke testing completed. Angular 22 is now live on GitHub Pages. Comprehensive post-release quality assurance and remaining production configuration checks are ongoing.**

### Key architectural decision

The project changed from a sequential in-place Angular upgrade to a fresh Angular 22 scaffold and functional reimplementation.

This decision was made to:

- Reduce legacy configuration and dependency carryover.
- Keep the original Angular 10 application available as a reference and fallback.
- Simplify adoption of standalone Angular architecture.
- Validate the new implementation independently.
- Preserve the existing GitHub repository and production deployment.

### Key integration decision

The Angular 22 implementation was integrated into the original repository's working tree rather than replacing its Git history with an unrelated repository.

The integration branch `integration/angular22` provides a controlled location for final verification and review before release.

### Key deployment decision

The existing GitHub Pages `docs/` deployment was backed up before its Angular 10 application files were replaced with Angular 22 preview build output.

The original Angular 10 deployment remains recoverable outside the repository.

The prepared Angular 22 deployment retains the `/profile/` base path, the `key=#` Maps placeholder, the application assets, and all four upgrade documents.

### Release authorization

No production release is authorized solely by this document.

The Angular 22 implementation is integrated and available on develop. The pull request into master must undergo final review and receive release approval before merging.

Complete the outstanding quality assurance, verify production configuration (including Google Maps), and confirm the GitHub Pages deployment after release.

The original Angular 10 deployment backup must remain available until the Angular 22 release is successfully verified.

---

**Document status:** Updated to reflect Angular 22 implementation, repository integration, cleanup, testing, and GitHub Pages deployment preparation.

**Last updated:** November 12, 2026.
