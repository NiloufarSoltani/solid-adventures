<<<<<<< HEAD
let navbar = document.querySelector('nav');
// scroll just across of window and document and it doesn't work on elements
// so instead of body we write event listener with scroll event on window
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar');
    } else {
        navbar.classList.remove('navbar')
    }
});

let navItems = document.querySelectorAll('.navItem');

navItems.forEach((value, key) => {
    value.addEventListener('click', (e) => {
        e.preventDefault();

        let targetDiv = document.querySelector(`#${value.dataset.name}`);
        scroll({
            top: targetDiv.offsetTop,
            behavior: "smooth"
        });
    })
});


// let home = document.querySelector('#home');
// let homeBtn = document.querySelector('.homeBtn');
// let about = document.querySelector('#about');
// let aboutBtn = document.querySelector('.aboutBtn');
// let service = document.querySelector('#service');
// let serviceBtn = document.querySelector('.serviceBtn');
//
// homeBtn.addEventListener('click',(e) =>{
//     e.preventDefault();
//
//     scroll({
//         top: home.offsetTop,
//         behavior: "smooth"
//     });
// })
//
// aboutBtn.addEventListener('click',(e) =>{
//     e.preventDefault();
//
//     scroll({
//         top: about.offsetTop,
//         behavior: "smooth"
//     });
// })
//
// serviceBtn.addEventListener('click',(e) =>{
//     e.preventDefault();
//     scroll({
//         top: service.offsetTop,
//         behavior: "smooth"
//     });
// })
//

// Here is definition about how a click work(event listener with click event):
// When you click on an element it across from window, document, html, body ... until element
// And it goes until the most little child

// document.querySelector('#clickBtn').addEventListener('click', (event) => {
//     let targetId = (event.target.dataset.name) ? event.target.dataset.name : event.target.parentNode.dataset.name;
//     document.querySelector(`#${targetId}`).style.display = "none";
// });
=======
let navbar = document.querySelector('nav');
// scroll just across of window and document and it doesn't work on elements
// so instead of body we write event listener with scroll event on window
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar');
    } else {
        navbar.classList.remove('navbar')
    }
});

let navItems = document.querySelectorAll('.navItem');

navItems.forEach((value, key) => {
    value.addEventListener('click', (e) => {
        e.preventDefault();

        let targetDiv = document.querySelector(`#${value.dataset.name}`);
        scroll({
            top: targetDiv.offsetTop,
            behavior: "smooth"
        });
    })
});


// let home = document.querySelector('#home');
// let homeBtn = document.querySelector('.homeBtn');
// let about = document.querySelector('#about');
// let aboutBtn = document.querySelector('.aboutBtn');
// let service = document.querySelector('#service');
// let serviceBtn = document.querySelector('.serviceBtn');
//
// homeBtn.addEventListener('click',(e) =>{
//     e.preventDefault();
//
//     scroll({
//         top: home.offsetTop,
//         behavior: "smooth"
//     });
// })
//
// aboutBtn.addEventListener('click',(e) =>{
//     e.preventDefault();
//
//     scroll({
//         top: about.offsetTop,
//         behavior: "smooth"
//     });
// })
//
// serviceBtn.addEventListener('click',(e) =>{
//     e.preventDefault();
//     scroll({
//         top: service.offsetTop,
//         behavior: "smooth"
//     });
// })
//

// Here is definition about how a click work(event listener with click event):
// When you click on an element it across from window, document, html, body ... until element
// And it goes until the most little child

// document.querySelector('#clickBtn').addEventListener('click', (event) => {
//     let targetId = (event.target.dataset.name) ? event.target.dataset.name : event.target.parentNode.dataset.name;
//     document.querySelector(`#${targetId}`).style.display = "none";
// });
>>>>>>> 2ac06a8 (Change project list UI)
