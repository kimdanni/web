const title = document.querySelector('#title');
const clockContainter = document.querySelector(".js-clock"),
clockTitle = clockContainter.querySelector("h1");
const CLICKED_CLASS = "clicked";
const date = new Date();
const form = document.querySelector(".js-form"),
todo_form = document.querySelector(".js-toDoForm"),
toDoList = document.querySelector(".js-toDoList"),
greeting = document.querySelector(".js-greetings"),
input = form.querySelector("input");
const USER_LS = "currentUser",
TODOS_LS = 'toDos',
SHOWING_CN = "showing";

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function todo_handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
}

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

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
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    todo_form.addEventListener("submit", todo_handleSubmit)
    loadname();
    getTime();
    setInterval(getTime,1000);
}
init();