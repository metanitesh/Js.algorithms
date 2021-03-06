/*
Problem Statement

James found a love letter his friend Harry has written for his girlfriend.
James is a prankster, so he decides to meddle with the letter.
He changes all the words in the letter into palindromes.

To do this, he follows 2 rules:

(a) He can reduce the value of a letter, e.g. he can change 'd' to 'c', 
but he cannot change 'c' to 'd'. 
(b) In order to form a palindrome, if he has to repeatedly reduce the value 
of a letter, he can do it until the letter becomes 'a'. Once a letter has been changed to 'a', 
it can no longer be changed.

Each reduction in the value of any letter is counted as a single operation. 
Find the minimum number of operations required to convert a given string into a palindrome. 


Sample Input 

abc
abcba
abcd

Sample Output 

2
0
4

Explanation

For the first test case, ab*c* -> ab*b* -> ab*a*. 
For the second test case, abcba is a palindromic string. 
For the third test case, abc*d* -> abc*c* -> abc*b* -> abc*a* = ab*c*a -> ab*b*a
*/

var input = 'abcd'.split("")
var length = input.length - 1;
var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var counter = 0

for (var i = 0; i <= length / 2; i++) {

  var first = input[i];
  var last = input[length - i];


  while (first !== last) {
    var letter = arr.indexOf(last)

    last = (arr[letter - 1])

    counter++;
  }

};

console.log(counter)


