document.addEventListener("DOMContentLoaded", () => {
    // Jahreszahl automatisch aktualisieren
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Escape-Taste bringt den Nutzer auf Videoseiten zurück zur Landing Page.
    const isVideoPage = document.body.classList.contains("video-page");

    if (isVideoPage) {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                window.location.href = "../index.html";
            }
        });
    }
});
