// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {

  const len = A.length;
  const result = [];
  let counter = 0

  for (let i=0 ; i<len ; i++) {
    
    if(result[A[i]] !== undefined){
      continue
    }else{
      result[A[i]] = A[i];
      counter++
    }

  }

  console.log(result);

  return counter;
  // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution([2,1,1,2,3,1,1,1,0,2,3,1,0]));