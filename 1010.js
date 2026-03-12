const input = require("fs").readFileSync("/dev/stdin", "utf-8");
const input = lines.split("\n");

//Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

// Entrada
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

peca1 = [i];
peca2 = [i];
for (let i = 0; i < 4; i++){

    const peca1 = new Array(lines.shift(""));

};

for (let i = 0; i < 4; i++){

    const peca2 = new Array(lines.shift(""));

};


const calcule = (peca1[1] *peca1[2]) + (peca2[1] *peca2[2]);

const valorPagar = parseFloat(peca1 * unitarioPeca1) + parseFloat(peca2 * unitarioPeca2);

console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`);