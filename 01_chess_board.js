/*

Print to the standard output a chessboard of size N,M where N is the number of columns and M is the number of rows.
You have to print a 0 where the board is white and a 1 otherwise. Index (0,0) is white and it is the top left cell in the produced output.

Sample input:
7,4

Sample output:
0101010
1010101
0101010
1010101

reference - http://www.beatmycode.com/challenge/1/show

*/

console.time("chessProblem");
var input = [7,4];

var noOfRows = input[0];
var noOfColumns = input[1];
var evenRow = "";
var oddRow = "";
var board = [];

for (var i = 0, max = noOfRows; i < max; i++) {
  if (i % 2 == 0) {
    oddRow += "0" ;
    evenRow += "1" ;

  } else {
    oddRow += "1" ;
    evenRow += "0" ;
  }

}

for(var i=0, max= noOfColumns; i<max; i++){
    if(i%2 == 0){
        board.push(oddRow);
    }else{
        board.push(evenRow);
    }
}

;
console.log(board.join("\n"))
console.timeEnd("chessProblem");

