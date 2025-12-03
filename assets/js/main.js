// Contact for input / validations
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email using Regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate Message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
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