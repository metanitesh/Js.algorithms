function solution (A){
  const len = A.length;
  let maxSum = 0;
  for (let i=0 ; i<len ; i++) {
    console.log(A[i])
    let localMaxSum = 0;

    for(let j = i+1; j<len; j++){ 
      console.log(A[j])
      localMaxSum += A[j];

      if(localMaxSum > maxSum){
        maxSum = localMaxSum;
      }
    }    
    
  }

  console.log("11",maxSum)
  
} 

function solution(A){
  let prefixSum = [];
  let maxSum= 0;
  const len = A.length;
  let sum =0;
  for (let i=0 ; i<len ; i++) {
    prefixSum[i] = sum+=A[i];
  }

  for(let j=0; j<len; j++){
    if(prefixSum[j] > maxSum){
      maxSum = prefixSum[j];
    }
    for(let k=j+1; k<len; k++){
      let value = prefixSum[k] - prefixSum[j];
      if(value>maxSum){
        maxSum = value;  
      }
    }
  }
  
  // for(let i=0; i<len; i++){
  //   console.log(A[i])
  // }

  console.log(prefixSum, maxSum);

}

function solution(A){

  let maxEnding = maxSlice = 0;
  for(let i=0; i<A.length; i++){
    maxEnding = Math.max(0, maxEnding+A[i]);
    maxSlice = Math.max(maxEnding, maxSlice);
  }

  return maxSlice
}

