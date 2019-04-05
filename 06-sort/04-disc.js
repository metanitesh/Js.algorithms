// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function isWithIn(a, b){

  

  let ax = a[0];
  let ay = a[1];
  let bx = b[0];
  let by = b[1];
  let val = false;
  if( (bx >= ax) && (bx <= ay)){
    val = true;
  }

  if( (by >= ax) && (by <= ay)){
    val =  true;
  }

  if(bx <= ax && by >= ay){
    val = true;
  }

  if(bx >= ax && bx <= ay ){
    val = true;
  }

  
  return val;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counter = 0;
  let rediusArray = A.map((redius, index)=>{
    return [index - redius, index + redius];
  })

  const len = rediusArray.length;
  for (let i=0 ; i<len ; i++) {
    
    for (let j = i+1 ; j<len ; j++) {

      let result = isWithIn(rediusArray[i], rediusArray[j]);
      
      if(result){
        counter++;
      }

      if(counter > 10000000){
        return -1
      }

    }
    
  }
  
 
  
  return counter;
}

console.log(solution([1,5,2,1,4,0]));