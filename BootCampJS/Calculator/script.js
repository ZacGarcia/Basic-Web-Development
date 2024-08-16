let num1;
let num2;
let operator;

function calculator(num1, num2, operator){
    return operator(num1, num2);
}
function add(num1, num2){
    return console.log(num1 + num2);
}
function subtract(num1, num2){
    return console.log(num1 - num2);
}
function divide(num1, num2){
    return console.log(num1 / num2);
}
function multiply(num1, num2){
    return console.log(num1 * num2);
}