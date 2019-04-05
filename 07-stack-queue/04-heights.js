// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {

    let stack = [H[0]];
    let counter = 1;
    // console.log(H)

    const len = H.length;

    for (let i=1 ; i<len ; i++) {
        
        // console.log(stack);


        let lastStack = stack[stack.length - 1];
        
        if(lastStack === H[i]){
            continue;
        }

        if(H[i] > lastStack ){
            counter++;
            stack.push(H[i])
        }

        if(H[i] < lastStack){

            let position;
            for (let j=0 ; j<stack.length ; j++) {
                if(stack[j] < H[i]){
                    continue;
                }

                if(stack[j] === H[i]){
                    position = j
                    break;
                }

                if(stack[j] > H[i]){
                    counter++;
                    position = j;
                    break;
                }
            }

            // console.log("---", position);

            stack.length = position;
            stack.push(H[i]);
            // console.log(stack);

        }

        // console.log(stack, counter);

        // stackLen = stack.length;
        // for (let j=len -1; j>=0 ; j--) {
        //     console.log(stack[j])
        // }

        // console.log(H[i]);
        // break;
    }

    return counter;
    // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution([8,8,5,7,9,8,7,4,8]));