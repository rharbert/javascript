/*
Intermediate Algorithm Scripting: Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster,
move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

function translatePigLatin(str) {
	// If string matches a start with any vowel, simply add "way"
	if (str.match(/^[aeiou]/)) return str + "way";

	/* Match multiple occurrences (+) in the string that begins with a non-vowel
	and grab it with [0] */
	let consonants = str.match(/^[^aeiou]+/)[0];
	// console.log(consonants); //Verification only

	/* Use substring to show what remains after extracting the length of "consonants", 
		add back the consonants, and append "ay" */
  return str.substring(consonants.length) + consonants + "ay";
}

var result = translatePigLatin("pickle");
console.log(result);