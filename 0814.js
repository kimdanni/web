const title = document.querySelector("#title");
const Base_Color = "white";
const Other_Color = "#7f8c8d"
function handleResize(event){
    console.log(event)
}
function handleClick(){
    const currentColor = title.style.color;
    if (currentColor == Base_Color){
        title.style.color = Other_Color;
    }
    else{
        title.style.color = Base_Color;
    }
    console.log(currentColor)
}

function handleOffline() {
    console.log("lalalalal");
}

function handleOnline(){
    console.log("Welcome back");
}

//window.addEventListener("resize", handleResize());//자동으로 호출함
//window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);

function init(){
    title.style.color = Base_Color;
    title.addEventListener("click", handleClick);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
}
init();

//if else
/*if(condition){
    block
} else {
    block
}*/

if(10 > 5){
    console.log('hi');
} else {
    console.log("ho");
}
//&& || 

//prompt("Ask something")

//const age = prompt("how old are you"); 입력 전 까지 코드 1 에서 머물고 있으므로 좋은 방법이 아니다.

