// Practice Problem 1 : Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.

var momGiven=1000;
var apples=350;
var oranges=350;
var totalCost=apples+oranges;
var momReturn=momGiven-totalCost;

console .log(totalCost);
console .log(momReturn);

// Practice Problem 2 : Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

var total,average, Mathematics,Biology,Chemistry,Physics,Bangla;
Mathematics=75.25; 
Biology=65; 
Chemistry=80; 
Physics=35.45; 
Bangla=99.50; 
total=Mathematics+Biology+Chemistry+Physics+Bangla;
average=total/5;
average=average.toFixed(2);

console.log(total);
console.log(average);

// Practice Problem 3 : John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings and print them in one line. Help John write the program.

var string1='I am going to be';
var string2='an awesome web developer.';
var string3 = string1+' '+string2;
console.log(string3);

// Practice Problem 4 : Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program.

var num1=119,num2=5,remainder=num1%num2;
console.log(remainder);

