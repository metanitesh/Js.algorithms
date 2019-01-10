// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');



function solution(A) {
  let totalPairs = 0;
  let multiplier = 0;
  const len = A.length;

  for (let i=0 ; i<len  ; i++) {
    if(A[i] === 0){
      multiplier += 1;
    }

    if(A[i] === 1){
      totalPairs += multiplier; 
    }

    if( totalPairs > 1000000000){
      return -1;
    }
    
  }
  
  return totalPairs;
  
}

const result = solution([0,1,0]);
console.log(result);