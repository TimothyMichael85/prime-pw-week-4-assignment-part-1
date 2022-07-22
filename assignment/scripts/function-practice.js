console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  name = 'Hey, Tim!';
  return name;
}
// Remember to call the function to test
console.log('Should say "Hey, Tim!":', helloName()); 

// 3. Function to add two numbers together & return the result
function addNumbers( numOne, numTwo ) {
  addition = numOne + numTwo;
  return addition;
  // return firstNumber;
}
console.log('Addition: Should be 13:', addNumbers(9,4));
console.log('Addition: Should be 98:', addNumbers(56,42));
console.log('Addition: Should be 568:', addNumbers(127,441));

// 4. Function to multiply three numbers & return the result
function multiplyThree( numOne, numTwo, numThree ) {
multiTrips = numOne * numTwo * numThree;
return multiTrips;
}
console.log ('Dance all night at Studio', multiplyThree(9,2,3));
console.log ('Multiplication: Should be 5850: ', multiplyThree(25,6,39));
console.log ('Multiplication: Should be 3810625', multiplyThree(125,67,455));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    else return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array, lastElement ) {
lastElement = array[array.length - 1];
if (array.length === 0){
  return undefined;
}
  else return lastElement;
}
console.log('should say "eggs"', getLast(['fruit', 'milk', 'bread', 'eggs']));
console.log('should say "undefined"', getLast(true));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function find (val, array){
  array = testArray;
  //value = array;
  for (let i=0; i< array.length; i++) 
  if (val === array[i]){
    return true;
  }
      return false;
}  

console.log('if value is found, should say "true":', find(1));
console.log('if value is found, should say "true":', find(7));
console.log('if value is found, should say "true":', find(13));
console.log('if value is found, should say "false":', find(66));
console.log('if value is found, should say "false":', find(0));
console.log('if value is found, should say "false":', find(127));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
//console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
//console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


