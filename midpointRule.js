/**
 * Calculate the midpoint rule as a reimman sum
 */

//Import math.js
const math = require('mathjs');

var subIntervals = 6;
var start =1;
var end = 4;

//This is the integral function!!!!!
var functionToCalculate = "sqrt(1+x^2)";

console.log("You have: " + subIntervals + " subintervals");
console.log("The start point is: " + start);
console.log("The end point is: " + end);
//Get midpoints of suninterval
var midpoints = [];
var step = (end - start) / subIntervals;
midpoints.push(start + step / 2);
for (var i = 1; i < subIntervals; i++) {
    midpoints.push(midpoints[i-1]+step);
}

console.log("The midpoints are: " + midpoints);

//Print final function
//Function is (step)*(functionToCalculate(midpoint))
//Replace x in function with functionToCalculate(midpoint)
var finalFunction = "";
for (var i = 0; i < midpoints.length; i++) {
    finalFunction += "(" + step + ")*(" + functionToCalculate.replace("x", midpoints[i]) + ")+";
}
//Remove last trailing +
finalFunction = finalFunction.slice(0, -1);
console.log("The final function is: \n\n" + finalFunction+"\n\n");

//Eval the final function
var finalFunctionValue = math.evaluate(finalFunction);
console.log("The final function value is: " + finalFunctionValue);



