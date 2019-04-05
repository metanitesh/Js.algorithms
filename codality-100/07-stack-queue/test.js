let arr = [5,7,8]
let newNum = 7
//[5,6]


const len = arr.length;
for (let i=0 ; i<len ; i++) {
  // console.log(arr[i], newNum);
  if(arr[i] >= newNum){
    console.log(arr[i], newNum);
    arr.splice(i)
    arr.push(newNum);
    break;
  }
  
}
console.log(arr)