// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));


// TYPING EFFECT
const text = "SONY JASON ALLCCARIMA MUÑICO";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}
    
type();


// SKILL BARS ANIMATION
const bars = document.querySelectorAll(".fill");

const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("java")) {
                entry.target.style.width = "75%";
            }
            if (entry.target.classList.contains("sql")) {
                entry.target.style.width = "25%";
            }
            if (entry.target.classList.contains("html")) {
                entry.target.style.width = "50%";
            }
            if (entry.target.classList.contains("git")) {
                entry.target.style.width = "25%";
            }
            if (entry.target.classList.contains("vsc")) {
                entry.target.style.width = "35%";
            }
            if (entry.target.classList.contains("ingles")) {
                entry.target.style.width = "75%";
            }
            if (entry.target.classList.contains("portugues")) {
                entry.target.style.width = "50%";
            }
        }
    });
}, { threshold: 0.5 });

bars.forEach(bar => barObserver.observe(bar));