'use strict';

function stringSplitter(string, sep) {
    if (string.length === 0) {
        return '';
    } else if (string[0] === sep) {
        return stringSplitter(string.slice(1), sep);
    } else {
        return string[0] + stringSplitter(string.slice(1), sep);
    }
}
console.log(stringSplitter('02/20/2020','/'))
