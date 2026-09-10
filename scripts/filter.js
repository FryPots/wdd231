const courses = [
    { name: 'CSE 110', category: 'CSE' },
    { name: 'CSE 111', category: 'CSE' },
    { name: 'CSE 210', category: 'CSE' },
    { name: 'WDD 130', category: 'WDD' },
    { name: 'WDD 131', category: 'WDD' },
];

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