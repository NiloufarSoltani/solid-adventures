let questions = [{
    id: 0,
    title: 'What is your name?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum eius est, exercitationem laboriosam laborum maiores mollitia nihil numquam obcaecati rerum voluptas voluptatum. Consequatur ex reiciendis sit suscipit. Id, quas?'
}, {
    id: 1,
    title: 'What is your forename?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum eius est, exercitationem laboriosam laborum maiores mollitia nihil numquam obcaecati rerum voluptas voluptatum. Consequatur ex reiciendis sit suscipit. Id, quas?'
}, {
    id: 2,
    title: 'What is your age?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum eius est, exercitationem laboriosam laborum maiores mollitia nihil numquam obcaecati rerum voluptas voluptatum. Consequatur ex reiciendis sit suscipit. Id, quas?'
}];

// You can get questions from an online API
// let questions = fetch('http://google.com/questions');

let questionsUl = document.querySelector('#questions');

for (let question of questions) {
    // Create question title
    let questionTitle = document.createElement('p');
    questionTitle.classList.add('title');
    questionTitle.innerText = question.title;

    // Create question expand button
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = '+';

    // Create question header and append title + button
    let questionHeader = document.createElement('div');
    questionHeader.className = 'header';
    questionHeader.appendChild(questionTitle);
    questionHeader.appendChild(btn);

    // Create question content
    let questionContent = document.createElement('div');
    questionContent.classList.add('content');
    questionContent.innerText = question.answer;

    // Create question list item and append header + content
    let questionListItem = document.createElement('li');
    questionListItem.className = 'question';
    questionListItem.appendChild(questionHeader);
    questionListItem.appendChild(questionContent);

    // Append created question list item to questions ul
    questionsUl.appendChild(questionListItem);
}

let buttons = document.querySelectorAll('.btn');

for (let btn of buttons) {
    btn.addEventListener('click', (event) => {
        let question = event.target.parentNode.parentNode;
        let content = question.children[1];
        content.classList.toggle('active');
    });
}

/*
 * For ajax loaded content (answers in this case), its
 * better to define listeners on the document itself
 */

// document.addEventListener('click', (event) => {
//     if (event.target.className === 'btn') {
//         let question = event.target.parentNode.parentNode;
//         let content = question.children[1];
//         content.classList.toggle('active');
//     }
// });

