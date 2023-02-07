// Question  1
var a = +prompt("Enter Any Number" , 10)

document.write("<h2> Result </h2>")
document.write("The value of a is: " + a + ("</br>"))
a = ++a
document.write("The value of ++a is: " + a + ("</br>"))
document.write("Now the value of a is: " + a + ("</br>"))
a = a++
document.write("The value of a++ is " + a + ("</br>"))
document.write("Now the value of a is: " + a + ("</br>"))
a = --a
document.write("The value of --a is " + a + ("</br>"))
document.write("Now the value of a is: " + a + ("</br>"))
a = a--
document.write("The value of a--is " + a + ("</br>"))
document.write("Now the value of a is: " + a + ("</br>"))

// Question 2

var a = 2
var b = 1
// var result = --a - --b + ++b + b--;
var result;
result = --a
result = --a - --b
result = --a - --b + ++b;
result = --a - --b + ++b + b--;

alert(result);







// Question 3
var name = prompt("Enter Your Name");
alert("Welcome! " +  name)


// Question 4
var table = +prompt("Enter Any Number For Table" , "5");
document.write(" <h2> Table of  </h2> " + "<h2>" + table  + "</h2>" );
document.write( table + " x 1 = "+ table * 1 + "<br/>");
document.write( table + " x 2 = "+ table * 2 + "<br/>");
document.write( table + " x 3 = "+ table * 3 + "<br/>");
document.write( table + " x 4 = "+ table * 4 + "<br/>");
document.write( table + " x 5 = "+ table * 5 + "<br/>");
document.write( table + " x 6 = "+ table * 6 + "<br/>");
document.write( table + " x 7 = "+ table * 7 + "<br/>");
document.write( table + " x 8 = "+ table * 8 + "<br/>");
document.write( table + " x 9 = "+ table * 9 + "<br/>");
document.write( table + " x 10 = "+ table * 10 + "<br/>");

// Question 5
var sub1 = prompt("Enter Subject Name");
var sub2 = prompt("Enter Subject Name");
var sub3 = prompt("Enter Subject Name");
var totalMarks = 100;
var total3 = 300;
var obtainedMarks1 = +prompt("Enter obtained marks of " + sub1);
var obtainedMarks2 = +prompt("Enter obtained marks of " + sub2);
var obtainedMarks3 = +prompt("Enter obtained marks of " + sub3);
var tObtainedMarks = obtainedMarks1+obtainedMarks2+obtainedMarks3
var per1 = (obtainedMarks1/totalMarks)*100
var per2 = (obtainedMarks2/totalMarks)*100
var per3 = (obtainedMarks3/totalMarks)*100
var per = (per1 + per2 + per3) / 3  
document.write("<table>")
document.write("<tr> <th> Subject </th> <th> TotalMarks </th> <th> ObtainMarks </th> <th> Percentage </th> </tr>");
document.write("<tr> <td> " +sub1+" </td> <td>  "+totalMarks+" </td> <td> "+obtainedMarks1+" </td> <td>"+per1+" % </td> <td>")
document.write("<tr> <td> " +sub2+" </td> <td>  "+totalMarks+" </td> <td> "+obtainedMarks2+" </td> <td>"+per2+" % </td> <td>")
document.write("<tr> <td> " +sub3+" </td> <td>  "+totalMarks+" </td> <td> "+obtainedMarks3+" </td> <td>"+per3+" % </td> <td>")
document.write("<tr> <td> " + " </td> <td>  "+ total3 +" </td> <td> "+tObtainedMarks+" </td> <td>"+per+" % </td> <td>")
document.write("</table>")
