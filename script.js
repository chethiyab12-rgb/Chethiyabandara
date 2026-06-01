// =========================
// 🔥 TYPING EFFECT (WITH CURSOR)
// =========================

const text = "Network Engineer | Cybersecurity Enthusiast";
let i = 0;

const typingEl = document.querySelector(".typing");

function typing() {
    if (!typingEl) return;

    if (i < text.length) {
        typingEl.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    } else {
        typingEl.innerHTML += " ";
    }
}

typing();
// 🔥 QUOTE TYPING ANIMATION

const quoteText =
"“Failure is only the opportunity to begin again, only this time more wisely. - Henry Ford”";

let q = 0;
const quoteEl = document.querySelector(".typing-quote");

function typeQuote() {
    if (!quoteEl) return;

    if (q < quoteText.length) {
        quoteEl.innerHTML += quoteText.charAt(q);
        q++;
        setTimeout(typeQuote, 40);
    } else {
        quoteEl.style.borderRight = "none";
    }
}

window.addEventListener("load", typeQuote);


// =========================
// 🔥 SCROLL REVEAL (OPTIMIZED)
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// =========================
// 🔥 EXPERIENCE ACCORDION
// =========================

const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        const panel = this.nextElementSibling;

        // toggle
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove("open");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("open");
        }
    });
});


// =========================
// 🔥 NAV SMOOTH SCROLL FIX
// =========================

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

/* SIDEBAR NAV */
.sidebar{
    position: fixed;
    left: 0;
    top: 0;
    width: 220px;
    height: 100vh;
    background: #0f172a; /* dark theme */
    display: flex;
    flex-direction: column;
    padding: 20px;
    z-index: 1000;
}

.sidebar .logo{
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
}

.sidebar .menu{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.sidebar .menu a{
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 10px;
    border-radius: 8px;
    transition: 0.3s;
}

.sidebar .menu a:hover{
    background: #1e293b;
}
