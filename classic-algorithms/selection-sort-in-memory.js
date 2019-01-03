const inputArray = [3, 6, 2, 8];

function transform(input) {
  const len = input.length;
  for(j=0; j<len; j++){
    let min = input[j];
    for(let i=j; i<len; i++){
      if(input[i]<min){
        min = input[i];
      }
    }
    
    const index = input.indexOf(min);
    input[index] = input[j];
    input[j] = min;
  }
  return input;  
}

const result = transform(inputArray);
console.log(result);
