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


const firstName = 'Abhishek';
const birthYear = 1994;
var today = new Date();
const currentYear = today.getFullYear()
const ageNow = currentYear - birthYear;

console.log(`Hi, I'm ${firstName}. I am ${ageNow} years old.`)
console.log(`This
is
a
string
with
multiple
lines`)
*/
//coding challenge 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const weightMark = 68;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;
let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`)
}
else {
    console.log(`Mark's BMI(${markBMI}) is lesser than John's BMI(${johnBMI})`)
}

console.log(markBMI, johnBMI, markHigherBMI)
