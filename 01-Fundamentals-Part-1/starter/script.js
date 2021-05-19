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


//falsy values
console.log(Boolean(0))//false
console.log(Boolean({}))//true
console.log(Boolean(undefined))//false
console.log(Boolean(''))//false
console.log(Boolean('Abhi'))//true

//=== Vs == operator

if (18 === 18) console.log("1. this is a strict equality operator");
if ('18' === 18) console.log("2. this is a loose equality operator");
if ('18' == 18) console.log("3. this is a loose equality operator")//auto type coersion
*/

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
//test case 1
// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;
//test case 2
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;
//test case 2
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;


console.log(dolphinsAverage, koalasAverage)

if (dolphinsAverage === koalasAverage) {
    console.log("It's a draw!")
} else if (dolphinsAverage > koalasAverage && dolphinsAverage < 100) {
    console.log("score should be more than 100")
} else if (koalasAverage > dolphinsAverage && koalasAverage < 100) {
    console.log("score should be more than 100")
} else if (koalasAverage > dolphinsAverage) {
    console.log("Koalas win!!!")
} else if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins win!!!!")
} else {
    console.log("Not Applicable!")
}