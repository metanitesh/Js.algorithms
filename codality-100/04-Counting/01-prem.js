// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;

  result = [];
  for (let i=0 ; i<len ; i++) {   
    if(result[A[i] - 1]){
      result[A[i] - 1] += 1;
    }else{
      result[A[i] - 1] = 1;
    }
    
  }

  const len2 = len;
  for (let i=0 ; i<len2 ; i++) {
      if(!result[i]){
        return 0;
      }
  }
  return 1;
}

console.log(solution([1,2]))