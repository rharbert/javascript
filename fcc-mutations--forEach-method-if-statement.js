/*
Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string
in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are
present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
    //Step 1: Create 2 arrays from the 2 items being compared, and make all letters LowerCase
    const array1 = Array.from(arr[0].toLowerCase());
    const array2 = Array.from(arr[1].toLowerCase());
    console.log(array1); //Used only for verification
    console.log(array2); //Used only for verification

    //Step 2: By default, create variable that says comparison is true
    let containsAllLetters = true;
    //Step 3: Use forEach & includes
    array2.forEach(element => {
        if (array1.includes(element) === false) {
            containsAllLetters = false;
        }
    });

    //Step 4: return result
    return containsAllLetters;
}
  
const result1 = mutation(["hello", "hey"]);
console.log(result1);

{
//Alternate Solution using for Loop & indexOf
function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
const result2 = mutation(["Alien", "line"]);
//   console.log(result2);
}
 