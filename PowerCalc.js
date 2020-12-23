'use strict';
function powerCalculator(base,exp){
    if (exp<1){
    return console.log('exponent should be >==0')
    }
   const solution = base**exp
   return console.log(solution)

}
powerCalculator(10,-2)
powerCalculator(10,2)