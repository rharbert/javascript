/*
Intermediate Algorithm Scripting: Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    return str
			/* Split string and convert to array when encountering
				- a whitespace character		\s 
				- an underscore or a dash		|_|-|
				- or an uppercase letter		(?=[A-Z])
			*/
			.split(/^\s|_|-|(?=[A-Z])/)
			//Join using dashes
			.join("-")
			//Convert all to lowercase
			.toLowerCase();
  }

var result = spinalCase('ThisIs-Spinal Tap');
console.log(result);


