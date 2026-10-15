

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

    const trigger = card.getElementsByClassName("card-trigger")[0];

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
        Exit
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
    
    
    dialog.getElementsByClassName("modal-close")[0].addEventListener("click", () =>
    {
        dialog.close()
    })

    return dialog;
}



const modal = createModal();

function openModal(item) {
    const cover = modal.getElementsByClassName("modal-cover")[0];

    cover.src = `./images/${item.imageUrl}`;
    cover.alt = `${item.name} cover`;

    modal.getElementsByClassName("modal-title")[0].textContent = item.name;
    modal.getElementsByClassName("modal-description")[0].textContent =
        item.description;

    modal.getElementsByClassName("modal-rating")[0].textContent =
        `Rating: ${item.rating}/5`;

    modal.getElementsByClassName("modal-date")[0].textContent =
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