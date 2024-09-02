function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
});


myConfetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
});
