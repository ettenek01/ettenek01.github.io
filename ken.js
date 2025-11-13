// Accordion functionality
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        // Toggle the clicked section
        content.classList.toggle("open");

        // Close others
        buttons.forEach((otherBtn) => {
            if (otherBtn !== btn) {
                otherBtn.nextElementSibling.classList.remove("open");
            }
        });
    });
});