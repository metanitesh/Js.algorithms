// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  // console.log(S);

  const len = S.length;
  const stack = [];
  for (let i = 0; i < len; i++) {
    
  

    if (S[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(S[i]);
      }
    } else {
      stack.push(S[i])
    }
    // stack.push(S[i]);
    // stack[i-1]
    ;
  }

  if(stack.length === 0){
    return 1
  }else{
    return 0
  }

  
}

solution("(()(())())")