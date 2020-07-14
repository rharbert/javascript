/*
Basic Algorithm Scripting: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make
sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting
words like "the" and "of".

*/

function titleCase(str) {
    //Step 1: convert the whole str toLowerCase
    //Step 2: use replace Method which takes 2 arguments
    //Step 3: Argument #1... we use a Regex - /(^|\s)\S/g 
    ///////// Look at beginning (^) or (|) after any whitespace character (\s)
    ///////// Find all non whitespace characters (\S) and find all occurrences (g)
    //Step 4: Argument #2... we use a function that uses toUppperCase method 
    return str.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
      return firstLetter.toUpperCase();
    });
}

const result = titleCase("I'm a little tea pot");
console.log(result);
  