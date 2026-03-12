var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

//Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

var A = parseFloat(lines.shift(''));
var B = parseFloat(lines.shift(''));
var C = parseFloat(lines.shift(''));

var MEDIA = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);