let cartas = prompt("Quantas cartas você quer no jogo?");
while (cartas % 2 != 0 || cartas < 4 || cartas > 14) {
    cartas = prompt("Insira um número par entre 4 e 14")
}
const pares = cartas / 2;
const jogo = [];
const tipos = [["./img/revertitparrot.gif"], ["./img/bobrossparrot.gif"], ["./img/explodyparrot.gif"], ["./img/fiestaparrot.gif"], ["./img/metalparrot.gif"], ["./img/tripletsparrot.gif"], ["./img/unicornparrot.gif"]];
for (let i = 0; i < pares; i++) {
    jogo.push(tipos[i]);
    jogo.push(tipos[i]);
}
jogo.sort(() => { return Math.random() - 0.5 });
for (let i = 0; i < jogo.length; i++) {
    const tabuleiro = document.querySelector(".tabuleiro");
    tabuleiro.innerHTML += `
    <div class="carta" onclick="viraCarta(this)">
        <div class="frente">
            <img src="./img/front.png">
        </div>
        <div class="traseiro escondido">
            <img src=${jogo[i]}>
        </div>
    </div>`
}
let cliques = 0;
let primeira;
let segunda;
let duasViradas = false;
function viraCarta(elemento) {
    if (duasViradas === false) {
        if (elemento.querySelector(".traseiro").classList.contains("escondido")===false){
            return;
        }
        if (cliques % 2 == 0) {
            primeira = elemento;
            primeira.querySelector(".frente").classList.add("escondido");
            primeira.querySelector(".traseiro").classList.remove("escondido");
            cliques++;
        } else {
            segunda = elemento;
            segunda.querySelector(".frente").classList.add("escondido");
            segunda.querySelector(".traseiro").classList.remove("escondido");
            if (primeira.innerHTML == segunda.innerHTML) {
                primeira = undefined;
                segunda = undefined;
            } else {
                duasViradas = true;
                setTimeout(() => {
                    primeira.querySelector(".traseiro").classList.add("escondido");
                    primeira.querySelector(".frente").classList.remove("escondido");
                    segunda.querySelector(".traseiro").classList.add("escondido");
                    segunda.querySelector(".frente").classList.remove("escondido");
                    duasViradas = false;
                }, 1000);
            }
            cliques++;
            console.log(cliques)
        }
    }
    if (document.querySelectorAll(".frente.escondido").length == jogo.length) {
        setTimeout(() => {
            alert(`Você ganhou em ${cliques} jogadas!`);
        },300);
    }
}