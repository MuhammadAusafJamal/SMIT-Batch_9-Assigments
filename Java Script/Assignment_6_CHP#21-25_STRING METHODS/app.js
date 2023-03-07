// Question 1

var firstName = prompt("Write your  first name.", " Enter Here ")
var lastName = prompt("Write your last name.", " Enter Here ")


var fullName = firstName + lastName

document.write(fullName)
document.write("</br>")
// Question 2

var favMobile = prompt("Your favorite mobile phone?", " Enter Your Phone ")

document.write(" The lenght of given string is : " + favMobile.length)
document.write("</br>")

// Question 3

var country = "Pakistani"
var myIndex = country.indexOf("n")
document.write(" Index of n is :" + myIndex)
document.write("</br>")

// Question 4

var firstProgram = "Hello World";
var lastIndex = firstProgram.lastIndexOf("l");

document.write(" The last index of l :" + lastIndex)
document.write("</br>")

// Question 5


var string = "Pakistani"
var position = string.charAt(3)

document.write(" The character at index 3 is :" + position)
document.write("</br>")


// Question 6

var firstName = prompt("Write your  first name.", " Enter Here ")
var lastName = prompt("Write your last name.", " Enter Here ")

var fullName = firstName.concat(lastName);

document.write(fullName)
document.write("</br>")

// Question 7

var city = "Hyderabad"
var copy = city.slice(5)
var replace = "Islam" + copy

document.write(replace)
document.write("</br>")

// Question 8

var message = "Ali and Sami are best friends. They play cricket and football together."
for( i = 0; i < message.length; i++){
    if(message.slice(i , i+3) == "and"){
        replacee = message.replaceAll("and" , "&")
    }
}

document.write(replacee)
document.write("</br>")


// Question 9

var string = " 472"
document.write(typeof(string))
document.write("</br>")

var num = parseInt(string)

document.write(typeof(num))

document.write("</br>")


// Question 10

var input = "peanuts"

var upperCase = input.toUpperCase()

document.write(upperCase)


// Question 11

var input = prompt(" Enter Something." , "Write Here")

var upperCase = input.charAt(0).toUpperCase()
document.write(upperCase)
document.write("</br>")

// Question 12

var num = 35.36;
var numToString = num.toString();
var numWithoutDot = numToString.replace(".", ""); 
document.write(numWithoutDot); 
document.write("</br>")



// Question 13
var username = prompt("Please enter your username:");

if(/[!@.,]/.test(username)) {
  alert("Username contains invalid characters. Please enter a valid username.");
} else {
  alert("Welcome, " + username + "!");
}
document.write("</br>")




// Question 14

var  bake = ["cake", "apple pie", "cookie", "chips", "patties"];
var need = prompt("What do you need?");
var flag = false;
 for (i=0; i < bake.length; i++){
    if( need.toLowerCase  == bake[i].toLowerCase ){
        flag = true;
        break;
    }
 }
if(flag = true){
    document.write(need + " is available in pur bakery at " + bake.indexOf(need));
}
else{
    document.write( need + "is not available in our bakery.");
}
document.write("</br>")




// Question 15

var password = prompt("Please enter your password:");

if (password.length < 6) {
  alert("Password must be at least 6 characters long. Please enter a valid password.");
} else if (/^\d/.test(password)) {
  alert("Password cannot start with a number. Please enter a valid password.");
} else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
  alert("Password must contain both alphabets and numbers. Please enter a valid password.");
} else {
  alert("Password accepted. Welcome!");
}

document.write("</br>")


// Question 16

var university = "University of Karachi";

var array = university.split("")


for(i = 0; i < array.length ; i++){
    document.write(array[i] + "</br>")
}

document.write("</br>")


// Question 17
var input = prompt(" Enter a word")
var len = input.charAt((input.length) - 1)
console.log( " The last character of given input is : " + len)




