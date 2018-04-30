var input = "niteshshhs";


var reverseInput = function(input, breakLength){
	
	var reverseInputArray = [];

	var breakLength = breakLength-1;
	var inputArray = input.split("");

	var count = 0;	
	var arrayIndex = 0
	var arrayStartingPoint = 0;
	var edgeItems = inputArray.splice(-(inputArray.length % (breakLength+1)))
	

	inputArray.forEach((val, index) => {
		
		reverseInputArray[arrayStartingPoint + (breakLength-arrayIndex)] = val;

		if(count === breakLength){
			count = 0;
			arrayIndex = 0;
			arrayStartingPoint = index+1;

		} else{
			arrayIndex++	
			count++
		}

		
	})

	if(edgeItems.length >0 ){
	   reverseInputArray.concat(edgeItems.reverse());
	}

	return reverseInputArray

}

var output = reverseInput(input, 3)
console.log(output);;