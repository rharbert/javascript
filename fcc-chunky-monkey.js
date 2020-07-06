/*
Basic Algorithm Scripting: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {
    //Step 1: Create variable to hold the 2-D array
    let newArray = [];
    //Step 2: Use for Loop. Start at 0, go through length of arr, and iterate according to size
    for (var i = 0; i < arr.length; i += size) {
        /* Step 3: Push onto the 2-D array the sliced results from arr.
        Slice takes 2 parameters: (1) starting position i (which is 0 in this case) and up to but not
        including (2) stopping position i + size (which is 0 + 2 = 2 in the result below) */
        newArray.push(arr.slice(i, i + size));
    }
    // Step 4: Return result
    return newArray;
  }
  
  var result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log(result);