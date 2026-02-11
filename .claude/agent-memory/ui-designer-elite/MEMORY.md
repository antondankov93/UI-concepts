# UI Designer Elite - Agent Memory

## Project Structure Patterns
- Route layout: `src/routes/v{N}.tsx` (creates `<Outlet />`)
- Lazy routes: `src/routes/v{N}/index.lazy.tsx` and `src/routes/v{N}/app.lazy.tsx`
- Version components: `src/versions/v{N}/LandingPage.tsx` and `src/versions/v{N}/SaasPage.tsx`
- Assets: `public/v{N}/`
- Home page gallery: `src/pages/Home.tsx` (add VersionCard for each version)

## Route Tree Generation
- TanStack Router auto-generates `src/routeTree.gen.ts` when dev server runs
- Running `pnpm dev` briefly (5-8s) triggers generation before build
- `pnpm build` will fail with TS errors until route tree includes new routes
- Direct CLI `@tanstack/router-cli generate` may have npm cache permission issues; prefer dev server approach

## Biome Linting
- CSS class sorting (nursery/useSortedClasses) is the most common lint error
- Use `pnpm biome check --write --unsafe` to auto-fix these (they are "unsafe" because nursery)
- Existing codebase has ~700+ pre-existing lint errors in other files; only check new files
- `noConsole` is enforced -- avoid console.log/error in new code

## Design Versions Created
- **V7 - "The Pictograph"**: Isotype/Gerd Arntz-inspired ink illustrations on warm parchment
  - Palette: parchment #E8E4DB, ink #1A1A1A, terracotta #C05A3D, sage #4A6741
  - Typography: Merriweather serif for headings, Jost sans for body
  - Border language: 2px solid strokes matching illustration weight
  - SaaS page: Subdued warm neutrals, square corners (no rounded), serif headings only
  - [details](./v7-design.md)

## Key Conventions
- Always use `useCompanyName` hook for brand name
- Always include `<HomeWidget />` component in both Landing and SaaS pages
- Use `motion` from framer-motion for animations
- Use lucide-react for icons
- Link `to` props are type-checked against route tree -- routes must be generated first
