/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than
or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the
sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci 
sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal
to 10 are 1, 1, 3, and 5.
*/


// need to think more about what's going on here....???????
function fibonacci(num) {
  var start = 0;
  var next = 1;
  var current = 0;
  var sumOdd = 0;

  for (var i = 0; i <= num; i++) {
    current = start + next;
    start = next;
    next = current;
    console.log(current);
    if (current % 2 !== 0 && current <= num) {
      sumOdd = current + sumOdd;
    }
  } return sumOdd;
}

var result = fibonacci(4);
console.log(result);



 

