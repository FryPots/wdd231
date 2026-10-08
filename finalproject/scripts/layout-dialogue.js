const dialog = document.querySelector("#wireframe-dialog");
const dialogImage = document.querySelector("#dialog-image");
const closeButton = document.querySelector("#close-dialog");

document.querySelectorAll(".wireframe-image").forEach(image => {
    image.addEventListener("click", () => {
        dialogImage.src = image.src;
        dialogImage.alt = image.alt;
        dialog.showModal();
    });
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", event => {
    if (event.target === dialog) {
        dialog.close();
    }
});