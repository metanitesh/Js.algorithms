// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;
  const result = new Array(X);
  let sum = 0;
  let addingSum = 0;


  for (let i=1 ; i<=X ; i++) {
    sum+=i;
  }

  for (let i = 0; i < len; i++) {
    
    if(result[A[i]] === undefined){
      addingSum += A[i];
      result[A[i]] = 1;
    }

    if(addingSum === sum){
      return i;
    }
  
  }

  return -1;
  
}

console.log(solution(2, [1, 1, 1, 2 ]));