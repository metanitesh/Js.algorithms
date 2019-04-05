
function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  constDict = {
    A: 1,
    C: 2,
    G: 3,
    T: 4 
  }

  const totalDna=[[0,0,0,0]];
  let currentDna = [];

  const len = S.length;
  for (let i=0 ; i<len ; i++) {

    currentDna = [...totalDna[i]]
  
    switch (S[i]){
      case 'A':
       currentDna[0] = currentDna[0]+1 || 1;
        break;
      case 'C': 
      currentDna[1] = currentDna[1]+1 || 1;
        break;
      case 'G': 
      currentDna[2] = currentDna[2]+1 || 1;
        break;
      case 'T': 
      currentDna[3] = currentDna[3]+1 || 1;
        break;

    }

    totalDna.push(currentDna);

  }

  console.log(totalDna);

  const len2 = P.length;
  const result = [];
  for (let i=0 ; i<len2 ; i++) {
    
    const PDna = totalDna[P[i]]
    const QDna = totalDna[Q[i] + 1]


    if(QDna[0]> PDna[0]){
      result.push(1);
      continue;
    }

    if(QDna[1]> PDna[1]){
      result.push(2);
      continue;
    }

    if(QDna[2]> PDna[2]){
      result.push(3);
      continue;
    }
    
    if(QDna[3]> PDna[3]){
      result.push(4);
      continue;
    }
    

  }
  return result;

}


const S = 'CAGCCTA';
const P = [0];
const Q = [0];

console.log(solution(S, P, Q));
