const burger = () => {
    document.getElementById("burger-button").classList.toggle("burger-active");
    document.getElementById("nav-list").classList.toggle("burger-active");
};

document.getElementById("burger-button").addEventListener("click", burger);