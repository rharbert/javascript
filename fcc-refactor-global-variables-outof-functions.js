/*
Functional Programming: Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on
any global object or variable. Adding one to a number is not very exciting, but we can apply these principles
when working with arrays or more complex objects.

Rewrite the code so the global array bookList is not changed inside either function. The add function should
add the given bookName to the end of the array passed to it and return a new array (list). The remove function
should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName
parameter.
*/

//Global variable, which we don't want to mutate!!!
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

//Add function
//Step 1: Add 2 parameters to function: (1) an array, (2)a book name
function add (arr, bookName) {
  //Step 2: Create new array to house everything from original array
  let newList = [...arr];
  /* In line above, let newList = arr; will NOT work b/c 'arr' is a reference instead of a value */
  /* Reference: Another way, albeit longer, to execute the line above
  let newList = [];
  arr.forEach(e => newList.push(e));
  */

  //Step 3: Plus, add to new array whatever bookName we want to
  newList.push(bookName);
  return newList;
}

//Remove function
//Step 1: Add 2 parameters to function: (1) an array, (2)a book name
function remove (arr, bookName) {
  //Step 2: Create new array to house everything from original array
  let newList = [...arr];
  //Step 3: Check the indexOf bookName to see if it exists in the new array, and 
  var book_index = newList.indexOf(bookName);
  //Step 4: if it does
  if (book_index >= 0) {
    //Step 5: Remove it
    newList.splice(book_index, 1);
    return newList;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
//console.log(bookList);