// ==============================
// HAMBURGER MENU
// ==============================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// ==============================
// TYPING ANIMATION
// ==============================

const textArray = ["Web Developer", "Freelancer", "UI Designer"];
let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (!typingElement) return;

    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % textArray.length;
            typeEffect();
        }, 1000);
    }
}

typeEffect();

window.dispatchEvent(new Event('scroll'));

// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-wrapper");
    loader.style.display = "none";
});



// ================= APPLE NAVBAR SCROLL EFFECT =================
let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Add background when scrolled
    if (currentScroll > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Hide when scrolling down
    if (currentScroll > lastScrollY && currentScroll > 100) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }

    lastScrollY = currentScroll;
});