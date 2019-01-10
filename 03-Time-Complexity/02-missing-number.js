function solution(A) {

  const len = A.length;
  let total = 0;
  let givenTotal = 0;
  for (var i=0 ; i<len ; i++) {
      console.log(i, A[i])
      total += i+1;
      givenTotal += A[i];
  }

  return (total+i+1-givenTotal)
  // console.log(givenTotal)
  // write your code in JavaScript (Node.js 8.9.4)

}

console.log(solution([1,3]));

