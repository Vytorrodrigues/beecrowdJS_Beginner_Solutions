const input = require('fs').readFileSync('/dev/stdin', 'utf-80');
const lines = input.split('\n');

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());

const MEDIA = (A * 3.5 + B * 7.5) / 11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
