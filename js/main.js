var bgColors = new Array("#b0ecc7", "#c0c5f9", "#ffc9f8")

document.body.style.background = bgColors[Math.floor(Math.random() * bgColors.length)]


//vert lavande rose/violet

// ----------------animation room 3d
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
});