const inputArray = [3, 6, 2, 8];

function transform(input) {
  const result = []
  

  while (inputArray.length > 1) {
    
    const len = input.length;
    let min = input[0];


    for (let i = 0; i < len; i++) {
      if (input[i] < min) {
        min = input[i];
      }
    }

    const index = inputArray.indexOf(min);
    inputArray.splice(index, 1)

    result.push(min);
  }

  return result.concat(inputArray);
}


const result = transform(inputArray);
console.log(result);
