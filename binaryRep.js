console.log('binary')
function binary(num) {
  if (num === 0) {
      return '0';
  }
  const dividedNum = Math.floor(num/2);
  const remainder = num % 2;
  if (dividedNum === 0) {
      return `${remainder}`;
  }
  return binary(dividedNum) + remainder.toString();
};

console.log(binary(25));