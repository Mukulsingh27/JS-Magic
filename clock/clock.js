"use strict";

// Selectors.
const secondHand = document.querySelector(".second");
const minsHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function startClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(startClock, 1000);

startClock();
