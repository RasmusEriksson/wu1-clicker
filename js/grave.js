const button = document.querySelector('#grave_clicker');
const counter = document.querySelector('#souls');

let souls = 0;


button.addEventListener(
    'click',
    (event) => {
        souls += 1
        console.log(souls)
        counter.textContent = souls;
    },
    false
);

function step(timestamp) {
    

    window.requestAnimationFrame(step);
};