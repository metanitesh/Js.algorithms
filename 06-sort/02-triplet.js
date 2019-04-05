// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) { 

  let B = A.sort((a, b) => a - b);

  
  const len = B.length;
  let maxNegative = Number.NEGATIVE_INFINITY;
  let maxPositive = Number.NEGATIVE_INFINITY;
  if(A[0] < 0 && A[1] < 0){
    maxNegative = A[0] * A[1] * A[len-1]
  }

  
  maxPositive = A[len-1]* A[len-2]* A[len-3];
  
  
  
    

  if(maxNegative > maxPositive){
    return maxNegative;
  }else{
    return maxPositive;
  }
  




  // const len = A.length;
  // let maxProduct = Number.NEGATIVE_INFINITY;
  // for ( let i=0 ; i<len ; i++) {
    

  //   for(let j= i+1; j<len -1 ; j++){

  //     for(let k = j+1; k<len; k++){

           
  //          let prodcut = A[i]*A[j]*A[k];
  //          if(prodcut > maxProduct){
  //            maxProduct = prodcut;
  //          }
          


  //     } 
      

      
  //   }


    
  // }

  // return maxProduct;
}



console.log(solution([-3, 1, 2, -2, 5, 6]));
