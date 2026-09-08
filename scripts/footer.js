let currentYearSpan = document.getElementById("currentyear");
let lastModifiedSpan = document.getElementById("lastmodified");

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;