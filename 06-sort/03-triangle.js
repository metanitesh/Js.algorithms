// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  
  
  A.sort((a,b) => a-b)
  

  const len = A.length;
  for (let i=2 ; i<len  ; i++) {
  

    let c = A[i]
    let b = A[i-1]
    let a = A[i-2]

    if( (a + b) > c){
      return 1;
    }

  }

  return 0;

}

console.log(solution([10,2,5,1,8,20]))

// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function isTriplet(a, b, c){

  
//   let cond1 =  (b + c) > a;
//   let cond2 =  (a + c) > b;
//   let cond3 =  (b + a) > c;
  


//   if(cond1 && cond2 && cond3){
//     return true;
//   }

//   return false;

// }

// function solution(A) {
  
//   const len = A.length;

//   for ( let i= 0 ; i<len ; i++) {
    

//     for (let j=i+1 ; j<len ; j++) {
        
//       for(let k= j+1; k<len; k++){

        
//         const result = isTriplet(A[i], A[j], A[k]);

//         if(result){
//           return 1;
//         }

        
//       }


        
//     }
    
//   }
  
  
//   return 0;
// }

// console.log(solution([10,2,5,1,8,20]));
