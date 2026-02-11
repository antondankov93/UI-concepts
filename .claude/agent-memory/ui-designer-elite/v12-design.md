# V12 - "The Threshold" Design Notes

## Art Direction
Constructivist Minimalism -- the bold graphic certainty of El Lissitzky and Rodchenko
married to contemporary editorial illustration (Eiko Ojala, Andrea De Santis). Tiny human
silhouettes confront monumental geometric color planes. Walls, doors, paths, horizons
serve as metaphors for navigating legal complexity.

## Color Palette
| Token         | Hex       | Usage                                      |
|---------------|-----------|---------------------------------------------|
| cream         | #F0EDE6   | Primary background, ground plane            |
| creamDark     | #E5E1D9   | Footer bg, subtle section differentiation   |
| creamLight    | #F7F5F0   | Alt section bg, SaaS hover state            |
| vermillion    | #E63226   | Primary accent, CTA buttons, active states  |
| vermillionDark| #C42A20   | Hover state for vermillion buttons          |
| blue          | #3D52D5   | Secondary accent (Collaboration, Education) |
| blueSoft      | #3D52D518 | Blue badge/indicator backgrounds            |
| graphite      | #141414   | Primary text, dark sections                 |
| graphiteMid   | #3A3A3A   | Secondary text                              |
| graphiteLight | #6B6B6B   | Body text, descriptions                     |
| warmGray      | #9A9590   | Labels, section tags, meta text             |
| warmGrayLight | #C5C0BA   | Very light tertiary text                    |
| border        | #D8D4CD   | Standard borders                            |
| borderLight   | #E5E1D9   | Subtle borders (cards, dividers)            |

## SaaS Palette Differences
- bg shifted slightly cooler: #EDEBE5
- Uses vermillionSoft (#E6322612) for active sidebar items
- Status badges: Active=vermillion, Review=blue, Complete=success(#3D7A4A)
- Progress bars: vermillion fill, borderLight track, no rounded corners

## Typography
- Font: Jost (sans-serif) exclusively
- Hero heading: font-light, text-[5.5rem] on desktop, tracking-tight
- Section headings: font-light, text-5xl
- Body: normal weight, text-base
- Labels/tags: text-[11px], uppercase, tracking-[0.4em] or tracking-[0.5em]
- SaaS body: normal/medium weight for readability

## Layout Principles
- Asymmetric two-column grids (text vs image)
- Alternating sides: odd sections have text-left/image-right, even sections reverse
- Enormous negative space around images
- Images treated as standalone art pieces (object-contain, not cropped)
- Small decorative color squares (6-8px) as accent marks near images

## Key Design Elements
- 3px vermillion/blue bars as section indicators
- Section numbering: "01 / Research" format with tracking-[0.4em]
- Stats displayed as font-light text-3xl with uppercase 10px labels
- Hover: expanding 2px lines, button color transitions at 500ms duration
- Scroll indicator: custom keyframe animation "threshold-pulse"

## Image Placement
1. image1 (hero bg): Solitary figure facing vast red wall with dark doorway
2. image2 (Research): Figure bearing tilted red bar -- weight of complexity
3. image3 (Collaboration): Grid of red panels with figures -- collective structure
4. image4 (CTA): Figure on zigzag path toward light -- illuminated path
5. image5 (Education): Figure at blue/cream boundary -- horizon of knowledge
6. image6 (footer): Red geometric form with figure -- signature mark, left bottom
