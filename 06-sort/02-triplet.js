// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const len = A.length;
  for (let i=0 ; i<len ; i++) {
    
    console.log("------", A[i]);
    counter = 1;
    while( counter <= 2 ){

      console.log(A[i+counter]);
      counter++;
    }


  }

  //loop

  //find next two and multipication store in the last max



}

console.log(solution([-3,1,2,-2,5,6]));