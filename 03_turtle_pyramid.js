/*
description: 

Turtles would like to create a pyramid, 
where every turtle in the pile can only be on top of a larger turtle.
The only move they can make is crawling out and then crawling on top.
Since they're having a problem achieving this configuration, 
they ask you to write a program that can tell them in which order to move. You have to advise them, 
so that it takes the least amount of moves to rearrange.

There are N turtles, 
represented by their size as numbers in the interval [1, N]
(1 and N included). For example: N=3 means there are 3 turtles, 
and their sizes are: 1, 2, 3.

Sample input:
5
1
3
2
4

Sample output:
4
3
2
1

reference - http://www.beatmycode.com/challenge/4/show
*/

var input = [4,1,3,2,5];
var length = input.length;

for(var i=length-1; i>=0; i--){
    if(input[i] == length){
        length--
    }
}

for(var i=0; i<length; i++){
    console.log(length-i)
}