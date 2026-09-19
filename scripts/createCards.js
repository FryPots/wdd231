const fetchCourses = async () => {
    try {
        const response = await fetch("./data/courses.json");
        const data = await response.json();

        return data.courses;

    } catch (error) {
        console.error("Error fetching courses:", error);
    }
};

const createCard = (course, code) => {
    const card = document.createElement("div");
    const cardContent = document.createElement("p");

    cardContent.textContent = `${course} ${code}`;
    card.classList.add("courseCard");
    card.classList.add(course);

    card.appendChild(cardContent);

    return card;
};

const createCards = async (cardCollection) => {
    const container = document.querySelector(".courses-container");
    try {
        const courses = await fetchCourses();
        
        container.innerHTML = "";
        courses.forEach(course => {
            if (!cardCollection || cardCollection == course.class){
                const card = createCard(course.class, course.code);
                container.appendChild(card);
            }
        });

    } catch (error) {
        console.error("Error creating cards:", error);
    }
};

createCards();

document.getElementById("all-button").addEventListener("click", () => {
    createCards();
});

document.getElementById("cse-button").addEventListener("click", () => {
    createCards("CSE");
});

document.getElementById("wdd-button").addEventListener("click", () => {
    createCards("WDD");
});