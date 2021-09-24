//square
var a=6,square=1;
for(var i=0;i<2;i++){
    square=square*a;
}
console.log(square);

//swaping
var a=2,b=4;
var temp;
temp=a;a=b;b=temp;
console.log(a,b);

//addition
var a=1,b=2,c=3;
console.log(a+b+c);

//Celsius to Fahrenheit conversion
var celsius=30;
console.log((celsius*(9/5)+32));

//Meter to miles
var meter=2;
var miles=meter*0.000621;
console.log(miles);

//Pounds to kg
var pounds=10;
console.log(pounds*0.453592);


//Calculate Batting Average
var runscored=222;
var Timesout=22;
console.log(runscored/Timesout);

//Calculate five test scores and print their average
var a=[123,456,342,213,124];
var sum=0;
for(var i=0;i<a.length;i++){
sum=sum+a[i];
}
console.log(sum/a.length);

//Power of any number x ^ y
var x=5;y=2;
var pow=1;
for(var i=0;i<y;i++){
    pow=pow*x;
}
console.log(pow);

//Calculate Simple Interest
var p=1000;n=2;r=2;
console.log((p*n*r)/100);

//Calculate area of an equilateral triangle
var a=6;
console.log((Math.sqrt(3)/4)*a*a);

//Area Of Isosceles Triangle
var b=4,h=9;
console.log(b*h/2);

//Volume Of Sphere
var r=8;
console.log((4/3)*3.14*r*r*r);

//Volume Of Prism
console.log(b*h);

//Find area of a triangle.
console.log(1/2*b*h);

//Give the Actual cost and Sold cost, Calculate Discount Of Product
var ac=10000;sc=9000;
console.log(ac-sc);

//Given their radius of a circle and find its diameter, circumference and area.
var r=8;
console.log(`diamete: ${2*r},circumference: ${2*3.14*r} area:${3.14*r*r}`);

//Given two numbers and perform all arithmetic operations.
var a=9,b=5;
console.log(a-b);
console.log(a+b);
console.log(a*b);
console.log(a%b);
console.log(a/b); 

//Display the asterisk pattern as shown below(No loop needed):
console.log("*****","\n*****","\n*****","\n*****","\n*****");

//Calculate electricity bill?
var current=100*24;
var month=(30*current)/1000;
console.log(month*10);

//Program To Calculate CGPA
var datastructure=8.5,oops=9.0,c=8.0,java=8.3,webdesigning=9;
var cgpa=(datastructure+oops+c+java+webdesigning)/5;
console.log(cgpa);



