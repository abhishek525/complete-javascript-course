/*
let js = "Amazing"
//if (js === "Amazing") { alert("JavaScript is Amazing") } else alert("It's not fun")
console.log(1 + 2 + 5 - 9)

let firstName = "Abhishek"
let lastName = "Chaduvu"

let country = 'USA'
let continent = 'North America'
let population = 'some millions'
let $Number = 25

console.log(country)
console.log(continent)
console.log(population)
console.log($Number)
console.log(firstName + ' ' + lastName)


let javaScriptIsFun = true;
let year;


console.log(javaScriptIsFun)
console.log(typeof (javaScriptIsFun))
console.log(typeof year)


javaScriptIsFun = 'Yes!'
console.log(javaScriptIsFun)

//dynamic typing
year = 2021;
console.log(typeof year)


const lastName = "Chaduvu"
//lastName = "Chad"

var job = "programmer"
job = "Data Analyst"
console.log(job)


//Assignment Operations
let x = 5 + 5;//x=10
x += 10// x=20
x *= 5//100
x -= 10//x=90
x++//x=91
x--//x=90
console.log(x)

let y = 100;
//comparison Operators
console.log(x > y); // <, >, <=, >=, !=

console.log(x + 100 > y + 10);

*/

//Assignment 1
let weightMark;
let weightJohn;
let heightMark;
let heightJohn;



//test data
//case 1
weightMark = 78;
heightMark = 1.69;
weightJohn = 92;
heightJohn = 1.95;

let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;
let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)

////case 2
weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

markBMI = weightMark / heightMark ** 2;
johnBMI = weightJohn / heightJohn ** 2;
markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)
