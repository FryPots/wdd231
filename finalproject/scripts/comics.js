

import { catalogue } from "../data/catalogue.mjs";


function retrieve() {
    return catalogue;
}



function createCard(item) {
    const card = document.createElement("li");
    card.classList.add("cover-card");

    card.innerHTML = `
        <a href="#" class="card-trigger">
            <figure>
                <img
                    src="./images/${item.imageUrl}"
                    alt="${item.name} cover"
                    loading="lazy"
                >
                <figcaption>${item.name}</figcaption>
            </figure>
        </a>
    `;

    const trigger = card.querySelector(".card-trigger");

    trigger.addEventListener("click", (event) => {
        event.preventDefault();
        openModal(item);
    });

    return card;
}



function appendCards(parent, data) {
    if (!parent) return;

    const fragment = document.createDocumentFragment();

    data.forEach(item => {
        fragment.appendChild(createCard(item));
    });

    parent.appendChild(fragment);
}


function createModal() {
    const dialog = document.createElement("dialog");

    dialog.id = "comic-modal";
    dialog.classList.add("comic-modal");

    dialog.innerHTML = `
        <button
            class="modal-close"
            type="button"
            aria-label="Close dialog"
        >
            &times;
        </button>

        <div class="modal-content">
            <img class="modal-cover" src="" alt="">

            <div class="modal-info">
                <h2 class="modal-title"></h2>
                <p class="modal-description"></p>
                <p class="modal-rating"></p>
                <p class="modal-date"></p>
            </div>
        </div>
    `;

    document.body.appendChild(dialog);

    dialog.querySelector(".modal-close").addEventListener("click", () => {
        dialog.close();
    });

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    return dialog;
}



const modal = createModal();

function openModal(item) {
    const cover = modal.querySelector(".modal-cover");

    cover.src = `./images/${item.imageUrl}`;
    cover.alt = `${item.name} cover`;

    modal.querySelector(".modal-title").textContent = item.name;
    modal.querySelector(".modal-description").textContent =
        item.description;

    modal.querySelector(".modal-rating").textContent =
        `Rating: ${item.rating}/5`;

    modal.querySelector(".modal-date").textContent =
        `Added: ${item.dateAdded}`;

    modal.showModal();
}


function getLatestItems(data, limit = 6) {
    return [...data]
        .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded))
        .slice(0, limit);
}

function getTopRatedItems(data, limit = 5) {
    return [...data]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}


function initializeCatalogue() {
    const data = retrieve();

    const latest = document.getElementById("latest");
    appendCards(latest, getLatestItems(data));

    const rated = document.getElementById("rating");
    appendCards(rated, getTopRatedItems(data));
}

initializeCatalogue();