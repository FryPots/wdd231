const menuButton = document.getElementById("burger-toggle");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");

    if (navMenu.classList.contains("hidden")) {
        menuButton.textContent = "≡";
    } else {
        menuButton.textContent = "☒";
    }
});