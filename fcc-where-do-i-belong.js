/*
Basic Algorithm Scripting: Where do I Belong

Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value should
be a number.

For example, getIndexToIns([20,3,5], 19) should return 2 because once the array
has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and 
greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
    //Step 1, add num to array using .push Method
    arr.push(num);
    //Step 2, use .sort Method to sort all the numbers now in the array. We will
    //sort Ascending.
    arr.sort(function(a, b) {
      return a - b;
    });
    //Step 3, return the indexOf where num ends up in the array.
    console.log(arr); //Verifies that the array is now sorted like we want.
    return arr.indexOf(num);
  }
  
  const result = getIndexToIns([40, 60], 50);
  console.log(result);



  /* Notes: Standard syntax for .sort when you want to sort...

  Ascending
  .sort(function(a, b){return a - b;});

  Descending
  .sort(function(a, b){return b - a}); 
  
  */

