/*
Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their
corresponding HTML entities.
*/

function convertHTML(str) {
  //Create object for pair lookup
  const htmlPairs = {
    "&": '&amp;' ,
    "<": "&lt;" ,
    ">": "&gt;" ,
    '"': '&quot;' , 
    "'": "&apos;" 
  };

  return str
	//Split the str by characters
	.split("")
	//Use map to check every character to see if it should be converted or kept as an original 
	.map(character => htmlPairs[character] || character)
	//Join all the characters back together
	.join("");
}

var result = convertHTML("Tom & Jerry");
console.log(result);
