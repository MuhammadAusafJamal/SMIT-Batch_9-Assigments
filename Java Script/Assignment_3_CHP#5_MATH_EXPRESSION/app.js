// Question 1
var num1 = 5;
var num2 = 4;
var sum = num1 + num2;
document.write("Sum of 5 and 4 is " + sum + "<br/>");

// Question 2
var diff = num1 - num2;
document.write("Difference between 5 and 4 is " + diff + "<br/>");

var product = num1 * num2;
document.write("Product of 5 and 4 is " + product + "<br/>");

var divide = num1 / num2;
document.write(" Division of 5 in 4 is " + divide + "<br/>");

var mod = num1 % num2;
document.write("Modulus of 5 and 4 is " + mod + "<br/>");

// Question 3
// a
var num;
// b
document.write("Value after variable declaration is " + num + "<br/>");
// c
num = 15;
// d
document.write("Intial value: 15" + "<br/>");
// e
num = ++num;
// f
document.write("Value after increment is:" + num + "<br/>");
// g
num = num + 7;
// h
document.write("Value after addition is " + num + "<br/>"); 
// i
num = --num;
// j
document.write( "Value after decrement is:" + num + "<br/>");
// k
num = num % 3;
// l
document.write("The remainder is: " + num + "<br/>");



// Question 4
var ticketPrice = 600;
document.write("Total cost to buy 5 tickets to a movie is " + ticketPrice*5 + " PKR " + "<br/>");

// Question 5
document.write(" <h2> Table of 5 </h2> "  );
document.write( " 5 x 1 = 5 " + "<br/>");
document.write( " 5 x 2 = 10" + "<br/>");
document.write( " 5 x 3 = 15" + "<br/>");
document.write( " 5 x 4 = 20" + "<br/>");
document.write( " 5 x 5 = 25" + "<br/>");
document.write( " 5 x 6 = 30" + "<br/>");
document.write( " 5 x 7 = 35" + "<br/>");
document.write( " 5 x 8 = 40" + "<br/>");
document.write( " 5 x 9 = 45" + "<br/>");
document.write( " 5 x 10 = 50" + "<br/>");

// Question 6

document.write("<h2> The Temprature Converter </h2>");
var celcius = 32;
var fResult = (celcius * 9/5) + 32;
document.write(" 32<sup>0</sup> C is " + fResult + " <sup>0</sup> F ");

document.write("<br/>");

var farhenhiet = 100;
var cResult = (farhenhiet - 32) * 5/9;
document.write(" 100<sup>0</sup> F is " + cResult + " <sup>0</sup> C ");


// Question 7
document.write("<h2> Shopping Cart</h2>");
var priceItem1 = 1200;
var priceItem2 = 400;
var tItem1 = 1200 * 3;
var tItem2 = 400 * 2;
var ship = 200;
var total = tItem1 + tItem2 + ship; 

document.write(" Price of Item 1 is " + priceItem1  + "<br/>");
document.write("Price of Item 1 is " + priceItem2 + "<br/>");
document.write(" Quantity of Item 1 is 3" + "<br/>");
document.write("Quantity of Item 2 is 2" + "<br/>");
document.write(" Shipping Charges " + ship + "<br/>");
document.write(" Total cost of your order " + total + "<br/>"); 



// Question 8

document.write( "<h2> Mark Sheet</h2>");
var tMarks = 1100;
var oMarks = 924;
var pertcentage = (oMarks/tMarks)*100;

document.write(" Total Marks: " + tMarks + "<br/>");
document.write(" Obtained Marks: " + oMarks + "<br/>");
document.write(" Percentage: " + pertcentage + "<br/>");


// Question 9

document.write("<h2> Currency in PKR</h2>");
var usd = 104.80;
var sar = 28;

var pkr = (10*usd) + (25*sar);

document.write(" Total currency in PKR: " + pkr + "<br/>");


// Question 10

var num = 15;
var cal = ((num + 5) * 10)/2;
// document.write(cal);


// Question 11

document.write("<h2> The Age Calculator </h2>");

var currentYear = 2023;
var birthYear = 2004;
var age = currentYear - birthYear;

document.write(" Current Year : " + currentYear + "<br/>");
document.write( "Birth Year "+ birthYear + "<br/>");
document.write( "Your Age : " + age + "<br/>");


// Question 12

document.write(" <h2> The Geometrizer </h2> ");

var  π =  3.142;

var radius = 20;
var circumference = 2 *  π * radius;
var area =  π * (radius**2);

document.write("The Radius of the circle is: " + radius + "<br/>");
document.write("The Circumference is: " + circumference + "<br/>");
document.write("The Area is: " + area + "<br/>");


// Question 13

document.write("<h2> The LifeTime Supply Calculator </h2>")

var favSnack = "Pizza"
var currentAge = 19 //years
var maxAge = 60 //years but convert into days
var maxAgeInDays = 60 * 365
var estAmonutPerDay = 7 //slices
var requiredAmount = (estAmonutPerDay * maxAgeInDays )

document.write(" Favorite Snack: " + favSnack + "<br/>")
document.write(" Current Age: " + currentAge + " Years"  + "<br/>")
document.write(" Estimated Maximun Age: " + maxAge + " Years"  + "<br/>" )
document.write("Amount of snacks per day: " + estAmonutPerDay + " slices" + "<br/>" )
document.write(" You will need " + requiredAmount + " slices of pizza until the ripe old age of " + maxAge + "<br/>")
