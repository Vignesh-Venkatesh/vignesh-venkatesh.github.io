
// About Btn
const aboutBtn = document.getElementById("about-btn");

// Skills Btn
const skillsBtn = document.getElementById("skills-btn");

// Projects Btn
const projectsBtn = document.getElementById("projects-btn");

// Resume Btn
const resumeBtn = document.getElementById("resume-btn");

// Socials Btn
const socialsBtn = document.getElementById("socials-btn");


// About Div
const aboutSection = document.getElementById("about-section");

// Skills Div
const skillsSection = document.getElementById("skills-section");

// Projects Div
const projectsSection = document.getElementById("projects-section");

// Final Div
const finalSection = document.getElementById("final-section");

const offset = 120
// Helper function to scroll to an element with offset
function scrollToElement(element, offset) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Scroll to about section
aboutBtn.addEventListener("click", function() {
    scrollToElement(aboutSection, offset);
});

// Scroll to skills section
skillsBtn.addEventListener("click", function() {
    scrollToElement(skillsSection, offset);
});

// Scroll to projects section
projectsBtn.addEventListener("click", function() {
    scrollToElement(projectsSection, offset);
});

// Scroll to resume section
resumeBtn.addEventListener("click", function() {
    scrollToElement(finalSection, offset);
});

// Scroll to socials section
socialsBtn.addEventListener("click", function() {
    scrollToElement(finalSection, offset);
});