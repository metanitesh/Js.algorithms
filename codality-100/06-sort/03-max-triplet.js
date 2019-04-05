// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {

  A.sort((a,b) => a-b)
  // console.log(A);

  const last = A[A.length -1] * A[A.length -2]* A[A.length -3]
  
  const first = A[0]* A[1] * A[A.length -1 ]
  
  if(last > first){
    return last;
  }else{
    return first;
  }



  // write your code in JavaScript (Node.js 8.9.4)
}
console.log(solution([-3,1,2,-2,5,6]));
