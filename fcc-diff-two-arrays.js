/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given
arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    // console.log(newArr); //For verification only
    return newArr.filter(element => !arr1.includes(element) || !arr2.includes(element));
}
  
var result = diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);
console.log(result);

//Alternate solution using .forEach and ternary operator...
function diffArray2(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var notInBothArrays = [];

  newArr.forEach(e => {
    !arr1.includes(e) || !arr2.includes(e) ? notInBothArrays.push(e) : null;
  })
  return notInBothArrays;
}

var result2 = diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result2);