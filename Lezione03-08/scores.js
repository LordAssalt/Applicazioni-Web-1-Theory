"use strict";

/*
Define an array with all your scores in chronological order. For the moment:
Embed the scores directly in the source code.
Ignore the course name, credits, and date.
Ignore the 30L.
Duplicate the array, but:
Eliminate the two lowest-ranking scores.
Add two new scores, in the end, equal to the (rounded) average of the existing scores.
Print both arrays, comparing the scores before and after the "improvement," and showing the averages in both cases.
*/

const myScores =[30,28,26,21,22,23,19,28,23];

let myScores2 = [...myScores];
let avg=0;

myScores2.sort( (a,b) => (a-b) );

myScores2.shift();
myScores2.shift();

for (const i of myScores2){
   avg=avg+i;
}

avg = avg/myScores2.length;

console.log(avg);
avg = Math.round(avg);

myScores2.push(avg);
myScores2.push(avg);
console.log(myScores);
console.log(myScores2);



