/* 
Basic Algorithm Scripting: Finders Keepers

Create a function that looks through an array (first argument) and returns
the first element in the array that passes a truth test (second argument).

If no element passes the test, return undefined.
*/

function findElement(arr, func) {
 
    return arr.find(func);
  
  }
  
  const result = findElement([13, 1, 3, 5, 9, 10], num => num % 2 === 0);
  console.log(result);

  /* Note: Truth Test shown above is called the “modulo operation” which finds
  the remainder after division of one number by another. In the case, above, 
  'num => num % 2 === 0' means this...
  Find the num (num) so that (=>) when the num (num) is divided (%) by 2 (2)
  the remainder equals (===) 0.

  So, let's go through the array...
  13/2 = 6 remainder 1  // no match
  1/2 = 0 remainder 0.5 // no match
  3/2 = 1 remainder 1   // no match
  5/2 = 2 remainder 1   // no match
  9/2 = 4 remainder 1   // no match
  10/2 = 5 remainder 0  // MATCH!!!    
  */

  