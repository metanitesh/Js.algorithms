function solution(A, K) {

  const result = []
  const len = A.length;

  

  for (var j=0 ; j<len; j++) {




    let position = j+K;

    if(position>=len){
      position = position - len;
    }

    result[position] = A[j];
    // result[j+k]
  }

  return result;

}

console.log(solution([1,2], 4));