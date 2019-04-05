function solution(A){

  let len = A.length;
  let count = 0;
  let pos = 0;
  for (let i=0 ; i<len ; i++) {
    if(A[pos] === A[i]){
      count++
    }else{
      count--
      if(count === 0){
        pos = i;
        count++
      }
    }
  }

  let candidate = A[pos];
  let equileader = 0;

  let E = [];
  let N = [];

  let ec= 0;
  let nc= 0;

  len = A.length;
  for (let i=0 ; i<len ; i++) {
    if(A[i] === candidate){
      ec++
    }else{
      nc++;
    }

    E[i] = ec;
    N[i] = nc;

  }
  
  len = A.length;
  for (let i=0 ; i<len ; i++) {
    if(E[i] > N[i] && ((nc - N[i]) < (ec - E[i]))){
      equileader++;
    }
  }

  return equileader;
}

solution([4,3,4,4,4,2]);