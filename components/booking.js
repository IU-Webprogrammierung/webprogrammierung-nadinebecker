document.addEventListener("DOMContentLoaded", () => {
    // Den Button mit der ID "open-booking" aus dem DOM holen
    const openBtn = document.getElementById("open-booking");
    // Das Formular mit der ID "booking-form" aus dem DOM holen
    const form = document.getElementById("booking-form");

    // Sicherheitscheck: nur wenn beide Elemente existieren, wird der Code ausgeführt
    if (openBtn && form) {
        openBtn.addEventListener("click", () => {

            // Entfernt die CSS-Klasse "hidden" vom Formular,
            // Fügt die CSS-Klasse "visible" hinzu
            form.classList.remove("hidden");
            form.classList.add("visible");
        });
    }
});
