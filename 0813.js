//alert('Im Working. Im JS. Im Beautiful.');
console.log('hello');

const daeunInfo = {
    name : "Nico",
    age : 33,
    gender : "Male",
    isHandsome : true
}

console.log(daeunInfo, console);

// built-in function function 기능적인걸 말한다.

function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`
}
sayHello("Nicolas",15);
console.log("hi!")
const greetNicolas = sayHello("Nicolas", 15)

console.log(greetNicolas);//console.log 는 객체이다

const calculator = {
    plus: function(a, b){
        return a + b;
    }
    ,minus: function(a,b){
        return a - b;
    }
    ,pow: function(a,b){
        return a**b;
    }
    ,div: function(a,b){
        return a/b;
    }

}
const title = document.getElementById("title");

console.log(title)
const plus = calculator.plus(5,5)
const div = calculator.div(3,2)
console.log(plus)
console.log(div)
//const title = document.querySelector("#title")//Css 선택자와 유사
//const title = document.querySelector(".title")//none
//single double 백틱 의 차이가 뭘까나
// ``
//DOM(document object model)
title.innerHTML = "Hi! From JS";
console.error("Fuck")
console.dir();
title.style.color = 'red' //impulation by js
console.dir(document);
