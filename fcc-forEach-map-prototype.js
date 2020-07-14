/*
Functional Programming: Implement map on a Prototype

As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method
returns an array of the same length as the one it was called on. It also doesn't alter the original
array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes
another function as its argument.

It would teach us a lot about map to try to implement a version of it that behaves exactly like the 
Array.prototype.map() with a for loop or Array.prototype.forEach().

Note: A pure function is allowed to alter local variables defined within its scope, although, it's 
preferable to avoid that as well.

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may
use a for loop or the forEach method.
*/

//Global variables
var array1 = [23, 65, 98, 5];
var array2 = [1, 2, 3];

//This prototype creates the functionality of executing whatever we want on each element in an array
//In other words, it creates the functionality of ".map"
Array.prototype.myMap = function(callbackFunction){
  var newArray = [];
  //forEach element in whatever array we choose, execute the callbackFunction and push the
  //results to newArray
  this.forEach(element => {
      //console.log(element); We used this line for verification purposes only
      newArray.push(callbackFunction(element));
  });
  return newArray;
};

//The callbackFunction in this example is an anonymous function...   function(element){return element * 2;}
var array3 = array1.myMap(function(element){
  return element * 2;
});
console.log(array3);

//The callbackFunction in this example is an arrow function...   element => {return element + 20;}
var array4 = array2.myMap(element => {
    return element + 20;
  });
  console.log(array4);
