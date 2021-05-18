var bgColors = new Array("#b0ecc7", "#c0c5f9", "#ffc9f8")

document.body.style.background = bgColors[Math.floor(Math.random() * bgColors.length)]


//vert lavande rose/violet


/* 
------------------------------------------------myuniverseparallaxphotos  */

const delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {
    const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
        y: "100vh",
        ease: "none"
    });

    const imageAnim = gsap.to(section.querySelector("img"), {
        y: "-100vh",
        ease: "none",
        paused: true
    });

    const scrub = gsap.to(imageAnim, {
        progress: 1,
        paused: true,
        ease: "power3",
        duration: parseFloat(section.dataset.scrub) || 0.1,
        overwrite: true
    });

    ScrollTrigger.create({
        animation: containerAnim,
        scrub: true,
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: self => {
            scrub.vars.progress = self.progress;
            scrub.invalidate().restart();
        }
    });
});