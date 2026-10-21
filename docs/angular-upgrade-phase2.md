# Angular Upgrade — Phase 2: Prepare Development Environment

## 1. Objective

Prepare a reproducible development environment for upgrading the
existing Angular 10 portfolio application to Angular 22.

The Phase 1 baseline checkpoint is:

- Branch: feature/angular-upgrade
- Commit: 42e59cc
- Commit message: docs: record Angular 10 upgrade baseline

## 2. Development Environment

### Verified environment

| Item | Value |
|---|---|
| Operating system | Windows |
| Shell | Git Bash / PowerShell |
| Node.js active during preparation | 24.22.0 |
| npm active during preparation | 11.19.1 |
| Node.js version manager | nvm-windows |
| Upgrade branch | feature/angular-upgrade |

Node.js 20.11.1, 18.18.0 and 16.20.2 were previously
listed by nvm-windows. Retain suitable legacy runtimes as needed.

Node.js 24.22.0 and npm 11.19.1 were verified in Git Bash.
Recheck the exact Angular 22 release requirements before installing
or updating framework packages.

## 3. Target and Compatibility Plan

Target framework: Angular 22.

| Component | Existing declaration | Planned action |
|---|---|---|
| Angular framework | ~10.0.2 | Upgrade one major at a time |
| Angular CLI | ~10.0.1 | Align with the target framework |
| Angular build tools | ~0.1000.1 | Update with compatible CLI tooling |
| TypeScript | ~3.9.5 | Select a version supported by each Angular major |
| RxJS | ~6.5.5 | Verify compatibility and application usage |
| Zone.js | ~0.10.3 | Review target requirements and zoneless options |
| @agm/core | ^3.0.0-beta.0 | Investigate compatibility or replacement |
| @types/googlemaps | ^3.39.13 | Investigate legacy type declarations |
| Bootstrap | ^4.5.2 | Check UI and styling compatibility |
| jQuery | ^3.5.1 | Check whether application code depends on it |
| Protractor | ~7.0.0 | Plan an alternative for end-to-end tests |
| TSLint / Codelyzer | Legacy versions | Plan a supported linting approach |
| Karma / Jasmine | Legacy versions | Assess test migration requirements |

Exact target versions and peer dependencies must be verified against
the official Angular compatibility table and update guide before
making dependency changes.

## 4. Existing Workspace and Scripts

The application currently uses the Angular CLI browser builder.

Available npm scripts:

- start: ng serve
- build: ng build
- test: ng test
- lint: ng lint
- e2e: ng e2e

The workspace uses Karma for unit tests, Protractor for end-to-end
tests and TSLint for linting.

The configured build output path is dist/profile.

Review the existing build, test, lint and deployment behaviour before
changing these tools or the workspace configuration.

## 5. Lockfile and Git Status

The package-lock.json uses lockfileVersion 2.

Its root package metadata matches the declared dependency versions
shown in package.json. This does not establish that every lockfile
entry is consistent or that installation will succeed.

An earlier npm ci attempt encountered a package.json/lockfile
inconsistency. Investigate that issue separately before deciding
whether to regenerate or update the lockfile.

Profile_info.txt was untracked during Phase 2 verification.
It has intentionally not been added or modified as part of this
documentation checkpoint.

## 6. Migration Strategy

1. Preserve the Phase 1 baseline.
2. Establish the original application's build and behaviour.
3. Investigate dependency and lockfile issues.
4. Review the official Angular update instructions for each transition.
5. Upgrade one Angular major version at a time.
6. Align Angular CLI, framework, compiler and build tooling.
7. Resolve TypeScript, RxJS, Zone.js and third-party compatibility issues.
8. Run builds and relevant tests after each migration step.
9. Commit reviewed checkpoints throughout the migration.
10. Validate the final application, production build and GitHub Pages
    deployment before declaring the Angular 22 upgrade complete.

## 7. Phase 2 Completion Criteria

- [x] Angular 22 selected as the target.
- [x] Node.js and npm versions verified in Git Bash.
- [x] Existing package declarations inventoried.
- [x] Angular workspace configuration inspected.
- [x] Git baseline and untracked file checked.
- [x] Initial compatibility risks documented.
- [x] Migration sequence documented.
- [ ] Confirm exact target release requirements before installing
      or updating Angular packages.

## 8. References

- Angular version compatibility:
  https://angular.dev/reference/versions
- Angular Update Guide:
  https://angular.dev/update-guide
- Angular build system migration:
  https://angular.dev/tools/cli/build-system-migration

Phase 2 prepares the environment and plan. It does not perform the
Angular framework migration.
