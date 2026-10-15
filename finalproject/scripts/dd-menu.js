
import { dropdown } from "../data/dropdown.mjs";

const ddNav = document.getElementById("dd-nav");
const ddNavButton = ddNav.getElementsByClassName("dd-button")[0];

ddNavButton.addEventListener("click", () => {
    dropdown(ddNav);
});

const ddSoc = document.getElementById("dd-soc");
const ddSocButton = ddSoc.getElementsByClassName("dd-button")[0];

ddSocButton.addEventListener("click", () => {
    dropdown(ddSoc);
});