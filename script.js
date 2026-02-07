// Name Customization
// Change the name here
document.getElementById("nameText").innerText = "For Hemarakshana";

// Autoplay music (some browsers require user interaction)
window.addEventListener("click", function () {
    document.getElementById("bgMusic").play();
}, { once: true });


// Open / Close Letter
function openLetter() {
    document.getElementById("letterPopup").style.display = "block";
}

function closeLetter() {
    document.getElementById("letterPopup").style.display = "none";
}


// Proposal Accepted
function accepted() {
    document.getElementById("resultText").innerText = 
    "You just made me the happiest person! ❤️🌹";
}


// Funny Proposal Interaction (No button runs away)
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
