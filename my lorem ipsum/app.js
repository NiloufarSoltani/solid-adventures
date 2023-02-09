<<<<<<< HEAD
let number = document.querySelector('#number');
let loremApiUrl;
let waiting = false;

let confirmNumber = document.querySelector('#confirm-number');
let paragraph = document.querySelector('#paragraphs');

confirmNumber.addEventListener('click', function () {
    if (waiting) return;
    waiting = true;
    loremApiUrl = `https://hipsum.co/api/?type=hipster-centric&paras=${number.value}`;
    fetch(loremApiUrl)
        .then(
            response => response.json()
        )
        .then(
            function (result) {
                waiting = false;
                paragraph.innerText = '';
                paragraph.style.height = "0px";

                // it has a note: create a break line with innerHTML and \n
                for (let index in result) {
                    if (+index === (result.length - 1)) {
                        paragraph.innerHTML += result[index] + `\n`;
                    } else {
                        paragraph.innerHTML += result[index] + `\n\n`;
                    }
                }

                paragraph.style.height = paragraph.scrollHeight + "px";
            }
        )
        .catch(e => console.log(e));
})

document.querySelector('#copy').addEventListener('click', function () {
    paragraph.select();
    document.execCommand("copy");
})

window.addEventListener('resize', (e) => {
    paragraph.style.height = "0px";
    paragraph.style.height = paragraph.scrollHeight + "px";
});



=======
let number = document.querySelector('#number');
let loremApiUrl;
let waiting = false;

let confirmNumber = document.querySelector('#confirm-number');
let paragraph = document.querySelector('#paragraphs');

confirmNumber.addEventListener('click', function () {
    if (waiting) return;
    waiting = true;
    loremApiUrl = `https://hipsum.co/api/?type=hipster-centric&paras=${number.value}`;
    fetch(loremApiUrl)
        .then(
            response => response.json()
        )
        .then(
            function (result) {
                waiting = false;
                paragraph.innerText = '';
                paragraph.style.height = "0px";

                // it has a note: create a break line with innerHTML and \n
                for (let index in result) {
                    if (+index === (result.length - 1)) {
                        paragraph.innerHTML += result[index] + `\n`;
                    } else {
                        paragraph.innerHTML += result[index] + `\n\n`;
                    }
                }

                paragraph.style.height = paragraph.scrollHeight + "px";
            }
        )
        .catch(e => console.log(e));
})

document.querySelector('#copy').addEventListener('click', function () {
    paragraph.select();
    document.execCommand("copy");
})

window.addEventListener('resize', (e) => {
    paragraph.style.height = "0px";
    paragraph.style.height = paragraph.scrollHeight + "px";
});



>>>>>>> 2ac06a8 (Change project list UI)
