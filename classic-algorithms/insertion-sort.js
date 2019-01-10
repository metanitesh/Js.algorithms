const inputArray = [8,2,4,1,5];

function insertionSort(input){

  const len = input.length;
  for (let i=1 ; i<len ; i++) {

    for (let j=i ; j>=0 ; j-- ) {
      if(input[j] < input[j-1] ){
        const temp = input[j];
        input[j] = input[j-1];
        input[j-1] = temp;
      }
    }
  }


    return input;
}


const result = insertionSort(inputArray);
console.log(result);
