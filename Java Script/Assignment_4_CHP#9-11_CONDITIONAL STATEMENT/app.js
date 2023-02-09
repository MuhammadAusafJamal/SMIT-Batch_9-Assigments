// Question # 1

var city = prompt("Enter Your City");
if (city == "karachi");
alert("“Welcome to city of lights”");

// Question # 2

var gender = prompt("Gender");
if (gender == "male") {
    alert("Good Morning Sir.");
}
else if (gender == "female") {
    alert("Good Morning Maam.");
}
else {
    alert("Enter your gender please,Thank you.");
}

// Question # 3

var color = prompt("Enter the color of the traffic signal (Red , Yellow , Green): ");

if (color == "Red") {
    alert("Must Stop");
}
else if (color == "Yellow") {
    alert("Ready to move");
}
else if (color == "Green")
    alert("Move now");

else {
    alert("Invalid Color");
}

// Question # 4

var fuel = prompt("Enter the remaining fuel in your car (in litres): ");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
else (fuel > 0.25)
alert("No need to refill");

// Question # 5 

// a

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true"); // tRUE
}


// b

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true"); // false
}

//c

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true"); // true
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}


// d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


// e

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

//f

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question # 6

//incomplete

// Question # 7

var secret_number = 7

var guessed_number = Number.parseInt(prompt("Enter The Secret Number (1-10)"))


if (guessed_number === secret_number) {
    alert("Bingo! Correct answer.")
}
else if (guessed_number + 1 === secret_number || guessed_number - 1 === secret_number) {
    alert("Close enough to the correct answer.")
}
else {
    alert("Sorry, try again")
}

// Question # 8

var number = prompt("Enter a number: ");

if (number % 3 === 0) {
    alert("The number ${number} is divisible by 3.");
}
else {
    alert("The number ${number} is not divisible by 3.");
}

// Question # 9

var number = prompt("Enter a even number");

if (number % 2 == 0) {
    alert("The number is even");
}
else {
    alert("The number is odd");
}

// Question # 10

var Temp = prompt("Enter The Temperature");
if (Temp > 40) {
    alert("“It is too hot outside.”");
}
else if (Temp > 30) {
    alert("“The Weather today is Normal.”");
}
else if (Temp > 20) {
    alert("“Today’s Weather is cool.”");

}
else if (Temp > 10) {
    alert("“OMG! Today’s weather is so Cool.”");
}
else {
    alert("The temperature is below 10, it is cold.")
}

// Question # 11

var firstNumber = prompt("Enter The First Number");
var secondNumber = prompt("Enter The Second Number");
var operation = prompt("Enter The operation(+ , _ , * , % ,)");

if (operation === '+') {
    alert(firstNumber + secondNumber);
}
else if (operation === '-') {
    alert(firstNumber - secondNumber);
}
else if (operation === '*') {
    alert(firstNumber * secondNumber);
}
else if (operation === '%') {
    alert(firstNumber % secondNumber);
}
else {
    alert("Invalid operation");
}
