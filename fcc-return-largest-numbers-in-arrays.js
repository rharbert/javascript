/*
Basic Algorithm Scripting: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each
member with array syntax arr[i].
*/

function largestOfFour(arr) {
    const largest = [];

    for (var i = 0; i < arr.length; i++) {
        //outerArrays will give us each array within arr
        const outerArrays = arr[i];
        //maxArr will give us the max within the sub arrays of arr
        const maxArr = Math.max(...outerArrays);
        //Now, we push the result of maxArr to the 'largest' array
        largest.push(maxArr);
    }
    //After the for loop runs, we return the 'largest' array    
    return largest;
 
}

const result = largestOfFour(
  [
    [4, 5, 1, 3], 
    [13, 27, 18, 26], 
    [32, 35, 37, 39], 
    [1000, 1001, 857, 1]
  ]
);
console.log(result);



// Step 1: Start with the smallest problem first; that is, getting the max
// from a single array.
function largestOfOne(arr) {
    const maxArr = Math.max(...arr);
    return maxArr;
}
// console.log(largestOfOne([4, 6, 1, 3]));