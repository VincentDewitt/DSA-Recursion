'use strict';

function countSheep(numOfSheep){
  if (numOfSheep<1){
    return console.log('All Sheep Jumped over the Fence');
  }
  console.log(numOfSheep+' Another Sheep Jumped Over The Fence');
  countSheep(numOfSheep-1);
}

console.log('running with 4');
countSheep(4);
console.log('running with 10');
countSheep(10);
console.log('running with -1');
countSheep(-1);