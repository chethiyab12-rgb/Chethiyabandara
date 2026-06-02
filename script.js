// ===== TYPING EFFECT =====
const text = "Find me on ";
let i = 0;

function typing() {
    const el = document.querySelector(".typing");
    if (!el) return;

    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}
typing();


// ===== ACCORDION =====
document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});


// ===== SCROLL REVEAL (SMOOTH) =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});


// ===== MOUSE PARALLAX (APPLE STYLE) =====
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;

    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.transform = `translate(${x}px, ${y}px)`;
    }
});