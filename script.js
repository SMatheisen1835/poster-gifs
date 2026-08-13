const video = document.getElementById("animation");
const startButton = document.getElementById("startButton");


// Welche Animation gehört zu welchem QR-Code?
const animations = {
    "1": "animation1.mp4",
    "2": "animation2.mp4",
    "3": "animation3.mp4"
};


// Nummer aus der URL auslesen
const params = new URLSearchParams(window.location.search);
const number = params.get("animation") || "1";


// Passende Animation auswählen
const animation = animations[number] || animations["1"];

video.src = animation;


// Versuch, automatisch zu starten
video.play().catch(() => {
    startButton.classList.add("visible");
});


// Falls Autoplay blockiert wurde
startButton.addEventListener("click", () => {
    video.play();

    startButton.classList.remove("visible");
});
