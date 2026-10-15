const form = document.getElementById("application-form");

form.addEventListener("submit", (event) => {
    const positions = document.getElementsByName(
        'position[]'
    );

    const isSelected = [...positions].some(
        (position) => position.checked
    );

    if (!isSelected) {
        event.preventDefault();
        alert("Please select at least one position.");
    }
});