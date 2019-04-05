// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    

    const len = A.length;

    let expectedSum = 0;
    let totalSum = 0;
    for (let i=0 ; i<len ; i++) {
        totalSum += A[i];
        
        expectedSum += (i+1);
    }
    
    expectedSum += len+1;

    return (expectedSum- totalSum);
}

