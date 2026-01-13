# ══════════════════════════════════════
# PROJECT STRUCTURE MAP
# ══════════════════════════════════════
#
# ENTRY POINTS:
# - index.html (Landing Page)
# - tutorial.html (Tutorial Page)
#
# FLOW:
# index.html (Landing Page)
#   ├── Tailwind CSS (via CDN)
#   ├── Iconify (via CDN)
#   ├── UnicornStudio (via CDN)
#   ├── styles.css (Custom Styles)
#   └── scripts.js (Custom Scripts)
#
# tutorial.html (Tutorial Page)
#   ├── Tailwind CSS (via CDN)
#   ├── Iconify (via CDN)
#   ├── GSAP + ScrollTrigger (via CDN)
#   ├── styles.css (Shared Styles)
#   ├── tutorial_v2.css (Tutorial-specific Styles)
#   ├── scripts.js (Shared Scripts)
#   ├── tutorial_v2.js (Tutorial-specific Scripts)
#   └── images/tutorial/*.jpg (Step Screenshots)
#
# MODULES:
# - index.html      : Main landing page
# - tutorial.html   : Step-by-step tutorial with 3 tabs
# - styles.css      : Custom CSS animations and styles (shared)
# - tutorial_v2.css : iPhone frame mockups, tab navigation styles
# - scripts.js      : Main UI logic and interactions (shared)
# - tutorial_v2.js  : Tab switching, GSAP ScrollTrigger animations
#
# ASSETS:
# - images/tutorial/setup-*.jpg    : Setup & Security screenshots (14)
# - images/tutorial/signals-*.jpg  : Trading & Signals screenshots (13)
# - images/tutorial/wallet-*.jpg   : Account & Wallet screenshots (13)
#
# NAVIGATION:
# index.html ←→ tutorial.html (via nav menu "Tutorial" link)
#
# ══════════════════════════════════════
