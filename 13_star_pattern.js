var drawStar = function(input){
	var inputOffest = input - 2;
	var i=1;
	while(i<=inputOffest){
		console.log( " ".repeat(input+1-i)+"*"+"-".repeat(i*2) +"*"+" ".repeat(input+1-i))
		i++;
	}
}

drawStar(3)