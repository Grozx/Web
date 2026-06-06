// Loader
window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1200);

});

// Navbar Scroll
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

// Active Menu
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".about, .karya, .tentang").forEach(section => {
    observer.observe(section);
});