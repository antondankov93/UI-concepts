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
- **V8 - "The Moire"**: Optical line art / moire pattern aesthetic, lightweight and mysterious
  - Palette: cool gray bg #EDEDEB, graphite #1C1C1C, mist #C5C5C1, accent (muted indigo) #6B7B8F
  - Typography: Jost only, font-extralight/font-light weights for ethereal quality
  - Border language: 1px, very subtle borderSoft #E0DFDC / borderFaint #EAEAE7
  - SVG decorations: MoireWaves (flowing parallel lines), MoireOrb (concentric wobbling ellipses)
  - SaaS: Ultra-lightweight, gap-px grid patterns, near-invisible borders, SubtleMoire decoration
  - Reference images: "Animals in Moire" by Andrea Minini + optical illusion poster art
  - [details](./v8-design.md)

- **V12 - "The Threshold"**: Constructivist Minimalism -- editorial illustration collage art
  - Palette: warm cream #F0EDE6, vermillion #E63226, Klein blue #3D52D5, graphite #141414
  - Typography: Jost only, font-light for display, normal weight for body. tracking-tight headings.
  - Border language: 1px warm borders #D8D4CD, zero border-radius everywhere (square corners)
  - Motif: Massive color blocks with tiny human-scale figures -- scale contrast as metaphor
  - Images: 6 editorial illustrations (Eiko Ojala style) placed as architectural elements
  - Hero: image1 as full background with cream gradient overlay for text readability
  - Sections: image2 (Research), image3 (Collaboration), image5 (Education), image4 (CTA)
  - Footer: image6 in left bottom corner as signature mark
  - SaaS: Warm cream bg #EDEBE5, white cards, vermillion accents for active/primary states
  - [details](./v12-design.md)

## Key Conventions
- Always use `useCompanyName` hook for brand name
- Always include `<HomeWidget />` component in both Landing and SaaS pages
- Use `motion` from framer-motion for animations
- Use lucide-react for icons
- Link `to` props are type-checked against route tree -- routes must be generated first
