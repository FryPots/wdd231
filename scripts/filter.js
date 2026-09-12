

const allButton = document.getElementById('all-button');
const cseButton = document.getElementById('cse-button');
const wddButton = document.getElementById('wdd-button');
const coursesContainer = document.querySelector('.courses-container');


function newCourseElement(content) {
    let course = document.createElement('div');
    course.classList.add('course');
    course.textContent = content;
    return course;
}

filterCourses('All');