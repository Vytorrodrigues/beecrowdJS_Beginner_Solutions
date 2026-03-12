const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const A = parent(lines.shift());
const B = parent(lines.shift());

const PROD = A * B;

console.log(`PROD = ${PROD}`);