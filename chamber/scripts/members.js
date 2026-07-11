async function getData() {
  const response = await fetch("data/members.json");
  return await response.json();
}

async function init() {
  const companies = await getData();
  displayCompanies(companies);
}

const displayCompanies = (companies) => {
  const companiesContainer = document.querySelector("#companies-container");

  companies.forEach((company) => {
    const card = document.createElement("section");
    card.classList.add("business-card");

    const name = document.createElement("h2");
    const image = document.createElement("img");

    const address = document.createElement("p");
    const addressLabel = document.createElement("span");

    const phone = document.createElement("p");
    const phoneLabel = document.createElement("span");

    const websiteContainer = document.createElement("p");
    const websiteLabel = document.createElement("span");
    const website = document.createElement("a");

    name.textContent = company.name;

    image.src = `images/${company.image}`;
    image.alt = `${company.name} logo`;
    image.loading = "lazy";

    addressLabel.textContent = "Address: ";
    address.append(addressLabel, company.address);

    phoneLabel.textContent = "Phone: ";
    phone.append(phoneLabel, company.phone);

    websiteLabel.textContent = "URL: ";

    website.href = company.website;
    website.textContent = company.website;
    website.target = "_blank";
    website.rel = "noopener noreferrer";

    websiteContainer.append(websiteLabel, website);

    card.append(name, image, address, phone, websiteContainer);

    companiesContainer.appendChild(card);
  });
};

init();