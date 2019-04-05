// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let Deviser;
    if(A === 0){
        Deviser = A
    }else{
        Deviser = A - 1
    }
    
    let total = Math.floor(B/K);
    let before = Math.floor(Deviser/K);


    let val = total-before;

    if(A == 0){
        val++;
    }

    return val;
}
console.log(solution(0,0,11))
