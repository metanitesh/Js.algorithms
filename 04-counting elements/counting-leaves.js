function solution(X, A) {

  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;
  let count = 0;
  let result = [];
  for (let i=0 ; i<len ; i++) {

      let flag;

      if(!result[A[i]]){
        result[A[i]] = true;
        flag = true;
      }

      if(A[i] <= X && flag){
        count++
      }

      if(count === X){
        return i;
        break;
      }
  }

  return -1;

  // return count;
  
}

console.log(solution(5, [1,3,1,4,2,9,5,4]));