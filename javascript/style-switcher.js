// Style Switcher Toggle
document.querySelector(".style-switcher-toggler").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Close Style Switcher on Scroll
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

// Change Color Theme
const colorSpans = document.querySelectorAll(".colors span");

colorSpans.forEach((span) => {
    span.addEventListener("click", () => {
        // Get the background color of the clicked span
        const color = getComputedStyle(span).backgroundColor;
        // Set the skin color dynamically
        document.documentElement.style.setProperty("--skin-color", color);
    });
});

// Day/Night Mode Toggle
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    // Toggle dark mode
    document.body.classList.toggle("dark");

    // Update the icon
    const icon = dayNight.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// Set Icon and Mode on Page Load
window.addEventListener("load", () => {
    const icon = dayNight.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    } else {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
    }
});
