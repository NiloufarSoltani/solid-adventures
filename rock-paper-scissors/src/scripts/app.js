let body = document.querySelector('body');
let actions = ['Rock', 'Paper', 'Scissors'];
let rock = document.querySelector('#hand-rock');
let paper = document.querySelector('#hand-paper');
let scissors = document.querySelector('#hand-scissors');
let userTitle = document.querySelector('#user-title');
let userChoise = document.querySelector('#user-choise');
let compChoise = document.querySelector('#comp-choise');
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
let result = document.querySelector('#result');
let round = document.querySelector('#round');
let tieCount = document.querySelector('#tie-count');
let step = 1;
let user = 0;
let tie = 0;
let comp = 0;
let maxMatch;
let userName;

// Modal Parts
let modal = document.createElement('div');
modal.className = 'modal';
body.append(modal);
let modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modal.append(modalContent);
let modalHeader = document.createElement('h2');
modalHeader.className = 'modal-header';
let modalBody = document.createElement('div');
modalBody.className = 'modal-body';
let modalFooter = document.createElement('div');
modalFooter.className = 'modal-footer';
let footerBtn = document.createElement('button');
footerBtn.type = 'button';
footerBtn.className = 'footer-btn';
modalFooter.append(footerBtn);
modalContent.append(modalHeader, modalBody, modalFooter);
let resultIcon = document.createElement('div');
resultIcon.className = 'result-icon';
let img = document.createElement('div');
img.className = 'img';
modalContent.append(resultIcon);
resultIcon.append(img);

function submitForm(e) {
    e.preventDefault();
    userScore.innerHTML='';
    compScore.innerHTML='';
    modal.style.display = 'none';
    (userName.value) ? userTitle.innerText = userName.value : userTitle.innerText='User';
    maxMatch = Number(matchNumber.value);
    for (let a = 1; a <= maxMatch; a++) {
        userScore.innerHTML = `${userScore.innerHTML}<i class="far fa-circle"></i>`;
        compScore.innerHTML = `${compScore.innerHTML}<i class="far fa-circle"></i>`;
    }
}

function loadInfo(){
    modal.style.display = 'flex';
    resultIcon.style.display='none';
    modalHeader.innerHTML = 'Game Information';
    modalBody.innerHTML = `
    <form onsubmit="return submitForm(event)">
        <label for="user-name">Enter your name</label><br>
        <input type="text" name="user-name" id="user-name" autocomplete="off"><br>
        <lable for="match-number">Number of match result</lable><br>
        <select name="match-number" id="match-number">
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select><br>
    </form>
    `;
    modalFooter.style.background = '#cccc00';
    userName = document.querySelector('#user-name');
    userName.focus();
    footerBtn.innerHTML = 'Submit';
    footerBtn.addEventListener('click', function (event) {
        return submitForm(event);
    })
}
loadInfo();

let matchNumber = document.querySelector('#match-number');

function sound(type) {
    let src;
    switch (type) {
        case 'win':
            src = '../../assets/audio/positive-beeps.wav';
            break;
        case 'lose':
            src = '../../assets/audio/negative-beeps.wav';
            break;
    }
    new Audio(src).play();
}

function compAction() {
    let index = Math.floor(Math.random() * 3);
    compChoise.innerText = actions[index];
    document.querySelector('.comp-icon').children[index].classList.add('choosen');
}

function winner(value) {
    switch (value) {
        case ('Rock-Rock'):
        case ('Paper-Paper'):
        case ('Scissors-Scissors'):
            result.innerText = 'Tie';
            tie++;
            tieCount.innerHTML = `${tie}`;
            break;
        case ('Rock-Scissors'):
        case ('Paper-Rock'):
        case ('Scissors-Paper'):
            sound('win');
            result.innerText = `Win`;
            user++;
            userScore.children[user - 1].classList.add('color');
            // let resetResult;
            if (user == maxMatch) {
                document.querySelectorAll('.icon-wrapper').forEach(e => e.style.pointerEvents = 'none')
                setTimeout(function(){
                    finalModal('win')
                }, 2000);
            }
            break;
        case ('Scissors-Rock'):
        case ('Rock-Paper'):
        case ('Paper-Scissors'):
            sound('lose');
            result.innerText = 'Lose';
            comp++;
            compScore.children[comp - 1].classList.add('color');
            if (comp == maxMatch) {
                // let resetResult;
                document.querySelectorAll('.icon-wrapper').forEach(element => element.style.pointerEvents = 'none')
                setTimeout(function(){
                    finalModal('lose');
                }, 2000)
            }
    }
}

function userActions(choise) {
    document.querySelectorAll('.choosen').forEach((item) => item.classList.remove('choosen'));
    compAction();
    choise.parentElement.classList.add('choosen');
    switch (choise) {
        case rock:
            userChoise.innerText = 'Rock';
            break;
        case paper:
            userChoise.innerText = 'Paper';
            break;
        case scissors:
            userChoise.innerText = 'Scissors';
            break;
    }
    round.innerHTML = `Round ${++step}`;
    winner(`${userChoise.innerText}-${compChoise.innerText}`);
}

rock.parentElement.addEventListener('click', function (){
    userActions(rock);
});
paper.parentElement.addEventListener('click', function (){
    userActions(paper);
});
scissors.parentElement.addEventListener('click', function (){
    userActions(scissors);
});

function finalModal(end) {
    modal.style.display = 'flex';
    resultIcon.style.display='flex';
    footerBtn.innerHTML = `
        <i class="fas fa-undo"></i>
        <span>Play again</span>
    `;
    if (end == 'win') {
        img.style.backgroundImage = 'url(../../assets/img/winner.png)';
        img.style.backgroundColor = '#40bf80';
        modalHeader.innerHTML = `Congratulation ${userName.value}!`;
        modalBody.innerHTML = 'You win this match.';
        modalFooter.style.background = '#40bf80';
    } else if (end == 'lose') {
        img.style.backgroundImage = 'url(../../assets/img/sad.png)';
        img.style.backgroundColor = '#ff3333';
        modalHeader.innerHTML = `Game over`;
        modalBody.innerHTML = 'You lost this match.';
        modalFooter.style.background = '#ff3333';
    }
    footerBtn.addEventListener('click', restart);
}

function restart() {
    step = 1;
    round.innerHTML = `Round ${step}`;
    tie = 0;
    user = 0;
    comp = 0;
    tieCount.innerHTML = `${tie}`;
    document.querySelectorAll('.color').forEach((item) => item.classList.remove('color'));
    document.querySelectorAll('.choosen').forEach((item) => item.classList.remove('choosen'));
    document.querySelectorAll('.icon-wrapper').forEach(elment => elment.style.pointerEvents = 'auto')
    userChoise.innerText = '';
    compChoise.innerText = '';
    result.innerText = '';
}


