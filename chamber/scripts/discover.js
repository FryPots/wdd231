
import { attractions } from "../data/attractions.mjs";

const container = document.querySelector("#attractions");

// Create one reusable dialogue
const dialog = document.createElement("dialog");
dialog.id = "attraction-dialog";

dialog.innerHTML = `
  <div class="dialog-content">
    <button type="button" class="dialog-close"
      aria-label="Close dialogue">&times;</button>
    <h2 id="dialog-title"></h2>
    <figure>
      <img id="dialog-image" src="" alt="">
    </figure>
    <p id="dialog-description"></p>
  </div>
`;

document.body.appendChild(dialog);

const dialogTitle = dialog.querySelector("#dialog-title");
const dialogImage = dialog.querySelector("#dialog-image");
const dialogDescription = dialog.querySelector("#dialog-description");
const closeButton = dialog.querySelector(".dialog-close");

// Close button
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Close when clicking the backdrop
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

// Generate the attraction cards
attractions.forEach((attraction, index) => {
  const card = document.createElement("article");
  card.classList.add("attraction-card", `area-${index + 1}`);

  const title = document.createElement("h2");
  title.textContent = attraction.name;

  const figure = document.createElement("figure");
  const image = document.createElement("img");

  image.src = `images/discover/${attraction.image}`;
  image.alt = attraction.name;
  image.width = 300;
  image.height = 200;
  image.loading = "lazy";

  figure.appendChild(image);

  const address = document.createElement("address");
  address.textContent = attraction.address;

  const description = document.createElement("p");
  description.textContent = attraction.description;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Learn More";

  button.addEventListener("click", () => {
    dialogTitle.textContent = attraction.name;

    dialogImage.src = `images/discover/${attraction.image}`;
    dialogImage.alt = attraction.name;

    dialogDescription.textContent = attraction.description;

    dialog.showModal();
  });

  card.append(title, figure, address, description, button);
  container.appendChild(card);
});
