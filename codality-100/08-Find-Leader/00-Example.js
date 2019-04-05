let input = [1, 2, 2, 2, 4, 2, 4 ,2]
const stack = [];

const len = input.length;
for (let i = 0; i < len; i++) {

  if(stack.length === 0){
    stack.push(input[i])
    continue;
  }

  if( stack[stack.length - 1] === input[i]){
    stack.push(input[i])
  }else{
    stack.pop();
  }
}

console.log(stack);
