function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;
  let mod; 
  if(K > len){
    mod = (K%len)
    K = mod;
    // console.log(mod);
  }

  
  const slot = len - K;

  let arr1 =  A.slice(0, slot);
  let arr2 = A.slice(slot, len);

  
  return arr2.concat(arr1);

}

console.log(solution([3,8,9,7,6], 9));