let card = document.getElementById('image-box');

let img01 = document.createElement('img');
img01.src= 'img/blueberry.jpg';
let img02 = document.createElement('img');
img02.src = 'img/cranberry.jpg';
let img03 = document.createElement('img');
img03.src = 'img/grapefruit.jpg';
let img04 = document.createElement('img');
img04.src = 'img/watermelon.jpeg';
let img05 = document.createElement('img');
img05.src = 'img/pear.jpg';


let image = document.querySelector('img');
let images = document.createElement('div');
images.id = 'images';
card.append(images);
images.append(img01, img02, img03, img04, img05);

let counter = document.getElementById('counter');

// Previous button
let prevBtn = document.createElement('button');
prevBtn.id = 'prev-btn';
prevBtn.innerText = 'Previous';
counter.append(prevBtn);

// Next button
let nextBtn = document.createElement('button');
nextBtn.id = 'next-btn';
nextBtn.innerText = 'Next';
counter.append(nextBtn);

let step= 0;

// Previous functionality
prevBtn.addEventListener('click', function (){
    step--;
    if(step== -1){
        step= images.childElementCount - 1;
    }
    console.log('prev step', step);
    let distance = -600 * step;
    images.style.transform = `translateX(${distance}px)`;
})

// Next functionality
nextBtn.addEventListener('click', function (){
    step++;
    console.log('next step', step);
    if(step == images.childElementCount){
        console.log(images.childElementCount);
        step = 0;
    };
    let distance = -600 * step;
    images.style.transform = `translateX(${distance}px)`;

})

