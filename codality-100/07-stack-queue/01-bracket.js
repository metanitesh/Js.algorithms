// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {


  function findOpposite(val){
    if(val === "{"){
      return "}";
    }

    if(val === "["){
      return "]";
    }

    if(val === "("){
      return ")";
    }

    if(val === "}"){
      return "{";
    }

    if(val === "]"){
      return "[";
    }

    if(val === ")"){
      return "(";
    }



  }

  // write your code in JavaScript (Node.js 8.9.4)
  
  S = S.split("");
  console.log(S);
  const len = S.length;
  for (let i=0 ; i<S.length ; i++) {
    
    if(S[i+1] === findOpposite(S[i])){
      S.shift();
      S.shift();
    }

    if(S[S.length-1-i] === findOpposite(S[i])){
      S.shift();
      S.pop();
    }
  } 

  console.log(S);


  // return 1;


}

// var a = [1,2,3];

// console.log(a.shift())
// console.log(a)
console.log(solution("{()}"))



// console.log(solution("({{({}[]{})}}[]{})"));
