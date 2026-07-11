const currentYearSpan = document.querySelector('#currentyear');
const lastModifiedSpan = document.querySelector('#lastmodified');

const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

const lastModified = new Date(document.lastModified);
lastModifiedSpan.textContent = lastModified.toLocaleString();