const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const lines = input.split('\n');

const A = parseFloat(lines.shift(''));
const B = parseFloat(lines.shift(''));
const C = parseFloat(lines.shift(''));

const MEDIA = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);