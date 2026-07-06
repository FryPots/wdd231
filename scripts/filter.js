myClasses = 
{
    CSE: [
        { code: "110", credits: 2},
        { code: "111", credits: 2},
        { code: "210", credits: 2}],
    WDD: [
        { code: "130", credits: 2},
        { code: "131", credits: 2},
        { code: "231", credits: 2}]
}

const allButton = document.getElementById("filter-all");
const cseButton = document.getElementById("filter-cse");
const wddButton = document.getElementById("filter-wdd");
const courseContainer = document.querySelector(".course-container");

function displayCourses(courses) {
    courseContainer.innerHTML = "";
    let totalCredits = 0;

    courses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.textContent = `Course Code: ${course.code}`;
        courseContainer.appendChild(courseElement);
        totalCredits += course.credits;
    });

    const totalCreditsElement = document.createElement("p");
    totalCreditsElement.textContent = `The total credits for the courses above are: ${totalCredits}`;
    courseContainer.appendChild(totalCreditsElement);
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


displayCourses([...myClasses.CSE, ...myClasses.WDD]);