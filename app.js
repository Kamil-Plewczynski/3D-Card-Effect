// Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
// Items
const title = document.querySelector(".title");
const boot = document.querySelector(".boot img");
const description = document.querySelector(".info h3");
const purchase = document.querySelector(".purchase");
const sizes = document.querySelector(".sizes");

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", e => {
    card.style.transition = 'all 0.1s ease';
    // Popout
    title.style.transform = 'translateZ(50px)';
    boot.style.transform = 'scaleX(-1) translateZ(75px) rotateZ(30deg)';
    description.style.transform = 'translateZ(50px)';
    purchase.style.transform = 'translateZ(50px)';
    sizes.style.transform = 'translateZ(50px)'
})

// Animate Out
container.addEventListener("mouseleave", e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback
    title.style.transform = `translate(0px)`;
    boot.style.transform = 'scaleX(-1) translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)'

})