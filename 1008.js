var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

var NUMBER = parseInt(lines.shift(''));
var horaTrabalho = parseInt(lines.shift(''));
var valorHora = parseFloat(lines.shift(''));
var SALARY = (horaTrabalho * valorHora);

console.log(`NUMBER = ${NUMBER}`);
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`);