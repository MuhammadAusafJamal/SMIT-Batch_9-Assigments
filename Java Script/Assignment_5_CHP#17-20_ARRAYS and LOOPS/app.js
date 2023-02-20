// Question 1
var multiarray = [[]];

// Question 2

var multiArray = [[0, 1, 2, 3] , [1, 0, 1, 2,] , [2, 1, 0, 1]];
for (i = 0 ; i < multiArray.length ; i++){
    document.write(multiArray[i] + "<br/>");
};

// Question 3

for (var i = 0; i <= 10; i++) {
    document.write(i + "<br/>")
}

// Question 4

var table = +prompt(" Enter the number you want the table of : ");
var lenght = +prompt("Enter the lenght of table");
document.write("<h2> Table of " + table + "</h2>");
for (var i = 0; i <= lenght; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br/>")
};

// Question 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br/>")

};

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {


    document.write(" Element at index" + i + "is" + fruits[i] + " <br/> ")
};


// Question 6

// A
document.write("<h2> Counting </h2>")
for(i = 1 ; i <=15 ; i++){
document.write(i + " , ")
}

// B
document.write("<h2> Reverse Counting </h2>")
for(i = 10 ; i >= 1 ; i--){
document.write(i + " , ")
}

// C
document.write("<h2> Even </h2>")
for (i = 0; i <= 20; i += 2) {
    document.write(i + " , ");
}

// d
document.write("<h2> Odd </h2>")
for (i = 1; i <= 19; i += 2) {
    document.write(i+ " , ");
}

  // E
document.write("<h2> Series </h2>")
for (i = 2; i <= 20; i += 2) {
    document.write(i + "k" + " , ");
}

// Question 7

var items =[ "Biryani" , "Pizza" , "Italian" , "Daal Chawal"];
var selected = prompt(" What do you want to eat? ");
var flag = false;
for (var i = 0 ; i < items.length ; i++ ) {
    if ( selected == items[i]) {
        flag = true ;
        break;
    }
};
if (flag){
    alert( selected + " is available in our restraunt at index " + items.indexOf(selected))
    
}else {
    alert(  " We are sorry "  + selected + " is not available in our restraunt. ");
};

// Question # 8

var A = [24, 53, 78, 91, 12];
var largest = A[0]; 
for (i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

document.write(`The largest number in the array is: ${largest}`);


// Question # 9

var A = [24, 53, 78, 91, 12];
var smallest = A[0]; 
for (i = 1; i < A.length; i++) {

  if (A[i] < smallest) {
    smallest = A[i];
    
  }
};

document.write(`The smallest number in the array is: ${smallest}`);


// Question 10
document.write("<h2> Multiples of 5 </h2>")
for (var i = 1 ; i <= 20 ; i++){
    document.write( i*5 + " , ")
};


var cities = [ "karachi" , "lahore" , "peshawar" , "multan"];
var userCity = prompt( " Enter your city.");
var flag = false;

for ( i = 0 ; i <cities.length ; i++){
    if (userCity == cities[i]){
        flag = true ;
        break;
    }
}
if (flag){
    alert("ture")
}else{
    alert("false")
}