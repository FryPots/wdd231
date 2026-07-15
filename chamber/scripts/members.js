async function getData() {
  const response = await fetch("data/members.json");
  return await response.json();
}

async function init() {
  const companies = await getData();
  displayCompanies(companies);
}

const memberships = 
{
  1 : "Member",
  2 : "Silver",
  3 : "Gold"
}

const displayCompanies = (companies) => {
  const companiesContainer = document.querySelector("#companies-container");

  companies.forEach((company) => {
    const card = document.createElement("section");
    card.classList.add("business-card");

    const name = document.createElement("h2");
    const memberTag = document.createElement("p");
    const image = document.createElement("img");

    const address = document.createElement("p");
    const addressLabel = document.createElement("span");

    const phone = document.createElement("p");
    const phoneLabel = document.createElement("span");

    const websiteContainer = document.createElement("p");
    const websiteLabel = document.createElement("span");
    const website = document.createElement("a");

    name.textContent = company.name;
    memberTag.textContent = memberships[company.membership]
    memberTag.classList.add("member-tag");

    image.loading = "lazy";
    image.src = `images/${company.image}`;
    image.alt = `${company.name} logo`;

    image.onerror = () => {
      image.onerror = null;
      image.src = "images/wireframe.png";
    };

    addressLabel.textContent = "Address: ";
    address.append(addressLabel, company.address);
    address.classList.add("information", "company-address");

    phoneLabel.textContent = "Phone: ";
    phone.append(phoneLabel, company.phone);
    phone.classList.add("information", "company-phone")

    websiteLabel.textContent = "URL: ";

    website.href = company.website;
    website.textContent = company.website;
    website.target = "_blank";
    website.rel = "noopener noreferrer";
    websiteContainer.classList.add("information", "websiteURL")

    websiteContainer.append(websiteLabel, website);

    card.append(name, memberTag, image, address, phone, websiteContainer);

    companiesContainer.appendChild(card);
  });
};

init();