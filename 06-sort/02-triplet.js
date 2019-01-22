// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const len = A.length;
  let maxTriplet;

  for (let i=0 ; i<len ; i++) {
    
    let a1 =  A[i];
    let a2;
    let a3;

    for(j=i; j<len; j++){

        if(a2 !== undefined && a3 !== undefined){
          break;
        }

        if(a2 === undefined){
          if(A[j] > a1){
            a2 = A[j]
          }

        }else if( a2 !== undefined && a3 === undefined){
          if(A[j] > a2){
            a3 = A[j]
          }
        }

        
        
    }

    const sum = a1 * a2 * a3;



    if(maxTriplet === undefined){
      maxTriplet = sum;
    }

    if(sum > maxTriplet){
      maxTriplet = sum;
    }

    

    
  }
  
  
  return maxTriplet;
  //loop

  //find next two and multipication store in the last max



}

console.log(solution([-2, -1, 0]));