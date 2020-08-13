/*
Intermediate Algorithm Scripting: Drop it

Given the array arr, iterate through and remove each element starting from the first element (the
0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be 
returned as an empty array.
*/

function dropElements(arr, func) {
  /* shift() method removes an item from the beginning of an array (aka index position 0).
  So, we use while loop to test the beginning position of the array, and if it doesn't pass
  the function, it is dropped. So, the next position in the array now "shifts" to index position 0,
  and it's tested. Once the test passes, the rest of the array is returned per the instructions. */
  while (!func(arr[0])) {
    arr.shift();
  }
  return arr;
}

var result = dropElements([1, 2, 3, 4, 5, 1], function(n) {return n >= 3; });

console.log(result); 