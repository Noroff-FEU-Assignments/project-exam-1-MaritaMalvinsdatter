const hamburger= document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const close = document.querySelector(".close-nav")

// Activates burger menu

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

// Remove menu when clicking nav item

document.querySelectorAll(".nav-item").forEach(e => e.addEventListener
    ("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    }))

// Remove menu when clicking close button

close.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
})