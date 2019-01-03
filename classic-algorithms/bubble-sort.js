const inputArray = [4,2,3,1];

function transform(input){

  const len = input.length;
  for (let j = 0; j < len - 1; j++) {
    let flag = false;
    if(flag === true){
      break;
    }
    for (let i=0 ; i<len-1-j; i++) {
      if(input[i] > input[i+1] ){
        const temp = input[i+1];
        input[i+1] = input[i];
        input[i] = temp;
        flag = true;
      }
    }
  }

  return input;
}

const result = transform(inputArray);
console.log(result);

