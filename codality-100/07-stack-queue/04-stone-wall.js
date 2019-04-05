const input = [8, 8, 5, 7, 9, 8, 7, 4, 8];
const stack = [];
let counter = 0;

//similar
//big
//small
 //until the same or bigger.


 const len = input.length;
 
 for (let i=0 ; i<len ; i++) {
  inputNumber = input[i];
  // console.log(stack, inputNumber);

  if(stack.length === 0){
    stack.push(inputNumber);
    counter++;
    continue;
  }

  lastNumber = stack[stack.length - 1];
  if(inputNumber === lastNumber){
    continue;
  }

  if(inputNumber > lastNumber){
    stack.push(inputNumber);
    counter++;
    
  }

  if(inputNumber < lastNumber){
    const len = stack.length;
    for (let j=0 ; j<len ; j++) {

      // console.log(stack[j], inputNumber);
      if(stack[j] === inputNumber){
        stack.splice(j+1);
        break;
      }

      if(stack[j] > inputNumber){
        stack.splice(j);
        stack.push(inputNumber);
        counter++;
        break;
      }
    }
  }
  

  return counter;
  

 }

//  console.log(stack, counter)