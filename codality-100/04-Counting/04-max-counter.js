// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {


  let counterArray = (new Array(N)).fill(0);
  let maxVal = 0;
  let currentCounter = 0;

  const len = A.length;
  for (let i=0 ; i<len ; i++) {
    
    if(A[i] <= N){
      
      // console.log(A[i], N)

      if(currentCounter >= counterArray[A[i] - 1]){
        counterArray[A[i] -1] = currentCounter;
      }

      
      // console.log(counterArray)
      counterArray[A[i] -1] = counterArray[A[i] -1] + 1 || 1;

      // console.log(counterArray)

      if(counterArray[A[i] -1] > maxVal){
        maxVal = counterArray[A[i] -1];
      }



    }else{
      // console.log(A[i], maxVal)
      currentCounter = maxVal;
    }
    
    
  }

  const len2 = counterArray.length;
  for (let j=0 ; j<len2 ; j++) {
    
    if(counterArray[j] < currentCounter){
      counterArray[j] = currentCounter;
    }
  }


  return counterArray;




}

console.log(solution(5, [1,2,6,2,2,4]));