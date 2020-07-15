/*
Intermediate Algorithm Scripting: Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array
of all objects that have matching name and value pairs (second argument). Each name and value
pair of the source object has to be present in the object from the collection if it is to be
included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio",
last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" },
then you must return the third object from the array (the first argument), because it contains the
name and its value, that was passed on as the second argument.

*/

function matchKeyValue1(collection, source) {
  var arr = [];
	// Get key and value from source Object which can only have 1 key & value pair
	var key = Object.keys(source)[0];
	var value = Object.values(source)[0];
	// console.log(key, value) // For verification purposes 

  collection.forEach(e => {
		/* For each element(object) in collection, we check its key to see if it === the source value,
		and if it does, we will push onto new array (aka, arr), the element; otherwise, result is null */ 
	  e[key] === value ? arr.push(e) : null;
  })

  return arr;
}

var result = matchKeyValue1([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// console.log(result);

//Solution for when argument(source) has multiple properties
function matchKeyValue2(collection, source) {
	//Return an array of keys from source Object
	var sourceKeys = Object.keys(source);
	console.log(sourceKeys);

	return collection.filter((object) => {
    return sourceKeys.every((key) => {
      return object.hasOwnProperty(key) && object[key] === source[key];
    });
	});
	
}

var result2 = matchKeyValue2(
	[
		{ first: "Romeo", last: "Montague", age: 5 }, 
		{ first: "Mercutio", last: null, age: 7 },
		{ first: "Tybalt", last: "Capulet", age: 5 }
	], 
	{ last: "Capulet", age: 5 }
);

console.log(result2);

