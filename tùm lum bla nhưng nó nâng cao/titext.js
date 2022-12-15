b=document.querySelectorAll("button").length;
for (var a = 0; a < b; a++) {
	document.querySelectorAll("button")[a].addEventListener("click",buttonClick);
}



function buttonClick() {
	alert('ai đã ấn nút')
}
a=prompt("num1")
b=prompt("num2")
c=prompt("operator")
d=parseInt(a)
e=parseInt(b)
f=parseInt(c)
function divide(num1,num2) {
    return num1/num2
}
function multiply(num1,num2) {
    return num1*num2
}
function add(num1,num2) {
    return num1+num2
}
function subtract(num1,num2) {
    return num1-num2
}
function calculator(num1,num2,operator) {
    alert(operator(num1,num2));
}
calculator(d,e,f)
