'use strict';

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basik', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis) {
    console.log(number * basis);
}
