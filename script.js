// ==============================
// AI Career Mentor
// Final Script
// ==============================

// Welcome Message
window.onload = function () {
    console.log("Welcome to AI Career Mentor!");
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Button Hover Animation
const buttons = document.querySelectorAll(".btn, .hero-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// Card Animation
const cards = document.querySelectorAll(".card, .career-card");

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";

});

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});
// ==============================
// Career Quiz Result Logic
// ==============================

function showResult() {

    let score = {
        engineering: 0,
        cyber: 0,
        medical: 0,
        commerce: 0,
        arts: 0
    };

    for (let i = 1; i <= 10; i++) {

        let answer = document.getElementById("q" + i).value;

        if (answer !== "") {
            score[answer]++;
        }

    }

    let bestCareer = "";
    let highest = 0;

    for (let career in score) {

        if (score[career] > highest) {
            highest = score[career];
            bestCareer = career;
        }

    }

    let result = "";

    switch (bestCareer) {

        case "engineering":
            result = "💻 Computer Engineering\n\nYou enjoy solving problems and building technology.\n\nRecommended Careers:\n• Software Engineer\n• Web Developer\n• AI Engineer";
            break;

        case "cyber":
            result = "🔒 Cyber Security\n\nYou like protecting digital systems.\n\nRecommended Careers:\n• Ethical Hacker\n• SOC Analyst\n• Security Analyst";
            break;

        case "medical":
            result = "🩺 Medical\n\nYou enjoy helping people.\n\nRecommended Careers:\n• Doctor\n• Nurse\n• Pharmacist";
            break;

        case "commerce":
            result = "💼 Commerce\n\nYou are interested in finance and business.\n\nRecommended Careers:\n• Chartered Accountant\n• Banker\n• Business Manager";
            break;

        case "arts":
            result = "🎨 Arts & Design\n\nYou are creative and innovative.\n\nRecommended Careers:\n• Graphic Designer\n• UI/UX Designer\n• Animator";
            break;

        default:
            result = "⚠ Please answer all the questions before submitting.";
    }

    document.getElementById("result").style.display = "block";
    document.getElementById("careerResult").innerText = result;

}
// =========================
// Version 2 - Hamburger Menu
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}
