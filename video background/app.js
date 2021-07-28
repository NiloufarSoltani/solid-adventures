let input = document.getElementsByClassName('switch');
let video = document.querySelector('video');

function playPause(){
    if(video.paused){
        video.play();
    } else{
        let styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".toggle:after {left: 28px;}";
        video.pause();
    }
}