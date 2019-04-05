// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
let arr = [ 1, 3, 4, 2, 2, 2]


function solution(A) {
  const stack = [];
  const len = A.length;
  for (let i=0 ; i<len ; i++) {

    if(stack.length === 0){
      stack.push(A[i]);
      continue;
    }

    if(stack[stack.length - 1] === A[i]){
      stack.push(A[i]);

    }else{
      stack.pop()
    }
  
  } 

  // console.log(stack)
  if(stack.length === 0){
    return -1
  }

  const dominator = stack[0];
  
  

  const len2 = A.length;
  let counter = 0;
  let location = -1;
  for (let i=0 ; i<len2 ; i++) {
      if(A[i] === dominator){
        counter++;
        location = i;
      }
  }

  // console.log(counter, len2)
  // console.log(counter, len2)
  if (counter > len2/2){
    return location;
  }else{
    return -1;
  }

  // write your code in JavaScript (Node.js 8.9.4)
  
}

console.log(solution(arr));