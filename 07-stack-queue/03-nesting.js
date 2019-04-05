// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function isMatched(a,b){
  
  let result = false;
  if( a === '(' && b === ')'){
    result = true;
  }

  if( a === '{' && b === '}'){
    result = true;
  }

  if( a === '[' && b === ']'){
    result = true;
  }

  return result;
}


function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let A = S.split('')
  result = [];

  const len = A.length;
  for (let i = 0; i < len; i++) {

    const matched = isMatched(result[result.length - 1], A[i]);

    if(matched){
      result.pop()
    }else{
      result.push(A[i]);
    }
    
  }

  if(result.length === 0){
    return 1;
  }else{
    return 0;
  }

}



console.log(solution("(()(())())"));