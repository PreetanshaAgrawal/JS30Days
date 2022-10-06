const secHand = document.querySelector('.secondHand');
const minHand = document.querySelector('.minuteHand');
const hourHand = document.querySelector('.hourHand');

function setTime(){

    // to get the date
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    // To Find the angle
    const secDeg = (sec/60 * 360) + 90;
    const minDeg = (min/60 * 360) + 90;
    const hrDeg = (hr/12 * 360) + 90;

    // to set the rotation to the hour, minute and second hand;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(setTime, 1000);