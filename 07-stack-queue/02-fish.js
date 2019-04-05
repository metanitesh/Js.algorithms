// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  // console.log(A);
  // console.log(B);

  let stack = [[A[0], B[0]]];
  const len = A.length;
  for (let i=1 ; i<len ; i++) {
    // console.log(B[i], A[i]);
    
    lastStack = stack[stack.length - 1];

//    console.log("stack", stack);
  //  console.log("new fish", A[i], B[i]);
    //console.log("laststack", lastStack);

    if(lastStack[1] === B[i]){
      
      stack.push([A[i], B[i]]);
      continue;
    }

    if(lastStack[1] === 1 && B[i] === 0){
      
      if(lastStack[0] > A[i]){
        
        continue;
      }else{

        stack.pop()
        

        //eat upward;
       // console.log("going back")
        
        for (let k=stack.length-1 ; k>=0 ; k--) {
         // console.log(stack[k])

          if(B[i] === stack[k][1]){
            break;
          }

          if(A[i] > stack[k][0] ){
            stack.pop();
          }else{
            break;
          }

          
          
        }

        stack.push([A[i], B[i]]);
        


      }


    }

    if(lastStack[1] === 0 && B[i] === 1){
      stack.push([A[i], B[i]])
    }

    // console.log(stack);
    
  }

  return stack.length;


}


console.log(solution([4,3,2,1,5], [0,1,0,0,0]));
