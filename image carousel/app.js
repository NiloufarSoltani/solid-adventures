// let card = document.getElementById('image-box');
//
// let img01 = document.createElement('img');
// img01.src= 'img/blueberry.jpg';
// let img02 = document.createElement('img');
// img02.src = 'img/cranberry.jpg';
// let img03 = document.createElement('img');
// img03.src = 'img/grapefruit.jpg';
// let img04 = document.createElement('img');
// img04.src = 'img/watermelon.jpeg';
// let img05 = document.createElement('img');
// img05.src = 'img/pear.jpg';
//
//
// let image = document.querySelector('img');
// let images = document.createElement('div');
// images.id = 'images';
// card.append(images);
// images.append(img01, img02, img03, img04, img05);
//
// let counter = document.getElementById('counter');
//
// // Previous button
// let prevBtn = document.createElement('button');
// prevBtn.id = 'prev-btn';
// prevBtn.innerText = 'Previous';
// counter.append(prevBtn);
//
// // Next button
// let nextBtn = document.createElement('button');
// nextBtn.id = 'next-btn';
// nextBtn.innerText = 'Next';
// counter.append(nextBtn);
//
// let step= 0;
//
// // Previous functionality
// prevBtn.addEventListener('click', function (){
//     step--;
//     if(step== -1){
//         step= images.childElementCount - 1;
//     }
//     console.log('prev step', step);
//     let distance = -600 * step;
//     images.style.transform = `translateX(${distance}px)`;
// })
//
// // Next functionality
// nextBtn.addEventListener('click', function (){
//     step++;
//     console.log('next step', step);
//     if(step == images.childElementCount){
//         console.log(images.childElementCount);
//         step = 0;
//     };
//     let distance = -600 * step;
//     images.style.transform = `translateX(${distance}px)`;
//
// })

let images = [
    {
        id: 1,
        src: 'img/blueberry.jpg',
        title: 'Blueberry',
        description: 'Blueberries are small, round, darkpurple fruits. They have mat skins and actually they don`t have any taste at all.'
    }, {
        id: 2,
        src: 'img/cranberry.jpg',
        title: 'Cranberry',
        description: 'Cranberries have the same family as blueberries. They are small, round and red with a sour and sweet taste.',
        color: 'red'
    }, {
        id: 3,
        src: 'img/grapefruit.jpg',
        title: 'Grapefruit',
        description: 'Grapefruits are incredible in food. They should be in our diets just because of its high nutrients but low calories.'
    }, {
        id: 4,
        src: 'img/watermelon.jpeg',
        title: 'Watermelon',
        description: 'Watermelons are in different shell designs. It`s include of lots of water and I highly recommand it specially in the heat of summer'
    }, {
        id: 5,
        src: 'img/pear.jpg',
        title: 'Pear',
        description: 'Pears taste like paradise. They are usully with green or yellow skin and their base is round and bigger than its top. They are high in calories'
    }
]
let imageBox = document.querySelector('#image-box');

let imageCover = document.createElement('div');
imageCover.className = 'image-cover';

let imageDes = document.createElement('div');
imageDes.className = 'image-des';

let imageBright = document.createElement('div');
imageBright.className = 'image-bright';

let imageStep = document.createElement('div');
imageStep.className = 'image-step';




imageCover.append(imageDes, imageBright, imageStep)
imageBox.append(imageCover);


function makeImage(number) {
    let image = images.filter((image) => image.id === number);
    imageBox.style.backgroundImage = `url(${image[0]['src']})`;
    imageBright.style.backgroundImage = `url(${image[0]['src']})`;
    imageDes.innerHTML = `
        <div class='title'>${image[0]['title']}</div>
        <div class='description'>${image[0]['description']}</div>
    `;
    imageStep.innerHTML='';
    function createCircle(value){
        let circleIcon = document.createElement('i');
        circleIcon.className = `far fa-circle id-${value}`;
        imageStep.appendChild(circleIcon);
        if (value==number){circleIcon.style.fontWeight = 600};
        circleIcon.addEventListener('click',function (){
            makeImage(value)
        })
    }
    images.forEach((value)=> {
        let id = Object.values(value)[Object.keys(value).indexOf('id')];
        createCircle(id);
    });
}

let counter = document.getElementById('counter');

// Previous button
let prevBtn = document.createElement('button');
prevBtn.id = 'prev-btn';
prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
counter.append(prevBtn);

// Next button
let nextBtn = document.createElement('button');
nextBtn.id = 'next-btn';
nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
counter.append(nextBtn);

let step = 1;
makeImage(step);

function previous() {
    step > 1 ? step-- : step = images.length;
    makeImage(step);
}

function next() {
    step < images.length ? step++ : step = 1;
    makeImage(step);
}

prevBtn.addEventListener('click', previous);
nextBtn.addEventListener('click', next);

document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            next();
            break;
        case 'ArrowLeft':
            previous();
            break;
    }
});
