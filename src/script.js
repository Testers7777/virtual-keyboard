const textarea = document.querySelector("textarea");
const ranges = document.querySelectorAll(".range");

ranges.forEach((range) => {
    range.addEventListener('click', (event) => {
        if (!event.target.className) {
            const letter = event.target.textContent;
            textarea.value += letter;
        }
    });
});