// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;
  let multiplier = 0;
  let total = 0;
  for (let i=0 ; i<len ; i++) {
    
    if(A[i]===0){
      multiplier++;
    }else{
      total += multiplier*1
    }

    

  }
  if(total > 1000000000){
    return -1
  }
  return total;

}

console.log(solution([0,1,0,1,1]))