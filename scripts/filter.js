const myClasses = 
{
    "CSE": [
        { code: "110", credits: 2},
        { code: "111", credits: 2},
        { code: "210", credits: 2}],
    "WDD": [
        { code: "130", credits: 2},
        { code: "131", credits: 2},
        { code: "231", credits: 2}]
}

const allButton = document.getElementById("filter-all");
const cseButton = document.getElementById("filter-cse");
const wddButton = document.getElementById("filter-wdd");
const courseContainer = document.querySelector(".course-container");

const courseList = Object.keys(myClasses);

function displayCourses(courses) {
    courseContainer.innerHTML = "";
    let credits = 0;
    courses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.textContent = `${course.code}`;
        courseContainer.appendChild(courseElement);
        credits += course.credits;
    });
    const creditsElement = document.createElement("div");
    creditsElement.classList.add("credits");
    creditsElement.textContent = `Total Credits: ${credits}`;
    courseContainer.appendChild(creditsElement);
}

allButton.addEventListener("click", () => {
    const allCourses = [...myClasses.CSE, ...myClasses.WDD];
    displayCourses(allCourses);
});

cseButton.addEventListener("click", () => {
    displayCourses(myClasses.CSE);
});

wddButton.addEventListener("click", () => {
    displayCourses(myClasses.WDD);
});


const allCourses = [...myClasses.CSE, ...myClasses.WDD];
displayCourses(allCourses);