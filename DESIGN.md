---
name: Adarsh × Uma
description: After-hours memory cinema for a private fifth anniversary.
colors:
  wine-950: "#180b11"
  wine-900: "#240d16"
  wine-700: "#5e172d"
  wine-500: "#91405a"
  cream: "#f5e8d8"
  cream-deep: "#ead7c0"
  blush: "#e6b7ae"
  peach: "#d98c78"
  gold: "#d7ad69"
  charcoal: "#181417"
  ink: "#2a1b20"
  paper: "#fff8ed"
  gallery-dusk: "#e8c8bf"
  sticky-butter: "#fff5dc"
typography:
  display:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.7rem, 7vw, 5.9rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(1.25rem, 2.6vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.16em"
  handwriting:
    fontFamily: "Kalam, cursive"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0"
  story: "0.35rem"
  chat: "1.5rem"
  bubble: "1rem"
  pill: "99px"
  circle: "50%"
spacing:
  page-gutter: "clamp(1.25rem, 4vw, 5rem)"
  section: "clamp(6rem, 13vw, 11rem)"
  heading-gap: "clamp(3rem, 8vw, 6rem)"
  stack-sm: "0.7rem"
  stack-md: "1.5rem"
  stack-lg: "2.4rem"
components:
  button-envelope:
    backgroundColor: "rgba(245, 232, 216, 0.08)"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.1rem 0.65rem 0.7rem"
    height: "3.25rem"
  button-story:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.wine-900}"
    rounded: "{rounded.story}"
    padding: "0.8rem 1rem"
    width: "15rem"
    height: "4.8rem"
  button-story-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.wine-700}"
  button-chip:
    backgroundColor: "transparent"
    textColor: "{colors.wine-700}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 0.9rem"
    height: "2.75rem"
  button-chip-active:
    backgroundColor: "{colors.wine-700}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
  button-miss-you:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.wine-900}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.3rem"
    height: "3.25rem"
  polaroid:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.75rem 1.4rem"
  letter-paper:
    backgroundColor: "{colors.paper}"
    textColor: "#3c272e"
    rounded: "{rounded.none}"
    padding: "clamp(2rem, 7vw, 5.5rem)"
    width: "min(100%, 780px)"
  sticky-note:
    backgroundColor: "{colors.sticky-butter}"
    textColor: "{colors.wine-900}"
    rounded: "{rounded.none}"
    padding: "3rem 1.7rem 1.5rem"
  music-control:
    backgroundColor: "rgba(24, 11, 17, 0.92)"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    height: "3.4rem"
---

# Design System: Adarsh × Uma

## Overview

**Creative North Star: "After-Hours Memory Cinema"**

This system is a private fifth-anniversary gift that behaves like a late-night screening room, not a greeting-card template. Midnight wine fields open the story; cream and paper hold tactile photographs; blush and champagne gold mark affection, cast credits, and still-choosing-you promises. The visitor travels through five film frames of tenderness and chaos before arriving at Adarsh’s closing vow.

Density is cinematic and sectional: each chapter owns one emotional job, with generous vertical rhythm and few competing surfaces. Atmosphere comes from grain, soft film light, perforations, slight photo rotations, and handwritten asides—not from card grids, pill clusters, or floating promo badges. Motion is deliberate cinema easing, with a full reduced-motion collapse so the story remains readable without animation or sound.

Confirmed visual refusals: generic anniversary card stacks, autoplaying audio, location-permission gimmicks, and template romance chrome that could belong to any couple after the names are removed.

**Key Characteristics:**
- Wine-to-cream cinema contrast with blush dusk and aged-champagne accents
- Display serif for titles; grotesque for UI; handwriting only for marginalia
- Tactile photographs: paper mounts, soft depth, gentle rotation
- Film perforations and grain as recurring atmosphere, not decoration packs
- Mobile-first single-route scroll with one intimate envelope gate

## Colors

The palette is midnight wine cinema warmed by blush dusk and champagne gold, never a flat purple gradient or generic cream-and-terracotta greeting look.

### Primary
- **Midnight Wine 950** (`wine-950`): Deepest cinema black-wine for intro, distance night sky, and finale.
- **Midnight Wine 900** (`wine-900`): Hero field and toast/surfaces that need slightly lifted night.
- **Cellar Wine 700** (`wine-700`): Primary interactive fill on cream (chips, tracks, letter accents) and letter-section ground.
- **Rose Wine 500** (`wine-500`): Sent chat bubbles and softer wine glow.

### Secondary
- **Blush Dusk** (`blush`): Soft affection accent—second hero line, hearts, Miss You fill, finale warmth.
- **Aged Champagne** (`gold`): Credits, dates, couple lockup, starfield sparks, ratings—used sparingly as spotlight metal.
- **Peach Emulsion** (`peach`): Ambient hero glow only; do not promote to primary UI fill.

### Neutral
- **Projection Cream** (`cream`): Light story ground after the intro; envelope/text on dark.
- **Cream Deep** (`cream-deep`): Reserved companion to cream for warmer paper shifts.
- **Paper White** (`paper`): Polaroid mounts, letter body, love list ground.
- **Ink** (`ink`): Default readable text on light paper.
- **Charcoal Gate** (`charcoal`): Movie-poster black field.
- **Gallery Dusk** (`gallery-dusk`): Memory gallery chapter ground between cream chapters.

### Named Rules
**The Cinema Night Rule.** Dark wine grounds the gate, hero, distance, movie, and finale. Cream and paper are for daylight chapters of memory—never invert that rhythm casually.

**The Champagne Spotlight Rule.** Gold is credits and promise metal (≤ small accents per viewport). It is not a large fill color.

## Typography

**Display Font:** Gloock (with Georgia)
**Body Font:** Hanken Grotesk (with Segoe UI)
**Handwriting Font:** Kalam (with cursive)

**Character:** Gloock carries the film-title romance; Hanken keeps interface and body talk clear on a phone; Kalam appears only as scribbled asides and signatures so handwriting never becomes the main text voice.

### Hierarchy
- **Display** (400, `clamp(2.7rem, 7vw, 5.9rem)`–hero larger, ~0.9–0.98 lh): Section titles, intro lockup, movie title, finale vows.
- **Headline** (400, `clamp(2rem, 4vw, 3.8rem)`, lh 1): Timeline year titles and dialog titles.
- **Title** (400, `clamp(1.25rem, 2.6vw, 2rem)`): Love lines, sticky titles, future cards.
- **Body** (400, 1rem / 1.6): Narrative paragraphs; keep roughly 46–62ch where constrained.
- **Label** (700–800, ~0.75rem, 0.16–0.28em, uppercase): Dates, meta, movie credits, frame indexes.
- **Handwriting** (400, ~1.08–1.35rem): Funny captions, sticky joke bodies, finale signature only.

### Named Rules
**The Marginalia Rule.** Kalam is for scribbles and signatures. Body narrative stays in Hanken; titles stay in Gloock.

**The Brand-In-Type Rule.** Couple names and the five-year promise must read at display scale in cinema moments—never only as nav or eyebrow chrome.

## Layout

Spatial model is a single long scroll of full-bleed chapters. Page gutters use `clamp(1.25rem, 4vw, 5rem)`; section padding uses `clamp(6rem, 13vw, 11rem)`. Content columns commonly cap near 900–1100px; letter and chat sit tighter (~540–780px).

Breakpoints observed in the build: mobile stack below 700px; two-column memory/timeline/jokes/future from 700px; denser three/four-column and alternating timeline from 1024px. Mobile collapses hero indent, hides oversized frame numbers, stacks the distance map vertically, and compactifies floating controls.

**The One Job Per Frame Rule.** Each section carries one headline, one short note, and one interaction or artifact set—no dashboard strips in the first viewport or chapter headers.

## Elevation & Depth

Depth is hybrid: tonal chapter fields first, then soft photographic lift. Polaroids, timeline photos, sticky notes, letter paper, and dialogs use large soft wine-tinted shadows (roughly `0 22px 45px` to `0 40px 100px` at low opacity). Fixed music and action chips use darker glass (`backdrop-filter` + soft black shadow). Hard offset neobrutal shadows are not part of this world.

Film atmosphere substitutes for card chrome: SVG grain overlays, radial film light, dashed gold connection lines, and perforation strips.

### Shadow Vocabulary
- **Photo lift** (`0 22px 44px rgba(72, 26, 41, 0.2)`): Polaroids at rest; deepen on hover.
- **Paper stack** (`0 24px 50px rgba(71, 42, 13, 0.2)` / `0 35px 80px rgba(24, 6, 13, 0.38)`): Sticky notes and letter.
- **Cinema glass** (`0 12px 35px rgba(0, 0, 0, 0.25)`): Music control and floating actions.
- **Dialog night** (`0 40px 100px rgba(0, 0, 0, 0.4)`): Memory dialog over dimmed backdrop.

### Named Rules
**The Tactile Photo Rule.** Memory images live on paper mounts with slight rotation and soft lift. Do not put memories in rounded media cards or inset side panels.

## Shapes

Form language is mostly square paper and circular film devices. Polaroids, letter paper, fact rows, and number cells are square-cornered. Pills (`99px`) are reserved for interactive chips, envelope CTA, Miss You, and floating controls. Story CTA uses a small story radius (`0.35rem`). Circles mark timeline years, envelope seal, dialog close, and orbit rings. Chat uses soft device radius (`1.5rem`) as a diegetic phone window, not a generic card.

Borders are hairline cream-on-wine or wine-on-cream at ~0.18–0.34 alpha—never thick decorative frames except the movie poster’s champagne rule.

## Components

### Buttons
- **Envelope (primary gate):** Pill glass on cinema night; cream circular seal; appears after staggered intro copy.
- **Story CTA:** Cream fill, wine text, subtle fold gradient, soft shadow; hover lifts and skews slightly (`translateY(-4px) rotate(-0.5deg)`).
- **Chips / fact choices:** Transparent wine outline pills; active/hover fills wine-700 with cream text.
- **Miss You:** Solid blush pill on distance night; scales on hover.
- **Ghost skip / letter replay:** Text or outline only; never compete with the envelope.

### Cards / Containers
- **Polaroid:** Interaction container—square paper, 4:5 image, caption stack, hover un-rotates and lifts. Allowed because it is the memory control, not decorative chrome.
- **Sticky note:** Square joke sheet with tape strip and handwriting body; slight rotation per index.
- **Letter paper:** Ruled paper on wine stage, blush tape, typewriter caret; slight counter-rotation.
- **Future / fact blocks:** Flat bordered panels or hairline dividers—no drop shadows required.

### Navigation
No global marketing nav. Fixed bottom music control (right) and compact floating actions (left) use dark glass pills. Focus rings are 2px gold with 4px offset on buttons and inputs.

### Signature Components
- **Cinema intro:** Full-viewport wine gradient, grain, dual gold orbits, staggered lines, display title, gold uppercase names, one envelope action.
- **Five-frame timeline:** Vertical wine→blush gradient spine, circular year markers, rotated paper stills, Gloock titles, Kalam scribbles, oversized frame numbers on larger screens.
- **Film perforations:** Repeating cream dash strips on hero edges—keep as chapter punctuation, not wallpaper on every section.
- **Memory dialog:** Night-blurred backdrop, paper panel, split image/copy from 700px up.
- **Distance chat window:** Diegetic frosted phone with staggered message reveal; local Miss You only.

## Do's and Don'ts

### Do:
- **Do** open with a dark cinema title card, staggered intimacy copy, and a single envelope action.
- **Do** alternate wine night chapters with cream/paper daylight chapters so the film breathes.
- **Do** mount photographs on paper with gentle rotation, soft lift, and handwritten marginalia.
- **Do** keep gold for credits, dates, and promise accents; keep blush for affection signals.
- **Do** honor `prefers-reduced-motion` by removing reveals, chat delays, and ornamental loops while leaving content intact.
- **Do** treat audio as user-initiated only.

### Don't:
- **Don't** rebuild this as a stack of generic anniversary cards, stat strips, or promo badges over the hero.
- **Don't** use handwriting as the primary reading face for long letter or body copy.
- **Don't** fill large regions with gold or peach; they are atmosphere and spotlight, not grounds.
- **Don't** autoplay music or request location permissions.
- **Don't** present placeholder memories as factual once real couple media exists—placeholders remain clearly marked until replaced.
