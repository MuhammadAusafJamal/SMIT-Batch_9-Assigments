// Question 1
var myarray = [];

// Question 2
new myarray();

// Question 3
var strArray = ["I" , "We" , "You" , "They"];

// Question 4
var numArray = [ 0 , 3 , 4 , 9 , 8];

// Question 5
var boolArray = [True , False];

// Question 6
var mixArray = [ "Him" , "her" , 1 , True];

// Question 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("<h2> Qualifications </h2>");

document.write("1)" + qualifications[0] + "</br>");
document.write("2)" + qualifications[1] + "</br>");
document.write("3)" + qualifications[2] + "</br>");
document.write("4)" + qualifications[3] + "</br>");
document.write("5)" + qualifications[4] + "</br>");
document.write("6)" + qualifications[5] + "</br>");
document.write("7)" + qualifications[6] + "</br>");
document.write("8)" + qualifications[7] + "</br>");
document.write("</br>")

// Question 8
var student = ["Nafay" , "Kamil" , "Ausaf"];
var score = [ 450 , 380 , 350];
var p1 = ((score[0])/500) * 100;
var p2 = ((score[1])/500) * 100;
var p3 = ((score[2])/500) * 100;

document.write("Score of Nafay is " + score[0] +". Percentage: " + p1 + "%" + "</br>");
document.write("Score of Kamil is " + score[1] +". Percentage: " + p2 + "%" + "</br>");
document.write("Score of Ausaf is " + score[2] +". Percentage: " + p3 + "%"  + "</br>");
document.write("</br>")

// Question 9
document.write("<h2> Intial List</h2>");
var colourNames = [" Orange " , " Blue " , " Black " , " Green " , " Yellow " , " White "];
document.write(colourNames);

document.write("</br>");
document.write("<h2> Added colour in the begining</h2>");
var startNewColour = prompt("What colour do you want to add in the begining?");
colourNames.unshift( startNewColour);
document.write(colourNames);

document.write("</br>");
document.write("<h2> Added colour in the end</h2>");
var endNewColour = prompt("What colour do you want to add in the end?");
colourNames.push(endNewColour);
document.write(colourNames);

document.write("</br>");
document.write("<h2> Added two new colours in the begining</h2>");
colourNames.unshift(" Indigo ");
colourNames.unshift(" Teal ");
document.write(colourNames);

document.write("</br>");
document.write("<h2> Deleted a colour in the begining</h2>");
colourNames.shift();
document.write(colourNames);

document.write("</br>");
document.write("<h2> Deleted a colour in the end</h2>");
colourNames.pop();
document.write(colourNames);

document.write("</br>");
document.write("<h2>Added colours at the desired position </h2>");
var positionC = +prompt("At which position do you want to add a new colour?");
var nameColour = prompt("Enter the name of colour at desired position.");
if(positionC = colourNames.length){
    colourNames.slice(positionC , 0 , nameColour)
    document.write(colourNames);
}
else{
    alert("Enter valid position!")
};

document.write("</br>");
document.write("<h2>Deleted colours from the desired position </h2>");
var positionCEnd = +prompt("At which position do you want to start deleting the colours?");
var numColourDel = +prompt("How many colours do you want to delete?");
colourNames.splice(positionCEnd , numColourDel);
document.write(colourNames);


// Question 10

var scores = [320 , 230 , 480 , 120];
var  sortedScores = scores.sort();
document.write ("Scores of Students :" + scores);
document.write ("Ordered scores of Students :" + sortedScores);

// Question 11
document.write("<h2> Cities List</h2>")
var cities = [" Karachi " , " Islamabad " , " Lahore " , " Peshawar " , " Quetta "];
document.write(cities);

document.write("<h2> Selected Cities List</h2>");
var selectedCities = cities.slice(2 , 4);
document.write(selectedCities);

// Question 12

document.write("<h2> Array </h2>")
var arr = [" This ", " is ", " my ", " cat "];
document.write(arr);

document.write("<h2> String </h2>");
document.write(arr.join(''));

// Question 13

document.write("<h2> Devices </h2>");
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Moniter");
document.write(devices);
console.log(devices.shift());
console.log(devices.shift());
console.log(devices.shift());
console.log(devices.shift());




// Question 14

document.write("<h2> Devices </h2>");
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Moniter");
document.write(devices);
console.log(devices.pop());
console.log(devices.pop());
console.log(devices.pop());
console.log(devices.pop());


// Question 15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var selectMenu = '<select>';
for (var i = 0; i < phoneManufacturers.length; i++) {
    selectMenu += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
}
selectMenu += '</select>';
document.write(selectMenu);
