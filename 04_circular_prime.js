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


var input = 10;

var findPrimes = function(input) {
  
  var result = [2];
  var circularPrime = [];
  for (var i = 3; i <= input; i++) {
    for(var j=0; j<result.length; j++){
        var isPrime = true;
        
        if(i % result[j] == 0){
            isPrime = false;
            break;
        }

    }
    if(isPrime){

        result.push(i)    

    }
     
  }
  return result
}

var primes = (findPrimes(100));

console.log(primes)
