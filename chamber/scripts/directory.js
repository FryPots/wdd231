const memberships = {
    1:"member",
    2:"silver",
    3:"gold",
};

async function fetchMembers() {
    try {
        const response = await fetch("data/members.json");

        if (response.ok) {
            const data = await response.json();
            return data.companies;
        }

    } catch (error) {
        console.log(error);
    }
}


const createCard = (profile) => {
    const listElement = document.createElement("li");
    const wrapper = document.createElement("article");

    const heading = document.createElement("h2");
    heading.textContent = profile.name;
    wrapper.appendChild(heading);

    const createIcon = (image) => {
        const imgElement = document.createElement("img");

        imgElement.loading = "lazy";
        imgElement.classList.add("icon");
        imgElement.src = `images/members/${image}`;
        imgElement.alt = profile.name;

        return imgElement;
    };
    const img = createIcon(profile.image);
    wrapper.appendChild(img);

        const createP = (key, value) => {
            const para = document.createElement("p");
            para.name = key;
            para.textContent = value;
            return para;
        }
    Object.entries(profile).forEach (([key, value]) => {
        if (key != "image" && key != "name"){
            if (key != "membership") {
                const paragraph = createP(key,value);
                wrapper.appendChild(paragraph);
            }
            else {
                wrapper.classList.add(memberships[value]);
            }
        }
    });

    listElement.appendChild(wrapper);

    return listElement;
};


async function createCards() {
    const ulElement = document.getElementsByClassName("members-list")[0];

    try {
        const members = await fetchMembers();

        members.forEach(profile => {
            const card = createCard(profile);
            ulElement.appendChild(card);
        });

    } catch (error) {
        console.log(error);
    }
}

createCards();

const container = document.getElementsByClassName("members-list")[0];

document.getElementById("grid-button").addEventListener("click", () => {
    container.classList = "members-list";
    document.getElementById("list-button").classList = "";
    document.getElementById("grid-button").classList = "active";
})

document.getElementById("list-button").addEventListener("click", () => {
    container.classList = "members-list list-view";
    document.getElementById("list-button").classList = "active";
    document.getElementById("grid-button").classList = "";
})