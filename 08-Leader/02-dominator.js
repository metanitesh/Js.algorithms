// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let stack= [A[0]];
  
  const len = A.length;
  for (let i=1 ; i<len ; i++) {
    // console.log(A[i])
    if(stack.length === 0){
      stack.push(A[i])
      continue;
    }

    if(A[i] !== stack[stack.length - 1]){
      stack.pop();
    }else{
      stack.push(A[i]);
    }
    
  }

  
  if(stack.length > 0){
    
    const leader = stack.pop();
    let position = undefined;
    let counter = 0;

    const len = A.length;
    for (let j=0 ; j<len ; j++) {
      
      if(A[j] === leader){
        counter++;
        position = j;
      }

    }

    if(counter > len/2){
      
      return position;
    }else{
      
      return -1;
    }
  } else{
    return -1;
  }
}

console.log(solution([1,1,2,2,3,3,3,1,1,1,1]));