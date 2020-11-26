//! Play Sound on Keypress
const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
};

//! Remove Key Animation
function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

//! List of all keys
window.addEventListener("keydown", playSound);

//! Remove Animation for Each Key
document
    .querySelectorAll(".key")
    .forEach(key => key.addEventListener("transitionend", removeTransition));
