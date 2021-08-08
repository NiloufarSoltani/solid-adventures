let pickDate = document.getElementById("get-date");
pickDate.setAttribute('min', new Date())

let showCounter = document.querySelector('#show-counter');

let myInterval;

pickDate.addEventListener('blur', function () {
    let sec = (Date.parse(`${pickDate.value}`) - Date.parse(`${new Date()}`)) / 1000;
    if (sec > 0) {
        myInterval && clearInterval(myInterval);
        myInterval = setInterval(mineHourMinSec, 1000);
    }
})
let today = new Date();
let dd = today.getDate().toString().padStart(2, '0');
let mm = (today.getMonth() + 1).toString().padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let todayHours = today.getHours().toString().padStart(2, '0');
let todayMinutes = today.getMinutes().toString().padStart(2, '0');
// 2021-08-08T20:10
today = yyyy + '-' + mm + '-' + dd + 'T' + todayHours + ':' + todayMinutes;
pickDate.setAttribute("min", today);

function mineHourMinSec() {
    let sec = (Date.parse(`${pickDate.value}`) - Date.parse(`${new Date()}`)) / 1000;
    let day = Math.floor(sec / 86400);
    let hour = Math.floor((sec % 86400) / 3600);
    let min = Math.floor(((sec % 86400) % 3600) / 60);
    let second = (((sec % 86400) % 3600) % 60);
    ((day === 0) && (hour === 0) && (min === 0) && (second === 0)) && clearInterval(myInterval);
    counter(day, hour, min, second)
}

// Masoud's way


showCounter.innerHTML = `
<div class="content">
    <strong id='day'>0</strong>
    <span>Days</span>
</div>
<div class="content">
    <strong id='hour'>00</strong>
    <span>Hrs</span>
</div>
<div class="content">
    <strong id='minute'>00</strong>
    <span>Mins</span>
</div>
<div class="content">
    <strong id='second'>00</strong>
    <span>Secs</span>
</div>
   `;
function counter(day, hour, min, second) {
    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour.toString().padStart(2, '0');
    document.getElementById('minute').innerText = min.toString().padStart(2, '0');
    document.getElementById('second').innerText = second.toString().padStart(2, '0');
}


// // make a dive for putting day
// let showDay = document.createElement('div');
// showDay.id = 'day';
// showCounter.appendChild(showDay);
//
// // make a dive for putting hour
// let showHour = document.createElement('div');
// showHour.id = 'hour';
// showCounter.appendChild(showHour);
//
// // make a dive for putting minute
// let showMinute = document.createElement('div');
// showMinute.id = 'minute';
// showCounter.append(showMinute);
//
// // make a dive for putting second
// let showSecond = document.createElement('div');
// showSecond.id = 'second';
// showCounter.append(showSecond);
//
// function counter(day, hour, min, sec){
//     showDay.innerText = day;
//     showHour.innerText = hour.toString().padStart(2, '0');
//     showMinute.innerText = min.toString().padStart(2, '0');
//     showSecond.innerText = sec.toString().padStart(2, '0');
// }