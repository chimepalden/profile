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

No references to `popper.js` or `file-uri-to-path` were found in the
dependency sections inspected.

These findings do not establish the complete cause of the earlier
`npm ci` failure. Further investigation is required before deciding
whether the lockfile needs repair.

## 6. Installed Dependency Tree

`npm ls --depth=0` reported the installed Angular 10 dependencies
and their versions.

It also reported `__ngcc_entry_points__.json` as extraneous.
This observation has not been investigated further.

The existing `node_modules` directory was preserved during the audit.
The successful build confirms that the existing installed dependency
tree can build the application, but does not prove that a clean
installation from the lockfile will succeed.

## 7. Baseline Build Reproduction

Command:

`NODE_OPTIONS=--openssl-legacy-provider npm run build`

Result: successful.

- Angular CLI compiled the application.
- Main, polyfills, runtime, styles, and vendor chunks were generated.
- Reported build duration: approximately 8.5 seconds.
- No dependency declarations or lockfile entries were changed.

The OpenSSL compatibility option was applied to this command only.

## 8. Final Working Tree Verification

After the successful build, before creating this document:

- `git status --short` reported only `?? Profile_info.txt`.
- `git diff --stat` returned no output.
- `git diff -- package.json package-lock.json angular.json` returned no output.

After creating and staging this document, `Profile_info.txt` remained untracked and unstaged.

The build did not introduce any reported changes to tracked files.

## 9. Outstanding Work

1. Investigate the previous `npm ci` failure and missing lockfile entries.
2. Preserve the current installed dependency tree until a safe reproduction
   strategy has been selected.
3. Inspect the original application's runtime behaviour and relevant tests.
4. Document any further findings before making dependency changes.

Do not regenerate `package-lock.json`, run `npm install`, or run `ng update`
as part of this audit checkpoint.

## 10. Phase 3 Status

- [x] Confirm the working branch and Git baseline.
- [x] Inspect existing baseline and Phase 2 documentation.
- [x] Compare root dependency declarations with the lockfile.
- [x] Investigate the four previously identified missing package entries.
- [x] Verify installed dependency versions.
- [x] Reproduce the original Angular 10 build.
- [x] Confirm tracked dependency and workspace files remain unchanged.
- [ ] Determine the cause of the earlier `npm ci` failure.
- [ ] Decide on a safe clean-install reproduction strategy.
- [ ] Complete the remaining application behaviour and test audit.

Phase 3 is partially complete. The original build is reproducible,
but the lockfile issue remains unresolved.
