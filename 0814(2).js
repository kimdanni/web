const title = document.querySelector('#title');

const CLICKED_CLASS = "clicked";//

/*동작 원리
function handleClick(){
    const hasclass = title.classList.contains(CLICKED_CLASS);
    //const currentClass = title.className;
    if(hasclass){
    //if(currentClass !== CLICKED_CLASS) //btn이 적용되는 순간 clicked_class = "btn"이 되므로 add를 지나치게 된다. 그래서 사용한 contain
        title.classList.remove(CLICKED_CLASS)
    }
    else{
        //title.className = "";//초기에 다 "" 로 설정되어있음 none이나 null 불가능
        title.classList.add(CLICKED_CLASS);
    }
}*/

//togle

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();