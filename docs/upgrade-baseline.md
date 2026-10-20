# Angular upgrade baseline
- Starting branch: feature/angular-upgrade
- Starting commit: be3499a
- Original Angular core: 10.0.14
- Original Angular CLI: 10.0.8
- Original build tools: 0.1000.8
- Original Webpack: 4.43.0
- Original TypeScript: 3.9.7
- Node.js: 20.11.1
- npm: 10.2.4

## Baseline verification
- `npm run build`: fails with OpenSSL error under current Node.js.
- `NODE_OPTIONS=--openssl-legacy-provider npm run build`: succeeds.
- `NDOE_OPTIONS=--openssl-legacy-provider npm start`: compiles successfully.
- Local site: visually matches the live GitHub Pages site.
- Existing untracked file: `Profile_info.txt` (preserve).