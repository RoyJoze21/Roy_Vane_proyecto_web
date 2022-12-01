

const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 120
});

typewriter
    .typeString("Valentín Oliva Freestyler")
    .pauseFor(300)
    .start();

    
