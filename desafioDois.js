// ---  Calculadora de Partidas Ranqueadas (JavaScript) ---

// Variáveis: Definindo as entradas (vitórias e derrotas)
const vitoriasHeroi = 155;  // Quantidade de Vitórias do Jogador
const derrotasHeroi = 17; // Quantidade de Derrotas do Jogador

let nivelHeroi = "";     // Variável para armazenar o nível

// Funções: Função para calcular o saldo e determinar o nível.
/**
 * Calcula o saldo de vitórias e determina o nível do herói.
 * @param {number} vitorias - O número total de vitórias.
 * @param {number} derrotas - O número total de derrotas.
 * @returns {number} O saldo de vitórias (vitórias - derrotas).
 */
function calcularNivelRank(vitorias, derrotas) {
    // Operadores: Calculando o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Estruturas de Decisão (If/Else If/Else): Classificando o herói com base no saldo de vitórias.
    // Usamos o saldo de vitórias para definir o nível.
    
    if (saldoVitorias < 10) {
        nivelHeroi = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivelHeroi = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivelHeroi = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivelHeroi = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivelHeroi = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivelHeroi = "Lendário";
    } else { // Captura saldo maior ou igual a 101
        nivelHeroi = "Imortal";
    }

    return saldoVitorias;
}

// Chamando a função e armazenando o resultado (saldo) em uma variável.
// O nível é determinado e armazenado na variável 'nivelHeroi' dentro da função.
let saldoFinal = calcularNivelRank(vitoriasHeroi, derrotasHeroi);

// Laço de Repetição (Manutenção do Requisito):
// Usamos o laço para exibir a saída do programa.

let i = 0;
do {
    // Saída: Exibindo a mensagem final.
    console.log(`O Herói tem de saldo de ${saldoFinal} e está no nível de ${nivelHeroi}`);
    i++;
} while (i < 1); // Roda apenas uma vez para cumprir o requisito de laço.
