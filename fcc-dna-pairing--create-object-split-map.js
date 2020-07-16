/*
Intermediate Algorithm Scripting: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return
the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one
encapsulating array.
*/

function pairElement(str) {
    //Create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //Split string into array of characters
    var arr = str.split("");
    /* Use Map to go through every character in arr, and create an array [] containing the character
     in the 1st position and its pairing in the 2nd position. */
    return arr.map(character => [character, pairs[character]]);
  }
  
  var result = pairElement("GCG");
  console.log(result);