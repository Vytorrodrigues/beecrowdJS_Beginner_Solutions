var input = reqire("fs").readFileSync("/dev/stdin", "utf-8");
var lines = input.split("\n");

var nome = String(lines.shift(""));
var salario = parseFloat(lines.shift(""));
var vendas = parseFloat(lines.shift(""));

var salarioTotal = (vendas * 0.15) + salario;

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);