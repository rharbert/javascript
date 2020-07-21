/*
Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example,
2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is
divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

// function sumPrimes(num) {
//     var answer = 0;
  
//     //loop through all numbers from between 2 and num
  
//     for(var i=2; i <= num; i++) {   
  
//       //sum only prime numbers, skip all others
//       if(num % i === 0){
//         answer += i;
//       }
//     }
//     return answer;
//   }
  
//   var result = sumPrimes(10); // 73156
//   console.log(result);


//Shouldn't isPrime be inside sumPrimes? If so, how to do it properly???
function sumPrimes(num) {
    let i = 1;
    let sum = 0;
    while (i <= num) {
      if (isPrime(i)) {
        sum += i;
      }
      i++;
    }
    return sum;
  }
  //function to check if a number is prime or not
  function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }    
    return (x !== 1) && (x !== 0);
  }
  
  var result = sumPrimes(10);
  console.log(result);

  let test = 2 !== 1 && 4 !== 4;
  console.log("test", test);