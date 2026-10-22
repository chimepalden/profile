# Angular Upgrade — Phase 3: Audit and Stabilize

## 1. Objective

Audit the original Angular application, inspect its dependency lockfile,
and reproduce the baseline build without modifying dependency declarations.

## 2. Git Baseline and Working Tree

- Working branch: `feature/angular-upgrade`
- Baseline commit: `be3499a`
- `package.json`, `package-lock.json`, and `angular.json` match the baseline commit.
- The original dependency and workspace files remain unchanged.
- `Profile_info.txt` remains untracked and has been intentionally preserved.

## 3. Verified Development Environment

| Item | Verified value |
|---|---|
| Operating system | Windows |
| Shell | Git Bash |
| Node.js | 20.11.1 |
| npm | 10.2.4 |
| Node.js version manager | nvm-windows |

Node.js 20.11.1 was activated using `nvm use 20.11.1`.
The build completed successfully with this runtime.

## 4. Original Application Dependencies

The original application uses Angular 10.

Verified installed versions include:

- Angular framework: 10.0.14
- Angular CLI: 10.0.8
- Angular build tools: 0.1000.8
- TypeScript: 3.9.7
- RxJS: 6.5.5
- Zone.js: 0.10.3

The declared dependency ranges in `package.json` match the root
dependency declarations recorded in `package-lock.json`.

## 5. Lockfile Investigation

- Lockfile format: version 2
- Root production dependencies: 15
- Root development dependencies: 18
- Legacy dependency entries: 1,014
- Package map entries: 1,469

The direct dependency comparison found no declaration mismatches
and no missing direct dependency entries in the inspected lockfile
sections.

The following package entries were absent from both inspected
lockfile sections:

- `popper.js`
- `bindings`
- `nan`
- `file-uri-to-path`

The lockfile references `bindings` and `nan` from nested `fsevents`
entries associated with `watchpack-chokidar2` and `webpack-dev-server`.

No references to `popper.js` or `file-uri-to-path` were found in the dependency sections inspected.

The initial investigation identified missing package entries in both inspected lockfile sections. A clean installation on the laptop using Node.js v20.11.1 and npm 10.2.4 reproduced the earlier `npm ci` failure, which identified the missing entries as:

- `popper.js@1.16.1`
- `bindings@1.5.0`
- `nan@2.30.0`
- `file-uri-to-path@1.0.0`

Before modifying the lockfile, a backup was created outside the repository.

The lockfile was repaired using:

`npm install --package-lock-only --lockfile-version=2 --ignore-scripts --no-audit --no-fund`

The repair added the missing entries to both lockfile sections. The
lockfile format remains version 2, and `package.json` was unchanged.

The repair was committed as `1e425e7`
(`fix: repair Angular 10 dependency lockfile`).

## 6. Installed Dependency Tree

`npm ls --depth=0` reported the installed Angular 10 dependencies
and their versions.

It also reported `__ngcc_entry_points__.json` as extraneous.
This observation has not been investigated further.

The existing `node_modules` directory was preserved during the initial audit. Later, on the laptop, `npm ci` successfully installed the dependencies from the repaired lockfile, adding 1,452 packages.

This confirms that a clean installation is now reproducible. The
successful build from that fresh installation provides stronger
baseline validation than the original build from the existing
`node_modules` directory.

## 7. Baseline Build Reproduction

Command:

`NODE_OPTIONS=--openssl-legacy-provider npm run build`

Result: successful.

- Angular CLI compiled the application.
- Main, polyfills, runtime, styles, and vendor chunks were generated.
- Reported build duration: approximately 8.5 seconds.
- No dependency declarations or lockfile entries were changed.

The OpenSSL compatibility option was applied to this command only.

### Clean-install Build Verification

Following the successful `npm ci`, the original Angular 10 application built successfully using the command recorded above. This confirms that the repaired lockfile supports a clean installation and build with Node.js v20.11.1 and npm 10.2.4.

The installation reported 187 vulnerabilities: 12 low, 78 moderate,
78 high, and 19 critical. These findings remain outstanding for investigation during the upgrade. No `npm audit fix` command was run.

## 8. Final Working Tree Verification

After the successful build, before creating this document:

- `git status --short` reported only `?? Profile_info.txt`.
- `git diff --stat` returned no output.
- `git diff -- package.json package-lock.json angular.json` returned no output.

After creating and staging this document, `Profile_info.txt` remained untracked and unstaged.

The build did not introduce any reported changes to tracked files.

## 9. Outstanding Work

1. Inspect the original application's runtime behaviour and relevant tests.
2. Document any further findings before making dependency changes.
3. Investigate and document the vulnerabilities reported during installation.

The lockfile repair and clean-install validation are complete. Avoid unrelated dependency changes until the remaining baseline audit is complete and the next upgrade step is planned.

## 10. Phase 3 Status

- [x] Confirm the working branch and Git baseline.
- [x] Inspect existing baseline and Phase 2 documentation.
- [x] Compare root dependency declarations with the lockfile.
- [x] Investigate the four previously identified missing package entries.
- [x] Verify installed dependency versions.
- [x] Reproduce the original Angular 10 build.
- [x] Confirm tracked dependency and workspace files remain unchanged.
- [x] Determine the cause of the earlier `npm ci` failure.
- [x] Repair the missing lockfile entries without changing `package.json`.
- [x] Verify a clean installation using `npm ci`.
- [x] Verify the original Angular 10 build after clean installation.
- [ ] Complete the remaining application behaviour and test audit.
- [ ] Investigate and document the reported dependency vulnerabilities.

Phase 3's dependency-installation investigation and baseline build
validation are complete. The lockfile inconsistency has been repaired, and both a clean installation and the original Angular 10 build succeeded on the laptop. The application behaviour and test audit, along with vulnerability investigation, remain outstanding before the upgrade proceeds.
