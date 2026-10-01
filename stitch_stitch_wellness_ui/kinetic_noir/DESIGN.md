---
name: Kinetic Noir
colors:
  surface: '#1f0f0d'
  surface-dim: '#1f0f0d'
  surface-bright: '#493431'
  surface-container-lowest: '#190a08'
  surface-container-low: '#291715'
  surface-container: '#2d1b18'
  surface-container-high: '#392522'
  surface-container-highest: '#44302d'
  on-surface: '#fcdbd6'
  on-surface-variant: '#e7bdb7'
  inverse-surface: '#fcdbd6'
  inverse-on-surface: '#402b29'
  outline: '#ad8883'
  outline-variant: '#5d3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#ff5545'
  on-primary-container: '#5c0002'
  inverse-primary: '#c0000a'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b6b4b7'
  tertiary: '#68d3fc'
  on-tertiary: '#003545'
  tertiary-container: '#1d9cc3'
  on-tertiary-container: '#002e3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930005'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#bbe9ff'
  tertiary-fixed-dim: '#68d3fc'
  on-tertiary-fixed: '#001f29'
  on-tertiary-fixed-variant: '#004d63'
  background: '#1f0f0d'
  on-background: '#fcdbd6'
  surface-variant: '#44302d'
typography:
  headline-display:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  data-point:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 120px
---

## Brand & Style

This design system targets a health-conscious Gen Z demographic that views fitness as a lifestyle rather than a chore. The aesthetic moves away from the aggressive, grit-heavy "no pain, no gain" visuals of traditional fitness apps, leaning instead into a high-end, lifestyle-focused "Wellness Fintech" look. 

The style is **Minimalist Glassmorphism**. It utilizes a deep matte foundation to reduce eye strain and create a premium, focused environment. Large, expressive typography provides clear information hierarchy, while frosted glass layers and vibrant accents ensure the interface feels modern and dynamic. The emotional response should be one of calm focus, sophistication, and rhythmic energy.

## Colors

The palette is strictly dark-mode to emphasize the premium nature of the experience. 

- **Primary Accent (#FF3B30):** A high-vibrancy red used sparingly for calls to action, active states, and progress indicators. It represents energy and vital signs.
- **Surface Layers:** The background is a true matte black (#0D0D0D). Secondary surfaces use a deep charcoal (#1C1C1E) to create subtle depth without high-contrast jarring.
- **Typography:** Pure white is reserved for headers and primary data. Light gray (#B0B0B0) provides a soft hierarchy for metadata and helper text, maintaining a sophisticated low-contrast look for secondary information.

## Typography

The typography system mixes geometric tech-focused sans-serifs with a functional monospace for data.

- **Sora** is the primary voice, chosen for its futuristic, geometric construction that feels both athletic and high-tech. Use it for all headers and key metrics.
- **Hanken Grotesk** handles the body copy. It is exceptionally clean and professional, ensuring that workout instructions and health articles remain highly legible.
- **JetBrains Mono** is used for "system" labels—things like timestamps, calorie counts, or technical specs. This reinforces the "quantified self" and fintech-inspired data visualization.

## Layout & Spacing

This design system follows a strict **8pt grid system** to ensure mathematical harmony. 

The layout philosophy is **Spacious & Fluid**. Negative space is used as a luxury element, preventing the interface from feeling cluttered or overwhelming.
- **Mobile:** Uses a single-column fluid layout with 20px side margins. Elements are stacked with 24px (md) vertical spacing to maintain breathing room.
- **Desktop/Tablet:** Content is constrained to a max-width container (typically 1200px) with a 12-column grid. Large "hero" cards can span 8 columns, while metrics cards span 4.
- **Rhythm:** Always prefer larger gaps (40px+) between distinct functional sections to help users mentally categorize their data.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism** and tonal stacking rather than heavy shadows.

1.  **Level 0 (Background):** Matte Black (#0D0D0D).
2.  **Level 1 (Cards/Surfaces):** Dark Gray (#1C1C1E) with a subtle 1px border (#FFFFFF with 10% opacity) to define edges.
3.  **Level 2 (Overlays/Glass):** Surfaces that appear over background content use a backdrop-blur (20px) with a semi-transparent fill (#1C1C1E at 70% opacity).
4.  **Shadows:** Use only one type of shadow—the "Ambient Glow." This is a very large, soft blur (32px) with low opacity (15%) using the Primary Accent color, applied only to the most important active CTA or "Daily Goal" card.

## Shapes

The shape language is characterized by **Generous Radii**. 

- **Primary Cards:** Use a consistent 24px corner radius (`rounded-xl` logic) to create a friendly, organic feel that contrasts with the technical matte black.
- **Buttons/Inputs:** Use 16px (`rounded-lg`).
- **Interactive Tags/Chips:** Use full pills for a distinct interactive signature.
- **Iconography:** Icons must be "Outlined" with a 1.5px or 2px stroke width. Ends should be rounded to match the UI's radius. Avoid filled icons unless they represent an active "On" state.

## Components

- **Buttons:** Primary buttons are Solid Vibrant Red with White text. Secondary buttons are "Ghost" style (Matte border, no fill). All buttons utilize a 16px radius and Hanken Grotesk Medium for labels.
- **Glass Cards:** Used for "at-a-glance" metrics. They should feature a subtle 1px top-light border to simulate a glass edge catching the light.
- **Progress Rings:** Use the Primary Red against a track of Dark Gray (#1C1C1E). Stroke caps must be rounded.
- **Inputs:** Dark Gray (#1C1C1E) fill with no border. On focus, add a 1px border of Primary Red. Use JetBrains Mono for placeholder text to keep the "data entry" feel consistent.
- **Lists:** Items are separated by 16px of vertical space. Do not use horizontal divider lines; use the spacing and background surface changes to define rows.
- **Lifestyle Imagery:** Photos should be high-contrast, desaturated, or have a dark overlay to ensure text legibility. Focus on candid, high-quality photography of people in motion or tranquil wellness settings.