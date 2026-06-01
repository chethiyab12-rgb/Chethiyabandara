// Typing effect
const text = "Find me on";
let i = 0;

function typing() {
    const el = document.querySelector(".typing");
    if (!el) return;

    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
typing();

// Accordion
document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        panel.style.maxHeight =
            panel.style.maxHeight ? null : panel.scrollHeight + "px";
    });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
