// ---  Desafio Classificador de Nível de Herói (JavaScript) ---

// 1. Variáveis: Armazenando o nome e a quantidade de experiência (XP) do herói.
const nomeHeroi = "Super Zekka";
let xpHeroi = 12000; // Altere este valor para testar diferentes níveis!

let nivel = ""; // Variável para armazenar o nível do herói.

// 2. Estruturas de Decisão (If/Else If/Else): Classificando o herói com base no XP.
// Utilizamos operadores de comparação (>, <, >=, <=) e lógicos (&&).

if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else { // Este 'else' captura qualquer valor maior ou igual a 10.001
    nivel = "Radiante";
}

// 3. Laço de Repetição 
// Vamos usá-lo para repetir a mensagem final 3 vezes no console.

let contador = 0;
while (contador < 1) { 
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
    contador++;
}

'/*'