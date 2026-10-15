import { catalogue } from "../data/catalogue.mjs";

function retrieve() {
    return catalogue;
}

function createCard(item) {
    const card = document.createElement("li");
    card.classList.add("cover-card");

    card.innerHTML = `
        <a href="#">
            <figure>
                <img src="./images/${item.imageUrl}" alt="${item.name} cover">
                <figcaption>${item.name}</figcaption>
            </figure>
        </a>
    `;

    return card;
}

function appendCards(parent, data) {
    data.forEach(item => {
        const newCard = createCard(item);
        parent.appendChild(newCard);
    });
}

const data = retrieve();

const latest = document.getElementById("latest");

const newest = [...data]
    .sort((a, b) => b.dateAdded - a.dateAdded)
    .slice(0, 6);

appendCards(latest, newest);

const rated = document.getElementById("rating");

const topRated = [...data]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

appendCards(rated, topRated);