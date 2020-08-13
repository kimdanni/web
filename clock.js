const title = document.querySelector('#title');
const clockContainter = document.querySelector(".js-clock"),
clockTitle = clockContainter.querySelector("h1");
const CLICKED_CLASS = "clicked";
const date = new Date();
const form = document.querySelector(".js-form"),
greeting = document.querySelector(".js-greetings"),
input = form.querySelector("input");
const USER_LS = "currentUser"

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds  < 10 ? `0${seconds}` : seconds}`;
}

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function paintGreeting(text){

}
function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){

    }else{

    }
}
function init(){
    loadname();
    getTime();
    setInterval(getTime,1000);
}
init();