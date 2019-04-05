// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let binary = N.toString(2);

  // console.log(binary);
  const len = binary.length;
  let lastPosition = undefined;
  let maxCount = 0

  for (let i=0 ; i<len ; i++) {
    
    if(binary[i] === '1'){
      
      if(lastPosition === undefined){
        lastPosition = i;
      } else{
        // console.log(lastPosition, i);
        newMaxCount = i - lastPosition;

        // console.log(newMaxCount,  maxCount)
        if(newMaxCount > maxCount){
          maxCount = newMaxCount;
        }
        lastPosition = i;
      }
    }
  }

  let finalCount = maxCount - 1;
  if(finalCount < 0){
    return 0;
  }else{
    return finalCount;
  }

}

// console.log(solution(1041));