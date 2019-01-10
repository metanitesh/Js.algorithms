function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let indexTotal = 0;
    let realTotal = 0;
    const len = A.length;
    let result = [];
    for (let i=0 ; i<len ; i++) {

      if(result[A[i]]){
        return 0;
      }else{
        result[A[i]] = A[i];
      }

      indexTotal += i+1;
      realTotal += A[i];
    }

    // console.log(indexTotal, realTotal);

    if(indexTotal === realTotal){
      return 1;
    }else{
      return 0;
    }
}

console.log(solution([1,2,1,4]));