/*

Description:
Calculate the number of mines in the surrounding cells for every cell in the field.

Input format: 
Columns are separated by spaces, rows are separated by newlines ("\n"). 
"X" marks a mine, "O" marks a mine-free field.

Output format: 
"X" fields are to be left as they are. For every field containing "O", 
you are to calculate the number of mines surrounding that field.

Sample input:
O O O O X O O O O O
X X O O O O O O X O
O O O O O O O O O O
O O O O O O O O O O
O O O O O X O O O O

Sample output:
2 2 1 1 X 1 0 1 1 1
X X 1 1 1 1 0 1 X 1
2 2 1 0 0 0 0 1 1 1
0 0 0 0 1 1 1 0 0 0
0 0 0 0 1 X 1 0 0 0

reference: 
http://www.beatmycode.com/challenge/3/show

*/

var input = 'O O O O X O O O O O\nX X O O O O O O X O\nO O O O O O O O O O\nO O O O O O O O O O\nO O O O O X O O O O'


var rows = input.split("\n");
var mineArray = [];

for(var i=0, max= rows.length; i<max; i++){
    mineArray.push(rows[i].split(" "));
}



for(var i=0, max=mineArray.length; i<max; i++){
    var currentRow = mineArray[i];
    // console.log(currentRow);
    for (var j=0, rowMax= currentRow.length; j<rowMax; j++){
        // console.log(currentRow[j])
        var priviousRow = mineArray[i-1] || [];
        var nextRow = mineArray[i+1] || [];

        var currentCell = currentRow[j]

        var leftCell = currentRow[j-1] || undefined;
        var rightCell = currentRow[j+1] || undefined;
        var topCell = priviousRow[j] || undefined;
        var bottomCell = nextRow[j] || undefined;

        var topLeft = priviousRow[j-1] || undefined;
        var topRight = priviousRow[j+1] || undefined;

        var bottomLeft = nextRow[j-1] || undefined;
        var bottomRight= nextRow[j+1] || undefined;

        if(currentCell == "O"){

        }
        if(currentCell != "X"){
            // currentRow[j] = 1;
           
           // console.log(leftCell);
           if(leftCell != undefined && leftCell != "X" ) {
              
              if(leftCell == "O"){
                currentRow[j-1] = 0; 
              }
               currentRow[j-1] = parseInt(currentRow[j-1]) + 1 ;
               
           }

           if(leftCell != undefined && leftCell != "X" ) {
              
              if(leftCell == "O"){
                currentRow[j-1] = 0; 
              }
               currentRow[j-1] = parseInt(currentRow[j-1]) + 1 ;
               
           }

           // if(rightCell != undefined && rightCell != "X" ) {
           //      currentRow[j+1];
           //      console.log(currentRow)
           // }

           // if(topCell != undefined && topCell != "X" ) {
           //      topCell += 1;
           // }

           // if(bottomCell != undefined && bottomCell != "X" ) {
           //      bottomCell += 1;
           // }

           // if(topLeft != undefined && topLeft != "X" ) {
           //      topLeft += 1;
           // }

           // if(topRight != undefined && topRight != "X" ) {
           //      topRight += 1;
           // }

           // if(bottomLeft != undefined && bottomLeft != "X" ) {
           //      bottomLeft += 1;
           // }

           // if(bottomRight != undefined && bottomRight != "X" ) {
           //      bottomRight += 1;
           // }

        }    
    }
    
}
console.log(mineArray)
