document.addEventListener("DOMContentLoaded", () => {
    // ─────────────────────────────────────────────────────────────────────────
    // MOBILE MENU LOGIC
    // ─────────────────────────────────────────────────────────────────────────
    const menuBtn = document.getElementById("mobile-menu-btn");
    const menuOverlay = document.getElementById("mobile-menu-overlay");
    const closeBtn = document.getElementById("mobile-menu-close");

    if (menuBtn && menuOverlay && closeBtn) {
        menuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            menuOverlay.classList.remove("hidden");

            // Force reflow to ensure display:block applies before opacity transition
            void menuOverlay.offsetWidth;

            menuOverlay.classList.remove("opacity-0");
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        });

        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            menuOverlay.classList.add("opacity-0");

            setTimeout(() => {
                menuOverlay.classList.add("hidden");
                document.body.style.overflow = ""; // Restore scrolling
            }, 300); // Match transition duration
        });
    }
});
