const params = new URLSearchParams(window.location.search);

const firstName = params.get("first-name");
const lastName = params.get("last-name");
const email = params.get("email");
const mobilePhone = params.get("mobile-phone");
const organization = params.get("organization");
const timestamp = params.get("timestamp");

const information = document.querySelector("#form-information");

information.innerHTML = `
    <h2>Application Information</h2>

    <dl>
        <dt>First Name</dt>
        <dd>${firstName}</dd>

        <dt>Last Name</dt>
        <dd>${lastName}</dd>

        <dt>Email</dt>
        <dd>${email}</dd>

        <dt>Mobile Phone</dt>
        <dd>${mobilePhone}</dd>

        <dt>Business / Organization</dt>
        <dd>${organization}</dd>

        <dt>Application Date</dt>
        <dd>${timestamp}</dd>
    </dl>
`;