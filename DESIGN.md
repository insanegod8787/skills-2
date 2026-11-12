# Design System

## Color

### Primary
- **Background**: `--bg` OKLCH(0.98 0.002 220) - Near-white with cool neutral hue
- **Surface**: `--surface` OKLCH(0.96 0.003 220) - Slightly warmer than bg for card sections
- **Primary Accent**: `--accent` OKLCH(0.4 0.15 220) - Cool blue accent for links/interactive elements (10% usage)

### Neutral
- **Ink (body text)**: `--ink` OKLCH(0.2 0.02 220) - Deep cool gray for readability
- **Muted**: `--muted` OKLCH(0.5 0.01 220) - For secondary text/helpers
- **Border**: `--border` OKLCH(0.85 0.005 220) - Subtle division lines

### State
- **Success**: OKLCH(0.35 0.1 140) - Cool green for success states
- **Warning**: OKLCH(0.45 0.1 30) - Cool amber for warnings
- **Error**: OKLCH(0.55 0.1 20) - Cool red for error states

### Gradients
- Not used (solid colors only per design principles)

## Typography

### Font Family
- **Display/Heading**: `"SF Pro Display", "Noto Sans SC", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
- **Body**: `"SF Text Regular", "Noto Sans SC", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

### Scale
- **h1**: clamp(2.5rem, 5vw, 4rem) - 40-64px
- **h2**: clamp(2rem, 4vw, 3rem) - 32-48px
- **h3**: clamp(1.5rem, 3vw, 2rem) - 24-32px
- **Body**: 1rem (16px) with `line-height: 1.6`
- **Small**: 0.875rem (14px)

### Line Length
- Max 65-75ch for body text
- `text-wrap: balance` on h1-h3
- `text-wrap: pretty` on long prose

### Letter Spacing
- Display headings: -0.02em (minimum, never tighter)
- Body text: normal

## Layout

### Spacing Scale
- `2xx` / `1xx` / `0` / `0.5` / `1` / `1.5` / `2` / `3` / `4` / `6` / `8` / `12` / `16` (rem values)
- Based on 4px grid incrementally scaled

### Max Width
- **Content container**: max 64rem (1024px)
- **Padding**: 1rem vertical, 1.5rem horizontal on wide screens

### Grid
- **Mobile**: 1fr
- **Tablet**: repeat(auto-fit, minmax(300px, 1fr))
- **Desktop**: repeat(auto-fit, minmax(280px, 1fr))

### Z-Index Scale
- `base`: 0
- `dropdown`: 10
- `sticky`: 20
- `modal-backdrop`: 30
- `modal`: 40
- `toast`: 50
- `tooltip`: 60

## Motion

### Philosophy
- Subtle, purposeful, enhances rather than distracts
- Respect `prefers-reduced-motion`

### Curve
- ease-out-quart for most transitions

### Duration
- Fast: 150ms
- Medium: 250ms
- Slow: 350ms

### Reduced Motion
- `@media (prefers-reduced-motion: reduce)`: All transitions become 0ms (instant), hover effects become simple color changes, no staggered entrances

### Examples
- **Fade-in**: opacity 250ms ease-out-quart
- **Slide-up**: transform translateY 250ms ease-out-quart
- **Hover scale**: transform scale(1.05) 200ms ease-out-quart
- **Staggered list**: children staggered with 50ms delay, 100ms total

## Components

### Buttons
- **Primary**: `--accent` background, white ink, 1rem padding, 0.125rem border radius, inline-block
- **Secondary**: transparent, `--ink` text, 1px `--border` solid, same padding/radius
- **Small**: 0.875rem font, smaller padding
- **Disabled**: 0.5 opacity, `--muted` background

### Cards
- Background: `--surface`
- Border: 1px `--border` solid
- Border radius: 0.5rem (8px)
- Padding: 1.5rem
- Shadow: 0 1px 2px rgba(0,0,0,0.05)

### Navigation
- **Header**: Fixed top, full width, `--bg` background, `--ink` text
- **Links**: `--muted` text, hover `--accent`, focus outline 2px `--accent`
- **Mobile**: Hamburger menu, drawer animation

## Accessibility

### Contrast
- Body text: 4.5:1 minimum against `--bg`
- Large text (≥18px or bold ≥14px): 3:1 minimum
- UI components: 3:1 minimum

### Focus Visible
- Outline color: `--accent`
- Outline width: 2px
- Outline style: solid

### Image Alt
- All informative images require meaningful alt text
- Decorative images: `alt=""`

### Keyboard Navigation
- Logical tab order
- Visible focus state on all interactive elements
- Skip links for main content

### Language
- `lang` attribute on html element
- Default: `zh-TW` or `en` based on user locale

## Reduced Motion Strategy

When `prefers-reduced-motion` is active:
- All CSS transitions: 0ms duration
- Transform/scale animations: instant
- Staggered entrances: single entrance or none
- Parallax effects: disabled
- Hover color changes: instant color transition or none
- Spring/ bouncing effects: disabled