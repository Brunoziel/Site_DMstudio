const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const checkbox = document.getElementById("check");

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 50;
    nativeScroll(distanceFromTheTop)
    checkbox.checked = false
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
})