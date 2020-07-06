/* 
Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target 
string (second argument, target).

This challenge can be solved with the .endsWith() method, which was 
introduced in ES2015. But for the purpose of this challenge, we would like 
you to use one of the JavaScript substring methods instead.
*/

/* Method 1: Use .substr */

function confirmEnding(str, target) {
    return (str.substr(-target.length) === target) ? true : false;
  }
  
  const result1 = confirmEnding("Bastian", "an");
  console.log(result1);

  /* Method 2: Use .endsWith */
  function confirmEnding(str, target) {
    return str.endsWith(target);
  }
  
  const result2 = confirmEnding("Bastian", "xx");
  console.log(result2);