// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  len = A.length;
  let smallest = [(A[0] + A[1])/2, 0]
  for (let i=0 ; i<len -1 ; i++) {
      

      let deviser = 1;
      let sum = A[i];
      
      for (let j= i+1 ; j<len ; ++j ) {
          deviser++;
          sum = sum +  A[j];
          const avg = sum/deviser;
          
          if(avg < smallest[0]){
            smallest[0] = avg
            smallest[1] = i;
            
          }

          
      }    

      

      
    // for ( let j= 0 ; j<len ; j = j + i) {
    //   console.log(j)
    // }
  }
  return smallest[1];
}

console.log(solution([4,2,2,5,1,5,8]));
