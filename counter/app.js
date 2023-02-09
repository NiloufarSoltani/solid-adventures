let number = document.getElementById('number').innerText;

function decreaseNumber() {
    changeNumber(--number);
}

function resetNumber() {
    number = 0;
    changeNumber(0);
}

function increaseNumber() {
    changeNumber(++number);
}

function changeNumber(number) {
    document.getElementById('number').innerText = number;
    if (number > 0) {
        document.getElementById('number').style.color = 'green';
    }else if (number < 0) {
        document.getElementById('number').style.color = 'red';
    }
    else document.getElementById('number').style.color = 'black';
}

