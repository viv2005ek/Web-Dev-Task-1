const navMenu = document.body.querySelector(".navigationMenu");



function menu() {
    navMenu.classList.toggle("visible");
    if (navMenu.classList.contains("visible")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}
/* vivek */