/**
 * Calculate the trapezoid rule as a reimman sum
 */

//Import math.js
const math = require('mathjs');


var subIntervals = 4;
var start =0;
var end = 1;

//This is the integral function!!!!!
var functionToCalculate = "x^2";

console.log("You have: " + subIntervals + " subintervals");
console.log("The start point is: " + start);
console.log("The end point is: " + end);

//Calculate subintervals and add to list
var step = (end - start) / subIntervals;
var subIntervalList = [];
for (var i = 0; i <= subIntervals; i++) {
    subIntervalList.push(start + step * i);
}

//Print 
console.log("The intervals are: " + subIntervalList);

//The function is (1/2)*(step)*(2*functionToCalculate(midpoint))
//Replace x in function with functionToCalculate(midpoint)
//The first and last midpoints are not multiplied by 2
var finalFunction = `(${step})*(1/2)*(`
for (var i = 0; i < subIntervalList.length; i++) {
    if (i == 0 || i == subIntervalList.length - 1) {
        finalFunction += `(${functionToCalculate.replace("x", subIntervalList[i])})`;
    } else {
        finalFunction += `2*(${functionToCalculate.replace("x", subIntervalList[i])})`;
    }
    if (i != subIntervalList.length - 1) {
        finalFunction += `+`;
    }
}

finalFunction+=")"
console.log("The final function is: \n\n" + finalFunction+"\n\n");

//Eval and print final function value
var finalFunctionValue = math.evaluate(finalFunction);
console.log("The final function value is: " + finalFunctionValue);