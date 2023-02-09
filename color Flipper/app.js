<<<<<<< HEAD
let changeColorInterval = null;

function randomFromArray() {
    let colors = ['red', 'yellow', '#f23', 'green', 'pink', 'tomato', 'brown'];
    let randomNumber = Math.round(Math.random() * (colors.length - 1));
    return colors[randomNumber];
}

function randomColor() {
    return "#" + Math.random().toString(16).substr(2, 6);
}

document.getElementById('getFromArrayBtn').addEventListener('click', () => {
    setBackgroundColor(randomFromArray());
})

function setBackgroundColor(color) {
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
    document.getElementById('currentBg').innerText = color;
}

// let changeColorTimeout = setTimeout(() => {
//     setBackgroundColor(randomColor());
// }, 10000);
//
// clearTimeout(changeColorTimeout);

function setColorInterval() {
    // if (changeColorInterval)
    //     clearInterval(changeColorInterval);

    changeColorInterval && clearInterval(changeColorInterval);

    changeColorInterval = setInterval(() => {
        setBackgroundColor(randomColor());
    }, 50);
}

function stopColorInterval() {
    clearInterval(changeColorInterval);
=======
let changeColorInterval = null;

function randomFromArray() {
    let colors = ['red', 'yellow', '#f23', 'green', 'pink', 'tomato', 'brown'];
    let randomNumber = Math.round(Math.random() * (colors.length - 1));
    return colors[randomNumber];
}

function randomColor() {
    return "#" + Math.random().toString(16).substr(2, 6);
}

document.getElementById('getFromArrayBtn').addEventListener('click', () => {
    setBackgroundColor(randomFromArray());
})

function setBackgroundColor(color) {
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
    document.getElementById('currentBg').innerText = color;
}

// let changeColorTimeout = setTimeout(() => {
//     setBackgroundColor(randomColor());
// }, 10000);
//
// clearTimeout(changeColorTimeout);

function setColorInterval() {
    // if (changeColorInterval)
    //     clearInterval(changeColorInterval);

    changeColorInterval && clearInterval(changeColorInterval);

    changeColorInterval = setInterval(() => {
        setBackgroundColor(randomColor());
    }, 50);
}

function stopColorInterval() {
    clearInterval(changeColorInterval);
>>>>>>> 2ac06a8 (Change project list UI)
}