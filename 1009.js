const input = reqire("fs").readFileSync("/dev/stdin", "utf-8");
const lines = input.split("\n");

const nome = String(lines.shift(""));
const salario = parseFloat(lines.shift(""));
const vendas = parseFloat(lines.shift(""));

const salarioTotal = (vendas * 0.15) + salario;

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);