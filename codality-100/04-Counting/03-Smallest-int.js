// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

  function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const len = A.length;
    const result = [];
    for (let i=0 ; i<len ; i++) {
      if(A[i]>0){
        result[A[i]] = 1
      }
    }

    const resultlen = result.length;
    for (let j=1 ; j<resultlen ; j++) {
      
      if(result[j] === undefined){
        return j;
      }
    }
  
    return result.length || 1; 
  }

console.log(solution([1,2,3,4]));