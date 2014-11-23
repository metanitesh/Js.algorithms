/*

Description
A number is called a circular prime if all of its rotations 
(rotations of their digits) are primes themselves.
For example the prime number 197 has two rotations: 971, and 719. 
Both of them are prime, so all of them are circular primes.

There are thirteen such primes below 100:
2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below N if 1 <= N <= 1000000?

*/

function isPrime(n) {

  if (n % 2 === 0) {
    return n === 2;
  }

  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return n;
}
;



function isCircularPrime(n) {


  if (!isPrime(n)) {
    return false;
  }

  var reverse = parseInt(n.toString().split("").reverse().join(""));

  if (!isPrime(reverse)) {
    return false
  }



  return true

}


function findCircularPrimesInRange(input) {

  var counter = 0;

  if (input < 2) {
    return 0
  }

  for (var i = 2; i < input + 1; i++) {
    if (isCircularPrime(i)) {
      counter++;
    }
  }

  return counter;
}


console.log(findCircularPrimesInRange(100))
