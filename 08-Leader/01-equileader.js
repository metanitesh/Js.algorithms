// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function findLeader(arr){


  if(arr.length === 1){
    return arr[0];
  }

  arr.sort((a,b) => a-b);
  const len = arr.length;

  // console.log(arr);

  const center = Math.ceil(len/2);
  possibleLeader = arr[center-1];

  // console.log(center, possibleLeader)

  let counter= 0;

  // const len = arr.length;
  for (let i=0 ; i<len ; i++) {
    if(arr[i] === possibleLeader){
      counter++;
    }
  } 

  // console.log(counter);

  if(counter > len/2){
    return possibleLeader;
  }else{
    false;
  }


  return false;
  // for (let i=0 ; i<len ; i++) {
    
  // }

}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;
  const result = {};
  for (let i=1 ; i<len ; i++) {
    
    let arr1 = A.slice(0,i);
    let arr2 = A.slice(i);

    // console.log(arr1, arr2)
    leader1 = findLeader(arr1);
    leader2 = findLeader(arr2);

    // console.log(leader1, leader2)

    if(leader1 === false || leader2 === false){
      continue;
    }

    if(leader1 === leader2){
      if(result[leader1]){
        result[leader1] += 1;
      }else{
        result[leader1] = 1;
      }
    }
    // break;

  } 


  let max = 0;
  for(i in result){
    if(result[i] > max){
      max = result[i]
    }
  }
  return max;

}

console.log(solution( [1, 2, 1, 1, 2, 1] ));