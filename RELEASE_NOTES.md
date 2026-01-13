# Release Notes - Genesis Project

## [2026-01-07] - Tutorial V3: Complete Content Overhaul

### Changed
- **Redesigned Tutorial Page**: Rebuilt `tutorial.html` to perfectly match the "Genesis Tutorial.pdf" content.
- **New Tab Structure**: Organized content into 4 logical tabs:
  1. **Getting Started**: Registration, 2FA, MT5 Linking, Deposit.
  2. **Investing & Trading**: Copy Trading, Manual Trading, Positions.
  3. **Signal Provider**: Standard & Insurance Signal creation with detailed parameter guides.
  4. **Wallet & Chat**: Analysis of Genesis Wallet features and Community tools.
- **Content Integration**: Extracted full text from the PDF and formatted it into clean, readable steps.
- **Visuals**: Mapped existing screenshots to the new 12-section flow for a seamless experience.

## [2026-01-06] - Carousel Animation Improvements

### Changed
- Improved `FlipCarousel` animation in `tutorial.js` (now `tutorial_v2.js`) to support directional sliding (left/right) combined with 3D flip.
- Updated `tutorial.css` (now `tutorial_v2.css`) to handle overflow for sliding items.
- Renamed `tutorial.js` to `tutorial_v2.js` and `tutorial.css` to `tutorial_v2.css` to resolve file synchronization issues.
- Updated `tutorial.html` to reference the new v2 files.

## [2026-01-06] - GSAP Flip Carousel Implementation

### Added
- Implemented Mobile Menu for `tutorial.html` and `index.html`.
  - Added `mobile-menu.js` to handle menu toggle logic.
  - Added mobile menu overlay with responsive styling.
- Implemented GSAP Flip Carousel for the "Registration" section in `tutorial.html`.
- Updated `tutorial.js` with `FlipCarousel` class featuring:
  - Smooth 3D flip transitions using `onEnter` and `onLeave` callbacks.
  - Responsive visibility logic (2 items on desktop, 1 on mobile).
  - Touch/swipe support.
- Updated `tutorial.css` with:
  - `perspective` property for 3D effects.
  - Carousel layout styles.

## [2026-01-05] - Tutorial Page Implementation

### Added
- Created `tutorial.html` - A comprehensive step-by-step tutorial page with:
  - Three tabs: Setup & Security, Trading & Signals, Account & Wallet
  - iPhone-styled step cards with screenshots
  - GSAP ScrollTrigger animations for smooth card reveals
  - Responsive design for mobile, tablet, and desktop
- Created `tutorial.css` with:
  - Tab navigation styling matching Genesis design system
  - iPhone frame mockup styles (Dynamic Island, rounded corners, home indicator)
  - Step card grid layout with responsive breakpoints
  - Animation states for GSAP integration
- Created `tutorial.js` with:
  - Tab switching logic
  - GSAP ScrollTrigger setup for card animations
  - Keyboard navigation support (arrow keys)
  - Image lazy loading for performance
  - iPhone frame hover effects
- Extracted 40 tutorial screenshots from source HTML files:
  - 14 images for Setup & Security
  - 13 images for Trading & Signals  
  - 13 images for Account & Wallet
- Added "Tutorial" link to main navigation in `index.html`

### Changed
- Updated navigation in `index.html` to include Tutorial link
- Updated `STRUCTURE.md` to reflect new file architecture

---

## [2026-01-04] - Initial Project Setup

### Added
- Initial project setup.
- Imported landing page from `generated-page.html` to `index.html`.
- Created `STRUCTURE.md` for project architecture tracking.
- Created `RELEASE_NOTES.md` for change logging.

### Changed
- Refactored `index.html` to extract inline CSS into `styles.css`.
- Refactored `index.html` to extract inline JavaScript into `scripts.js`.

### Pushed
- Pushed the project to GitHub repository: `https://github.com/hellojason2/Genisis`.
