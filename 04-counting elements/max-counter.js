function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = new Array(N).fill(0);
  const len = A.length;
  let maxVal = 0;

  for (let i = 0; i < len; i++) {


    if (A[i] > N) {
      result = new Array(N).fill(maxVal);
      continue;
    }

    let index = A[i] - 1;
    result[index] += 1;

    if (result[index] > maxVal) {
      maxVal = result[index];
    }


  }

  return result;
}

solution(5, [3, 4, 4, 6, 1, 4, 4]);