// Question # 1

var character = prompt("Enter a character: ");

if (isNaN(character)) {
    if (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
        alert(character + " is an uppercase letter");
    }
    else if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
        alert(character + " is a lowercase letter");
    }
    else {
        alert(character + " is not a letter");
    }
}
else {
    alert(character + " is a number");
}

// Question # 2

var num1 = parseInt(prompt("Enter the first number: "));
var num2 = parseInt(prompt("Enter the second number: "));

if (num1 > num2) {
    alert(num1 + " is larger than " + num2);
}
else if (num2 > num1) {
    alert(num2 + " is larger than " + num1);
}
else {
    alert(num1 + " and " + num2 + " are equal");
}

// Question # 3

var num = parseInt(prompt("Enter a number: "));

if (num > 0) {
    alert(num + " is a positive number");
}
else if (num < 0) {
    alert(num + " is a negative number");
}
else {
    alert(num + " is zero");
}

// Question # 4

var character = prompt("Enter a character: ");

if (character.length > 1) {
    alert("Please enter a single character only");
}
else {
    var vowels = "aeiouAEIOU";
    if (vowels.indexOf(character) != -1) {
        alert(true);
    }
    else {
        alert(false);
    }
}

// Question # 5

var correctPassword = "secret123";

var userPassword = prompt("Please enter your password: ");

if (userPassword === "") {
    alert("Please enter your password");
}
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}

// Question # 6


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Question # 7

var time = prompt("Please enter the time in 24-hour clock format (e.g. 1900 = 7pm): ");

if (time >= 0000 && time < 1200) {
    alert("Good morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening");
}
else {
    alert("Good night");
}