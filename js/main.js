const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", ()=>{
    if(navLeft < 0){
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navClose.addEventListener("click", () => {
    if(navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
})
    .type("a Barber", { delay: 400 })
    .pause(500)
    .delete(9)
    .type("an Expert", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

gsap.from(".logo", {opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", {opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".logo", {opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".logo", {opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".logo", {opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".logo", {opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".logo", {opacity: 0, duration: 1, delay: 0.5, y: -10 });