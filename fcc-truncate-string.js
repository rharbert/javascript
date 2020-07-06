/*
Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    //If length of str is greater than num,
    if (str.length > num) {
    //then return a slice of str starting at index 0 and ending at index 'num'
    return str.slice(0, num) + "...";
  } //Otherwise, simply return the str
    else {
        return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));