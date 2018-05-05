var input = "Nitesh";
var inputArr = input.split("");
var startIndex = 0;

var getSpliceIndex = function(addition, arrayLength){
    
    var nextPosition = getSpliceIndex.lastPosition + addition;

    if(nextPosition >= arrayLength){
        nextPosition = nextPosition - arrayLength;
    }

    getSpliceIndex.lastPosition = nextPosition;
    return nextPosition;

    
    
}

getSpliceIndex.lastPosition = 0;

while(inputArr.length>1){
    
    
    var spliceIndex = getSpliceIndex(3, inputArr.length);
    var spliced = inputArr.splice(spliceIndex, 1);
    
    
    


}
    
// }
// console.log((inputArr.splice([startIndex+3], 1)))
console.log(inputArr);
