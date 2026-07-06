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
const courseList = document.querySelector(".course-list");
const courseContainer = document.querySelector(".course-container");


function displayCourses(courses) {
    let credits = 0;
    courseList.innerHTML = "";

    for (const department in courses) {
        const courseWrapper = document.createElement("li");

        const courseHeader = document.createElement("h2");
        courseHeader.textContent = department;

        const subList = document.createElement("ul");

        courseWrapper.appendChild(courseHeader);
        courseWrapper.appendChild(subList);

        courseList.appendChild(courseWrapper); // <-- Append to the main list

        courses[department].forEach(course => {
            const listItem = document.createElement("li");
            listItem.textContent = `${department} ${course.code}`;
            subList.appendChild(listItem);
            credits += course.credits;
        });
    }

    const totalCredits = document.getElementById("total-credits");
    totalCredits.textContent = `Total Credits: ${credits}`;

    courseContainer.appendChild(totalCredits);
}

displayCourses(myClasses);

allButton.addEventListener("click", () => {
    displayCourses(myClasses);
});

cseButton.addEventListener("click", () => {
    displayCourses({ "CSE": myClasses.CSE });
});

wddButton.addEventListener("click", () => {
    displayCourses({ "WDD": myClasses.WDD });
});