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



(function() {
  "use strict";
  var input = 'O O O O X O O O O O\nX X O O O O O O X O\nO O O O O O O O O O\nO O O O O O O O O O\nO O O O O X O O O X';


  var isMineOutOfBoundaries = function(mineArray, i, j) {
    if (i >= mineArray.length || i < 0) {
      return true
    }

    if (j >= mineArray[i].length || j < 0) {
      return true
    }

    return false;
  }

  var updateMineAt = function(mineArray, i, j) {

    if (isMineOutOfBoundaries(mineArray, i, j)) {
      return
    }

    if (mineArray[i][j] != "X" || mineArray[i][j] == undefined) {
      if (mineArray[i][j] == "O") {
        mineArray[i][j] = 1;
      } else {
        mineArray[i][j] += 1;
      }
    }
  }

  var createMineArrayFromInput = function(input) {

    var mineArray = [];
    var mineRows = input.split("\n");

    for (var i = 0, max = mineRows.length; i < max; i++) {
      mineArray.push(mineRows[i].split(" "));
    }

    return mineArray;

  }


  var updateAllMines = function(mineArray) {
    for (var i = 0, max = mineArray.length; i < max; i++) {
      for (var j = 0, maxRow = mineArray[i].length; j < maxRow; j++) {
        if (mineArray[i][j] == "O") {
          mineArray[i][j] = 0;
        }
        if (mineArray[i][j] == "X") {
          //right
          updateMineAt(mineArray, i, j + 1);
          //left
          updateMineAt(mineArray, i, j - 1);
          //top
          updateMineAt(mineArray, i - 1, j);
          //bottom
          updateMineAt(mineArray, i + 1, j);
          //topleft
          updateMineAt(mineArray, i - 1, j - 1);
          //topright
          updateMineAt(mineArray, i - 1, j + 1);
          //bottomleft
          updateMineAt(mineArray, i + 1, j - 1);
          //bottomRight
          updateMineAt(mineArray, i + 1, j + 1);
        }
      }
 
    }
  }


  var convertOutputFromMineArray = function(mineArray) {
    for (var i = 0, max = mineArray.length; i < max; i++) {
      mineArray[i] = mineArray[i].join(" ")
    }

    return mineArray.join("\n");
  }

  var mineArray = createMineArrayFromInput(input);
  updateAllMines(mineArray);
  console.log(convertOutputFromMineArray(mineArray))

}());