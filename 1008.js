const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const lines = input.split('\n');

const NUMBER = parseInt(lines.shift(''));
const horaTrabalho = parseInt(lines.shift(''));
const valorHora = parseFloat(lines.shift(''));
const SALARY = (horaTrabalho * valorHora);

constole.log(`NUMBER = ${NUMBER}`);
constole.log(`SALARY = U$ ${SALARY.toFixed(2)}`);