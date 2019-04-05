// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {

  const len = A.length;
  const sum = [A[0]];
  let total = A[0];
  for (let i=1 ; i<len ; i++) {
    total += A[i];
    sum.push(total);
  } 




  let min = Number.POSITIVE_INFINITY;  
  let pos;
  const len2 = sum.length;
  for (let k=1 ; k<len2 ; k++) {
    // console.log(sum[k])
    let counter  = 2
  for (let i=k ; i<len2 ; i++) {
    let previousSum = sum[i-2] || 0;
    let localMin = (sum[i] - previousSum)/(counter);
    counter++;
    // console.log(localMin);  
    if(localMin < min){
      pos = k;
      min = localMin;
    }
  }

  break;
  }
  

  return pos;

}


// console.log(solution([2000, 2, 0, 1, 11000]));
// console.log(solution([1, 2, 3, 4]));
