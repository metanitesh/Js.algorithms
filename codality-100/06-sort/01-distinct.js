// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // console.log(A);

  A.sort((a,b) => a-b);
  // console.log(A);
  const len = A.length;
  let counter = 0;
  let lastVal;
  for (let i=0 ; i<len ; i++) {
    if(A[i] === lastVal){
      continue
    }else{
      lastVal = A[i];
      counter++;
    }
  }
  
  console.log(counter)
  // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution([2,1,1,2,3,1]));