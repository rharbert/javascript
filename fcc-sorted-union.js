/*
Intermediate Algorithm Scripting: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values
in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be
sorted in numerical order.

Check the assertion tests for examples.
*/

function combinedUniqueValues(arr) {
	// For as many arguments are entered, create an array combining them all using spread operator
	// and the "arguments" Object which natively stores all values passed to a function.
	const allArguments = [ ...arguments ];
	// console.log(allArguments); // Verfication only


	const combinedArray = [];
	
	// For each element in the all Arguments array, push all contents to empty combinedArray
	allArguments.forEach(e => {
		combinedArray.push(...e)
	})

	const finalArray = [];

	// For each element now in combinedArray, if it's not included in finalArray, push it
	combinedArray.forEach(e => {
    !finalArray.includes(e) ? finalArray.push(e) : null;
	})
	
	return finalArray;
}

var result = combinedUniqueValues([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);

