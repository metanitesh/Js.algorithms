// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {

  A.sort((a,b)=> a-b );
  const len = A.length;
  for (let i=0 ; i<len ; i+=2) {
    if(A[i] == A[i+1]){
      continue;
    }else{
      return A[i];
    }
  }
  // write your code in JavaScript (Node.js 8.9.4)
  // const len = A.length;
  // for (let i=0 ; i<len ; i++) {
  //   console.log(A[i])
  // }
}

console.log(solution([9,3,9,3,9,7,7]));