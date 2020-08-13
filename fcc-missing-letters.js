/*
Intermediate Algorithm Scripting: Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

// console.log('abcABC'.charCodeAt(1));	// For reference to understand JS Unicode methods
// console.log(String.fromCharCode(97, 98, 99)); // For reference to understand JS Unicode methods

function missingLetter(str) {
	/* charCodeAt() method returns a Unicode (aka UTF-16) value of a string (in this case, whatever
		 'str' represents) at a single position that is defined (in this case, 0). FYI, 0 is default.									         
	*/
	var startCode = str.charCodeAt(0);
	// console.log(startCode); // Verification
	// Loop through 'str'
	for (var i = 0; i < str.length; i++) {
		/* And compare each character of 'str' to the same position of startCode. If they're NOT
		the same... */
		if (str.charCodeAt(i) !== startCode) {
			/* String.fromCharCode() method returns a string created from the specified sequence
			of Unicode units. So, if they're NOT the same, then return the String associated with that 
			Unicode unit. */
			return String.fromCharCode(startCode);
		} else {
			// If they are the same, the expected letter is in the correct position, and we need to
			// increase startCode by 1  <-- I don't understand why this statement is true??????????
			startCode = startCode + 1;
		}
	}
}

// This function will only show the FIRST missing letter in the sequence provided; if more 
// than one letter is missing, the function fails.

var result = missingLetter("abcegh");
console.log(result);