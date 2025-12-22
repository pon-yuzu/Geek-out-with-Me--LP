# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for "Geek out with Me!" - an English learning program through discussing favorite topics (推し語りで学ぶ英語). The project presents three design pattern variants (A/B/C) for client selection.

## Architecture

**Pattern Selection System:**
- `index.html` - Pattern selector page (delete on final delivery)
- `pattern-a.html` → `styles-a.css` - Layered & Dimensional (deep shadows, rounded shapes)
- `pattern-b.html` → `styles-b.css` - Linear & Sharp (grid layout, sharp edges, high contrast)
- `pattern-c.html` → `styles-c.css` - Dynamic & Rhythmic (waves, diagonal layouts, bold colors)

**Shared Resources:**
- `main.js` - Common JavaScript (currently placeholder)
- All HTML files share identical content structure; only CSS differs

## Design Requirements

- **Mandatory:** Orange (`#FF6B35`) as primary color across all patterns
- **Prohibited:** Emojis in any content
- **CTA visibility:** Never use white text with white shadow; ensure readable contrast
- **Layout consistency:** All sections use full-width backgrounds with max-width 1000px content containers
- **Heading uniformity:** `.section-label`, `.section-title`, and underline bars must be styled consistently across all sections

## CSS Structure

Each pattern CSS follows this section order:
1. CSS Variables (`:root`)
2. Base Reset
3. Section Common / Unified Heading Styles
4. Hero Section
5. Problem Section
6. Solution Section
7. Packages Section
8. Target Section
9. Benefits Section
10. CTA Section
11. Footer
12. Responsive Breakpoints

## Final Delivery

When client selects a pattern:
1. Delete `index.html` and `selector.css`
2. Keep only the chosen `pattern-*.html` and `styles-*.css`
3. Rename to production filenames as needed
