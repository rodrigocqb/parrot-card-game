const cartas = prompt("Quantas cartas você quer no jogo?");
while (cartas % 2 != 0 || cartas < 4 || cartas > 14) {
    cartas = prompt("Insira um número par entre 4 e 14")
}
const pares = cartas / 2;
const jogo = [];
const tipos = [["./img/revertitparrot.gif", 1], ["./img/bobrossparrot.gif", 2], ["./img/explodyparrot.gif", 3], ["./img/fiestaparrot.gif", 4], ["./img/metalparrot.gif", 5], ["./img/tripletsparrot.gif", 6], ["./img/unicornparrot.gif", 7]];
for (let i = 0; i < pares; i++) {
    jogo.push(tipos[i]);
    jogo.push(tipos[i]);
}
jogo.sort(() => {return Math.random() - 0.5});
