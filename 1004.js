var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parent(lines.shift());
var B = parent(lines.shift());

var PROD = A * B;

console.log(`PROD = ${PROD}`);