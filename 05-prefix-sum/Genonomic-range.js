// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {

  const DNA = S.split("");
  const val = {
    'A':1,
    'C':2,
    'G':3,
    'T':4
  }
  // 1,2,3,4

  const len = P.length;
  let result = [];

  for (let i = 0; i < len; i++) {
    // console.log(P[i], Q[i]);
    let minVal = 5;
    for (let j = P[i]; j <= Q[i]; j++) {

      if(minVal === 1){
        break;
      }  

      if (val[DNA[j]] < minVal){
        minVal = val[DNA[j]];
      }

    }

    result.push(minVal);
   
  }

  return result;

  // write your code in JavaScript (Node.js 8.9.4)

}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]));