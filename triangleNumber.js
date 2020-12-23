'use strict';

function triangleNum(num){
  if(num===1){
    return 1;
  }
  return num + triangleNum(num-1);
}

console.log(triangleNum(1));
console.log(triangleNum(2));
console.log(triangleNum(3));
console.log(triangleNum(4));
console.log(triangleNum(5));
console.log(triangleNum(6));
console.log(triangleNum(7));
console.log(triangleNum(8));
console.log(triangleNum(9));