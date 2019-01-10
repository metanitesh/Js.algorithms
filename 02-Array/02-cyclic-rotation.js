function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;
  let resultArray = [];
  
  for (var i=0 ; i<len ; i++) {

    

    let position = i+K;

    if(position >= len){
      position = position-len;
    }

    resultArray[position] = A[i];

  }

  return resultArray;

}

console.log(solution([3, 8, 9, 7, 6], 12));
