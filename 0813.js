//nomad js
//callback
function three(){
    console.log('i lov python');
    //throw Error("omg im an error");
    /*에러 전에 있던 모든 콜스텍을 알려준다.*/
}
function two(){
    three();
}
function one(){
    two();
}
function zero(){
    one();
    throw Error("omg im an error");
    /* throw문은 사용자 정의 예외를 던질 수 있다. 
    throw 이후의 명령문은 실행되지 않음.*/
}
zero();

//Primitive type
/*string => 'hello' "hello"
 */