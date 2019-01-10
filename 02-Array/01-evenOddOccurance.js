function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let tempArray = [];
  const len = A.length;
  let odd;
  
  for (let i=0 ; i<len ; i++) {
    if(tempArray[A[i]]){
      tempArray[A[i]] = undefined;
    }else{
      tempArray[A[i]] = A[i];
    }
  }

  for (let i=0 ; i<tempArray.length ; i++) {
    if(tempArray[i]){
      odd = tempArray[i];
      break;
    }
  }

  return odd
}



console.log(solution([1,2,1,2,3]));