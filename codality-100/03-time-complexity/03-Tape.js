// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  

  let resultFront = [];
  let resultBack = [];

  const len = A.length;
  let total = 0;
  for (let i=0 ; i<len ; i++) {
    total+= A[i];
    resultFront.push(total);
  }

  total = 0;
  for(let j=len-1; j>=0; j--){
    // console.log(A[j])
    total+= A[j];
    resultBack[j] = total;
  }



  let minVal = Number.POSITIVE_INFINITY;

  
  for (let k=0 ; k<len - 1; k++) {
    let newMin = resultBack[k+1] - resultFront[k];
    newMin = Math.abs(newMin);

    if(newMin<minVal){
      minVal = newMin;
    }
  }

  return minVal;


}

console.log(solution([3,-1,2]));