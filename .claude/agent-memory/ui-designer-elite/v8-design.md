# V8 - "The Moire" Design Notes

## Artistic Inspiration
- **Andrea Minini's "Animals in Moire"** series: organic forms (turtles, whales) rendered entirely from flowing parallel lines that bend to create volumetric illusion
- **Optical Illusion poster art**: concentric shapes that create depth through line density
- The moire effect itself: when overlapping line patterns create emergent visual structure that wasn't in either pattern alone -- metaphor for investigative work

## Key Design Decisions

### Why monochrome with muted indigo accent
- The reference images are pure black-on-pale-gray. The design honors this restraint.
- A single muted indigo (#6B7B8F) was chosen as the accent: it reads as professional and slightly mysterious without introducing warmth that would fight the cool palette.
- No bright or saturated colors anywhere -- the "mystery" comes from subtlety, not darkness.

### Landing Page Structure
1. **Hero**: Full-viewport centered, font-extralight at very large sizes. Background MoireWaves and MoireOrb at 3-4% opacity. The hero is almost all whitespace -- forms emerge from emptiness.
2. **Three Pillars**: Full-width stacked sections, each with its reference image as an atmospheric background at 7% opacity + grayscale + contrast(1.1). CSS mask-image gradient fades the image from the side opposite the text (right for odd pillars, left for even). Text alternates left/right across a 12-col grid (col-span-6). "Learn more" and accent line appear on hover (group-hover). Sections separated by borderFaint bottom border.
3. **Philosophy**: Text + large decorative moire orb SVG (30 concentric wobbling ellipses at 12% opacity). Stats use font-extralight for numbers.
4. **Approach**: Three-column grid with gap-px (borderSoft shows through as hairline dividers). Step numbers in faint tracking. Hover reveals an accent line.
5. **CTA**: Dark section (graphite background) with inverted MoireWaves. Two buttons: filled and outline.
6. **Footer**: Minimal, border-top divider, font-light tracking everywhere.

### SaaS Page Design Principles (revised for readability)
- **Functional contrast**: font-light for headings, font-normal/font-medium for body text and labels
- **Visible borders**: cards use explicit 1px border with borderLight (#E2E1DE), gap-4 between cards
- **Darkened secondary colors**: graphiteLight raised to #6B6B69, mist to #9E9E9A for legible labels
- **White cards on gray bg**: bgCard is pure #FFFFFF against bg #EEEEED for clear separation
- **SubtleMoire component**: tiny SVG wave decoration at 3% opacity in stat cards -- visual identity
- **ChevronRight on research items**: always visible affordance (replaced hidden Eye icon)
- **No rounded corners anywhere**: matches the geometric precision of the line art
- **Interactive feedback**: hover states with borderColor change + subtle bg tint on research items
- **Accent deepened to #566A7E** for better contrast on white backgrounds

### SVG Components
- `MoireWaves`: Configurable flowing parallel lines using cubic bezier curves. Parameters: lineCount, amplitude, strokeColor, opacity. Lines have slightly different strokeWidths (0.6-1.0) for natural variation.
- `MoireOrb`: Concentric ellipses with sinusoidal wobble on cx/cy and ry ratio. Creates the optical depth effect from the reference images.
- `SubtleMoire`: Lightweight version for SaaS cards -- only 8 lines, 3% opacity.

## Color Tokens
```
bg: "#EDEDEB"        -- main background, cool pale gray
bgLight: "#F4F3F1"   -- section background variation
bgWhite: "#FAFAF9"   -- card/frame background
graphite: "#1C1C1C"  -- primary text
graphiteMid: "#4A4A4A" -- secondary text
graphiteLight: "#8A8A88" -- tertiary/muted text
mist: "#C5C5C1"      -- very faint text, decorative elements
mistLight: "#DDDDD9" -- lightest decorative
indigo: "#4A5568"     -- (unused, reserved)
accent: "#6B7B8F"    -- primary accent (muted indigo)
borderSoft: "#E0DFDC" -- visible borders
borderFaint: "#EAEAE7" -- near-invisible borders (SaaS)
```

## Files
- `/src/versions/v8/LandingPage.tsx` -- ~750 lines after Biome formatting
- `/src/versions/v8/SaasPage.tsx` -- ~660 lines after Biome formatting
- `/src/routes/v8.tsx` -- layout route
- `/src/routes/v8/index.lazy.tsx` -- landing lazy route
- `/src/routes/v8/app.lazy.tsx` -- SaaS lazy route
- `/public/v8/image1.jpeg` -- Turtles in Moire (Research pillar)
- `/public/v8/image2.jpeg` -- Optical Illusion 01 (Collaboration pillar)
- `/public/v8/image3.jpeg` -- Whales in Moire (Education pillar)
