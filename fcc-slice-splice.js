/*
Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.  Use the array methods slice and splice
to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after 
the function runs.
*/

function frankenSplice(arr1, arr2, n) {
    //Step 1: copy (without mutating) arr2 into newArray
    let newArray = arr2.slice();
    //Step 2: starting at index position n, remove 0 elements (b/c we are not
    //mutating anything), and insert everything from arr1 onto newArray
    newArray.splice(n, 0, ...arr1);
    
    return newArray;
  }
  
  const result = frankenSplice([1, 2, 3], [4, 5, 6], 1);
  console.log(result);

