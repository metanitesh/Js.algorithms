// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');



function solution(A) {

  // sortedArray = A.sort();
  let smallestNumber = 0;
  let biggestNumber = 0;
  const len = A.length;

  let result = [];

  for (let i=0 ;  i<len ; i++) {
    if(A[i]<=0){
      continue;  
    }
    result[A[i]] = true;
  }


  let smallestMissingNumber;
  let resultLen = result.length

  
  if(resultLen === 0){
    smallestMissingNumber = 1;
  }

  for(let j=1; j<resultLen; j++){
    if(result[j] === undefined){
      smallestMissingNumber = j;
      break;
    }

    if(j === (resultLen -1)){
      smallestMissingNumber = resultLen;
    }
  }

  return smallestMissingNumber;
  // console.log(sortedArray)

  // write your code in JavaScript (Node.js 8.9.4)
}

const result = solution([ 1, 2, 3])
console.log(result);

