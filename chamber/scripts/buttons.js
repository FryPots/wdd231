const gridButton = document.getElementById("grid-button");
const listButton = document.getElementById("list-button");

const container = document.getElementById("companies-container");

gridButton.addEventListener("click", () => {
    container.classList.remove("list-view");
    container.classList.add("grid-view");

    
    listButton.classList.remove("selected-button");
    gridButton.classList.add("selected-button");
});

listButton.addEventListener("click", () => {
    container.classList.remove("grid-view");
    container.classList.add("list-view");

    listButton.classList.add("selected-button");
    gridButton.classList.remove("selected-button");
});