/**
 * Calculate the simpsons rule as a reimman sum
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

var finalFunction = `(${step})*(1/3)*(`
for (var i = 0; i < subIntervalList.length; i++) {
    //The first and last midpoints are not multiplied by anything
    //The other midpoints alternate between being multiplied by 4 and 2
    if (i == 0 || i == subIntervalList.length - 1) {
        finalFunction += `(${functionToCalculate.replace("x", subIntervalList[i])})+`;
    }
    else if (i % 2 == 0) {
        finalFunction += `2*(${functionToCalculate.replace("x", subIntervalList[i])})+`;
    }
    else {
        finalFunction += `4*(${functionToCalculate.replace("x", subIntervalList[i])})+`;
    }

}

//Remove trailing +
finalFunction = finalFunction.slice(0, -1);
finalFunction+=")"
console.log("The final function is: \n\n" + finalFunction+"\n\n");

//Eval and print final function value
var finalFunctionValue = math.evaluate(finalFunction);
console.log("The final function value is: " + finalFunctionValue);