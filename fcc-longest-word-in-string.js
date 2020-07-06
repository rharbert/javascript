/*
Basic Algorithm Scripting: Find the Longest Word in a String

Return the length of the longest word in the provided sentence. Your response should be a number.
*/

function findLongestWordLength(str) {
    //Step 1: Convert str into an array of words
    var words = str.split(' ');
    //Step 2: Use variable to keep track of maxLength; we start with 0 as default
    var maxLength = 0;
    //Step 3: Loop through all words, checking the length of each word and comparing it to the length of the 
    //previous word
    for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
        maxLength = words[i].length;
        }
    }
    //Step 4: Return the length of the longest word
    return maxLength;
}

var result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(result);


/* Alternate Solution created by Nils and me
function findLongestWordLength(str) {
    var words = str.split(' ');
    var lengths = [];
    var maxLength = 0;
    //Object to house words, lengths and maxLength variables above
    var lengthResults = { }
  
    for (var i = 0; i < words.length; i++) {
      lengths.push(words[i].length);
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    lengthResults.words = words;
    lengthResults.lengthsOfEachWordInSentence = lengths;
    lengthResults.lengthOfLongestWordInSentence = maxLength;
    
    return lengthResults;
  }
  
    var result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
    console.log(result);
  */