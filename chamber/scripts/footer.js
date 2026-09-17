const currentYearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastmodified");

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;