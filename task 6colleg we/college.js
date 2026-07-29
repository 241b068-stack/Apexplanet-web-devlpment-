// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#062b66";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "#0b3d91";
        header.style.boxShadow = "none";
    }
});

// Hero button animation
const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.08)";
});

btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
});

// Contact form
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();
});

// Fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);
});