<!--
Guidance for AI coding agents working on the `ai-music-visualizer` repo.
Keep this file concise (20-50 lines). Update when repository structure or tooling changes.
-->

# Copilot instructions — ai-music-visualizer

Short summary
- This project is a Next.js React app that uses ml5 (client-side ML) to build an AI music visualizer.
- The repo currently contains only a README; expect the usual Next.js layout (`pages/` or `app/`, `components/`, `public/`, etc.).

What I should know first
- Read `README.md` for the project's purpose.
- There is no `package.json` or source files checked into the repo yet (confirm). Before running or editing, ask the maintainer which package manager (npm/yarn/pnpm) they prefer and whether the app will use the pages router or the app router.

Architecture expectations (what to look for)
- Frontend only: Next.js + React. Visualizers live in `components/` and are driven by an audio pipeline.
- Client ML: `ml5` (in-browser). Look for imports like `import ml5 from 'ml5';` or `import * as ml5 from 'ml5';` in components that access audio.
- Audio pipeline: Web Audio API nodes (AudioContext, AnalyserNode) or ml5 audio helpers -> transform audio features (FFT, amplitude, pitch) -> React state/context -> presentational visualizer components.
- Optional server code: `pages/api/` endpoints for uploads/preprocessing if present.

Project-specific conventions
- Use semicolons at the end of each statement (codebase style requirement).
- Prefer small, pure functional React components with hooks (useState/useEffect/useRef/useContext). Use the app's Context for global audio/visual state (e.g., `AudioContextProvider` or `AudioStateContext`).
- Fail-fast / early return: prefer checking inputs and returning early in functions and components.
- DRY: centralize audio helper functions under `lib/` or `utils/` and reuse across components.

Developer workflows (if files are missing, ask the maintainer for confirmation)
- Typical commands for a Next.js project (assumes npm):
```powershell
npm install;
npm run dev; # start development server
npm run build; npm start; # for production
```
- Use `npm ci` in CI for reproducible installs once `package-lock.json` is present.

Patterns & anti-patterns to follow
- Use `useRef` for mutable audio nodes to avoid re-renders; update render-driven state with requestAnimationFrame when animating visuals.
- Keep heavy computation off the main render path; memoize selectors and derived values with `useMemo`.
- Avoid creating new function references inside frequently-run hooks; use `useCallback` where appropriate.

Files and places to inspect when making changes
- `README.md` — project description and goals (currently present).
- `package.json` — scripts, dependencies, conventions (may be missing).
- `pages/` or `app/` — router entry points.
- `components/` — visualizers, UI widgets.
- `lib/` or `utils/` — audio helpers, constants.
- `public/` — static assets (audio samples, images).

Questions to ask the maintainer (do this before large changes)
1. Which router will the app use: Next.js pages router (`pages/`) or the app router (`app/`)?
2. Preferred package manager (npm/yarn/pnpm) and node/npm version to target?
3. Do you want linting (ESLint + Prettier) and a strict style (semi-colons enforced) added now?

If unsure: keep changes small, add tests or a minimal example component under `components/sample-visualizer/` that demonstrates the audio -> ml5 -> canvas flow and obeys the semicolon style.

---
If any of the assumptions above are wrong, ask the maintainer before implementing large features.
