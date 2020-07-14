/*
Functional Programming: Implement the filter Method on a Prototype

It would teach us a lot about the filter method if we try to implement a version of it that behaves
exactly like Array.prototype.filter(). It can use either a for loop or Array.prototype.forEach().

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable
to avoid that as well.

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You
may use a for loop or the Array.prototype.forEach() method.
*/

//Global variable
var array1 = [23, 65, 98, 5];

//This prototype creates the functionality of filtering whatever we want on each element in an array
//In other words, it creates the functionality of ".filter"
Array.prototype.myFilter = function(callbackFunction){
  var newArray = [];
	//forEach element in whatever array we choose, execute the callbackFunction and push the
  //results to newArray if the element meets the requirement
  this.forEach(element => {
    // console.log(element); //We used this line for verification purposes only
    if (callbackFunction(element) == true) {
        newArray.push(element);
    };
});
  return newArray;
};

//The callbackFunction in this example is an anonymous function...   function(element){return element % 2 ===1;}
var array2 = array1.myFilter(function(element){
	//The requirement is... element % 2 === 1;   which means that when the element is divided by 2, it has
	//a remainder of 1
	return element % 2 === 1;
});
console.log(array2);