# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a UI concept showcase application for LAER (or customizable company name) that demonstrates multiple design versions (v1-v6) of landing pages and SaaS application views. Each version explores different design philosophies (Bauhaus, minimalism, organic design, etc.).

## Development Commands

### Local Development
```bash
pnpm dev         # Start Vite dev server with HMR
pnpm build       # TypeScript compilation + production build
pnpm preview     # Preview production build locally
```

### Code Quality
```bash
pnpm lint        # Run Biome linter
pnpm check       # Run Biome check with auto-fix
pnpm format      # Format code with Biome
```

## Architecture

### Routing
- **File-based routing** powered by TanStack Router
- Routes are defined in `src/routes/` directory
- Route tree is auto-generated in `src/routeTree.gen.ts` (DO NOT manually edit this file)
- Version routes follow pattern: `/v{N}` and `/v{N}/app` (e.g., `/v1`, `/v1/app`)
- Each version has two main views:
  - Landing page: `src/versions/v{N}/LandingPage.tsx`
  - SaaS app view: `src/versions/v{N}/SaasPage.tsx`

### Route Structure
```
/                    → Home page (version selector)
/v1                  → v1 landing page
/v1/app             → v1 SaaS view
... (pattern repeats for v2-v6)
```

Routes are created using lazy loading:
- Layout routes: `src/routes/v{N}.tsx` (contain `<Outlet />`)
- Lazy routes: `src/routes/v{N}/index.lazy.tsx` and `src/routes/v{N}/app.lazy.tsx`

### State Management
- **Company Name**: Managed via `useCompanyName` hook (`src/hooks/useCompanyName.ts`)
  - Persisted in localStorage with key `"companyName"`
  - Default value: `"LAER"`
  - Syncs across browser tabs via storage events
  - Used throughout all version landing pages for branding

### Styling
- **Tailwind CSS v4** with @tailwindcss/vite plugin
- Custom theme defined in `src/index.css` using `@theme` directive
- Global CSS variables for colors:
  - `--color-paper`: #f4f3ee (background)
  - `--color-ink`: #121212 (text)
  - `--color-primary-red`, `--color-primary-blue`, `--color-primary-yellow`
  - `--color-ai-mint`, `--color-ai-orange`
- Fonts: Jost (sans-serif), Merriweather (serif)
- Utility class `tailwind-merge` used for dynamic className composition

### Assets
- Version-specific assets stored in `public/v{N}/` directories (v1-v13)
- Shared images in `public/images/`
- Reference designs for each version stored in `refs_for_version_{N}/` (tracked in git but being cleaned up)

## Code Style & Linting

### Biome Configuration
- Uses Biome (not ESLint/Prettier) for linting and formatting
- Config: `biome.json`
- Notable rules:
  - Import/export types must be explicitly typed (`useImportType`, `useExportType`)
  - Console logs are errors (`noConsole: "error"`)
  - Sorted Tailwind classes enforced (`useSortedClasses: "error"`)
  - Accessibility rules disabled (`a11y.recommended: false`)
  - Auto-generated files ignored: `src/routeTree.gen.ts`

### Import Conventions
- Use type imports: `import type { ... }`
- Use Node.js protocol for Node imports: `import { ... } from "node:fs"`

## Adding a New Version

When adding a new design version (e.g., v7):

1. Create version components:
   - `src/versions/v7/LandingPage.tsx`
   - `src/versions/v7/SaasPage.tsx`

2. Create route files:
   - `src/routes/v7.tsx` (layout with `<Outlet />`)
   - `src/routes/v7/index.lazy.tsx` (landing page)
   - `src/routes/v7/app.lazy.tsx` (SaaS view)

3. Add version card to `src/pages/Home.tsx`

4. Create assets directory: `public/v7/`

5. Run dev server - TanStack Router will auto-generate route tree

## Important Files

- `src/App.tsx`: Router setup and provider
- `src/main.tsx`: React root render
- `src/pages/Home.tsx`: Version selector/gallery home page
- `src/components/VersionCard.tsx`: Reusable card component for home page
- `src/components/HomeWidget.tsx`: Navigation widget for returning to home
- `src/components/CompanySettings.tsx`: Modal for changing company name
- `src/hooks/useCompanyName.ts`: Company name state management
- `vite.config.ts`: Vite config with TanStack Router plugin

## TypeScript

- Multiple tsconfig files (composite setup):
  - `tsconfig.json` (references app and node configs)
  - `tsconfig.app.json` (app-specific config)
  - `tsconfig.node.json` (Vite config files)
