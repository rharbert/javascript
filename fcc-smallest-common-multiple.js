/*
Intermediate Algorithm Scripting: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly
divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
	//First, we sort the array descending
	arr.sort(function(a,b) {
		return b - a; 
	});
	//Second, Push into a new array all the numbers between index 0 and 1 in descending order (i--)
	var newArray = [];
	for (var i = arr[0]; i >= arr[1]; i--) {
		newArray.push(i);
	}
	console.log(newArray); //Verification








  return arr;
}


smallestCommons([1,6]);

