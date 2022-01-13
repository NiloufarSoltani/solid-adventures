let person = ''; /*prompt('To start a game, please enter your name!','User');
// let maxScor =2/*= prompt('Enter maximum score',5) */;
let userName = document.querySelector('#user-title');
(person) ? userName.innerText = person : userName.innerText = 'User';
let actions = ['Rock', 'Paper', 'Scissors'];
let rock = document.querySelector('#hand-rock');
let paper = document.querySelector('#hand-paper');
let scissors = document.querySelector('#hand-scissors');
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

for (let a=1; a<=5;a++){
    userScore.innerHTML = `${userScore.innerHTML}<i class="far fa-circle"></i>`;
    compScore.innerHTML = `${compScore.innerHTML}<i class="far fa-circle"></i>`;
}
function winSound(){
    let audio = new Audio('src/positive-beeps.wav');
    audio.play();
}
function beatSound(){
    let audio = new Audio('src/negative-beeps.wav');
    audio.play();
}
function compAction() {
    let index = Math.floor(Math.random() * 3);
    compChoise.innerText = actions[index];
    document.querySelector('.comp-icon').children[index].classList.add('choosen');
}
function winner(value) {
    switch (value) {
        case ('Rock-Rock'):
        case ('Paper-paper'):
        case ('Scissors-Scissors'):
            result.innerText = 'No one won';
            tie++;
            tieCount.innerHTML = `${tie}`;
            break;
        case ('Rock-Scissors'):
        case ('Paper-Rock'):
        case ('Scissors-Paper'):
            winSound();
            result.innerText = `Win`;
            user++;
            userScore.children[user - 1].classList.add('color');
            if(user == 5){
                restart();
                aler(`Congratulation ${person}! You wins this match.`)
            }
            break;
        case ('Scissors-Rock'):
        case ('Rock-Paper'):
        case ('Paper-Scissors'):
            beatSound();
            result.innerText = 'Beat';
            comp++;
            compScore.children[comp - 1].classList.add('color');
            if(comp == 5){
                restart();
                alert('game over!')
            }
    }
}
rock.parentElement.addEventListener('click', () => {
    document.querySelectorAll('.choosen').forEach((item)=> item.classList.remove('choosen'));
    compAction();
    rock.parentElement.classList.add('choosen');
    userChoise.innerText = 'Rock';
    round.innerHTML = `Round ${++step}`;
    winner(`${userChoise.innerText}-${compChoise.innerText}`);
})
paper.parentElement.addEventListener('click', () => {
    document.querySelectorAll('.choosen').forEach((item)=> item.classList.remove('choosen'));
    compAction();
    paper.parentElement.classList.add('choosen');
    userChoise.innerText = 'Paper';
    round.innerHTML = `Round ${++step}`;
    winner(`${userChoise.innerText}-${compChoise.innerText}`);
})
scissors.parentElement.addEventListener('click', () => {
    document.querySelectorAll('.choosen').forEach((item)=> item.classList.remove('choosen'));
    compAction();
    scissors.parentElement.classList.add('choosen');
    userChoise.innerText = 'Scissors';
    round.innerHTML = `Round ${++step}`;
    winner(`${userChoise.innerText}-${compChoise.innerText}`);
})

function restart(){
    step = 1;
    round.innerHTML = `Round ${step}`;
    tie = 0;
    user = 0;
    comp = 0;
    tieCount.innerHTML = `${tie}`;
    document.querySelectorAll('.color').forEach((item)=>item.classList.remove('color'));
    document.querySelectorAll('.choosen').forEach((item)=>item.classList.remove('choosen'));
    userChoise.innerText = '';
    compChoise.innerText = '';
    result.innerText= '';
}


