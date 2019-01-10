const inputArray = [4,1,2,3,8,3,9,10];


// function recursiveSome(...args) {
//       if(args.length <= 2){
//         return args[0] + args[1];
//       }

//       return args[0] + recursiveSome(...args.slice(1));
// }


// const globalArray = [1,2,4,4];
// console.log(recursiveSome(1,2,4,5));


function mergeSort(input){
  
  // console.log(input);
  len = input.length;
  
  if(len<=2){
    if(input[1] < input[0]  ){
      const temp = input[1];
      input[1] = input[0];
      input[0] = temp
    }
    return input;
  }

  arr1 = input.slice(0, len/2);
  arr2 = input.slice(len/2, len);
  
  // console.log(arr1, arr2)

  // mergeSort(arr1);
  return mergeSort(arr2);

}

console.log(mergeSort(inputArray));



