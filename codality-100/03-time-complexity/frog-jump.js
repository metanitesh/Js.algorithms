// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  console.log(X, Y, D)

  const steps = (Y-X)/D;

  return Math.ceil(steps);
  

  // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution (10,85,30))