
// Contact for input / validations
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const statusDiv = document.getElementById("statusMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();   // Stop page refresh

        const name = form.elements["from_name"].value.trim();
        const email = form.elements["from_email"].value.trim();
        const message = form.elements["message"].value.trim();

        // Validate the field separately
        if (!name) {
            statusDiv.textContent = "Please enter your name.";
            return;
        }

        if (!email) {
            statusDiv.textContent = "Please enter your email.";
            return;
        }

        if (!message) {
            statusDiv.textContent = "Please enter a message.";
            return;
        }
        statusDiv.textContent = "Sending...";

        // simulate async send
        setTimeout(() => {
            statusDiv.textContent = "Message sent!";
            form.reset(); // Optional: clear form after send
        }, 1500);
    });
});


// slick on the slides to move 
function moveToSlide(index) {
    const carousel = document.getElementById("carousel-inner");
    if (carousel) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }
}

// for each of the slides to click on, this move the dots accordingly.
const dots = document.querySelectorAll('.my-portfolio-slider-dots');
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => moveToSlide(idx));
});

// Hamburger Nav
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const lines = hamburger.querySelectorAll('span');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    lines[0].classList.toggle('rotate-45');
    lines[0].classList.toggle('translate-y-2');

    lines[1].classList.toggle('opacity-0');

    lines[2].classList.toggle('-rotate-45');
    lines[2].classList.toggle('-translate-y-1');
});