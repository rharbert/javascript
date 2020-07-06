/*
Basic Algorithm Scripting: Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument).

Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
    //Uses straight forward ternary operator and repeat Method
    return num > 0 ? str.repeat(num) : "";
}

console.log(repeatStringNumTimes("abc", 3));	

/*Alternate Solution
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

const result = repeatStringNumTimes("abc", 2);
console.log(result);

*/