/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

export function sum(a, b) {
    const arr1 = [];
    const sumNum = a + b;
    const string1 = `The sum of ${a} and ${b} is ${sumNum}.`;
    return arr1.concat(sumNum, string1);
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    const arr2 = [];
    const multiplyNum = a * b;
    const string2 = `The product of ${a} and ${b} is ${multiplyNum}.`;
    return arr2.concat(multiplyNum, string2);

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiplyThreeNumbers() that takes in three 
numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, 
the second element is the product of those three numbers,  
and the third and fourth elements are strings that EXACTLY follow this example and 
use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out 
how to do this. However, you may continue to use the + operator for string concatenation.
*/

export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line

    const sumAB = sum(a, b)[0];
    const sumABC = sum(sumAB, c)[0];

    const multiAB = multiply(a, b)[0];
    const multiABC = multiply(multiAB, c)[0];

    const string3 = `${a} and ${b} and ${c} sum to ${sumABC}.`;
    const string4 = `The product of ${a} and ${b} and ${c} is ${multiABC}.`;

    const arr3 = [sumABC, multiABC, string3, string4];
    return arr3;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArrayWithThreeNumbers() that takes in an array of numbers 
as its single argument and then returns an array where the first element is the sum 
of the numbers in the array, and the second element is a string that EXACTLY follows 
this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. You're going to 
have to be resourceful to figure out how to do this. However, you may 
continue 
to use the + operator for string concatenation.
*/

export function sumArrayWithThreeNumbers(sumArr) {
    const arrNum1 = sumArr[0];
    const arrNum2 = sumArr[1];
    const arrNum3 = sumArr[2];
    const totalArrNum1 = sum(arrNum1, arrNum2)[0];
    const totalArrNum2 = sum(totalArrNum1, arrNum3)[0];
    const arrString = `${arrNum1},${arrNum2},${arrNum3} was passed in as an array of numbers, and ${totalArrNum2} is their sum.`;

    const totalAllArrs = [totalArrNum2, arrString];
    return totalAllArrs;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArrayWithThreeNumbers() that takes an array of numbers 
as its argument and returns an array whose first element is the product of those numbers, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. 
To do multiplication, use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
This function should handle an array containing three elements. However, 
you may continue to use the + operator for string concatenation.
*/

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    const arrMul1 = multArr[0];
    const arrMul2 = multArr[1];
    const arrMul3 = multArr[2];
    const totalArrNum1 = multiply(arrMul1, arrMul2)[0];
    const totalArrNum2 = multiply(totalArrNum1, arrMul3)[0];
    const arrString = `The numbers ${arrMul1},${arrMul2},${arrMul3} have a product of ${totalArrNum2}.`;

    const totalAllArrs = [totalArrNum2, arrString];
    return totalAllArrs;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.
*/

export function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    for (let i = 0; i < dynamicArray.length; i++) {
        const newArr = multiply([i]);
        const multArr = multiply(newArr);

        const totalDynString = `The numbers ${numArr} have a product of ${multArr}.`;
        const returnArr = [multArr, totalDynString];

        return returnArr;
    }
}


/* const multArr = multiply([i]);
 const numArr = dynamicArray.map();
 const totalDynString = `The numbers ${numArr} have a product of ${multArr}.`;
 const returnArr = [multArr, totalDynString];
 return returnArr;*/


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
