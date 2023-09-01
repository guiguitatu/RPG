// const btnesq = document.getElementById("btnsetaesquerda");
// const btndir = document.getElementById("btnsetadireita");
// const btncima = document.getElementById("btnsetacima");
// const btnbaixo = document.getElementById("btnsetacima");

d20 = false;
let posxpers = 1;
let posypers = 6;
// var iniciar = false;
// let nventario = [];
// var mover = true;
let blococima = 5;
let blocobaixo = 7;
let blocoesq = 0;
let blocodir = 1;

mapa = [
    [0,3,0,3,0,0,0,3,0,0,0,3,1,0,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,1,1,0,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,1,0,0,1,0],
    [0,0,8,0,0,0,0,0,0,0,0,0,6,0,0,0,5,5,0,0],
    [0,0,0,0,0,0,0,0,8,0,0,0,6,0,0,0,5,5,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,1,0,0,1,0],
    [1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,4,0,0,0,0,0,0,0,0,9,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]
];

function verposic(){
    if (posypers - 1 >= 0 && posypers - 1 <= 11){
        blococima = posypers;
        blococima -= 1;
    } else {
        console.log(posypers - 1)
    }
    if (posypers + 1 <= 11 && posypers - 1 >= 0){
        blocobaixo = posypers;
        blocobaixo += 1;
    }else {
        console.log(posypers + 1);
    }
    if (posxpers + 1 >= 0 && posxpers + 1 <= 19){
        blocodir = posxpers;
        blocodir += 1;
    }else {
        console.log(posxpers + 1)
    }
    if (posxpers - 1 <= 19 && posxpers - 1 >= 0){
        blocoesq = posxpers;
        blocoesq -= 1;
    }else {
        console.log(posxpers - 1)
    }
}

function mudaposperscima() {
    posypers -= 1;
}
function mudapospersbaixo() {
    posypers += 1;
}
function mudapospersesq() {
    posxpers -= 1;
}
function mudapospersdir() {
    posxpers +=1;
}

function limpaarea(){
    verposic();
    var blocoboneco = document.getElementById(`mapa(${posxpers},${posypers})`);
    if (blococima >= 0 && blococima < 11) {
        console.log("Bloco cima: " + blococima)
        var quacima = document.getElementById(`mapa(${blococima},${posxpers})`);
        console.log(`mapa(${blococima},${posxpers})`)
        var imgcima = quacima.querySelector("img");
        imgcima.src = "trans.png";
    }
    if (blocobaixo >= 0 && blocobaixo < 11) {
        console.log("Bloco baixo: " + blocobaixo)
        var quabaixo = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
        console.log(`mapa(${blocobaixo},${posxpers})`)
        var imgbaixo = quabaixo.querySelector("img");
        imgbaixo.src = "trans.png";
    }
    if (blocoesq > 0 && blocoesq < 19) {
        console.log("Bloco esquerda: " + blocoesq)
        var quaesq = document.getElementById(`mapa(${posypers},${blocoesq})`);
        console.log(`mapa(${posypers},${blocoesq})`)
        var imgesq = quaesq.querySelector("img");
        imgesq.src = "trans.png";
    }
    if (blocodir > 0 && blocodir < 19) {
        console.log("Bloco direita: " + blocodir)
        var quadir = document.getElementById(`mapa(${posypers},${blocodir})`);
        console.log(`mapa(${posypers},${blocodir})`)
        var imgdir = quadir.querySelector("img");
        imgdir.src = "trans.png";
    }
}

function movcima(){
    verposic();
    if (mapa[blococima][posypers] === 0) {
        console.log(`bloco(${blococima},${posxpers})`)
        var blocomuda = document.getElementById(`mapa(${blococima},${posxpers})`);
        const imagem = blocomuda.querySelector("img");
        imagem.src = "personagem3.png";
        var blocopers = document.getElementById(`mapa(${posypers},${posxpers})`);
        var imgboneco = blocopers.querySelector("img");
        imgboneco.src = "trans.png"
        mudaposperscima();
        limpaarea();
    }
}

function movbaixo() {
    verposic();
    if (mapa[blocobaixo][posypers] === 0) {
        console.log(`bloco(${blocobaixo},${posxpers})`)
        var blocomuda = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
        const imagem = blocomuda.querySelector("img");
        blocomuda.style.display = "block";
        imagem.src = "personagem3.png";
        var blocopers = document.getElementById(`mapa(${posypers},${posxpers})`);
        var imgboneco = blocopers.querySelector("img");
        imgboneco.style.display = "none";
        mudapospersbaixo();
        limpaarea();
    }
}
function movesquerda(){
    verposic();
    if (mapa[posypers][blocoesq] === 0) {
        console.log(`bloco(${posypers},${blocoesq})`)
        var blocomuda = document.getElementById(`mapa(${posypers},${blocoesq})`);
        const imagem = blocomuda.querySelector("img");
        blocomuda.style.display = "block";
        imagem.src = "personagem3.png";
        var blocopers = document.getElementById(`mapa(${posypers},${posxpers})`);
        var imgboneco = blocopers.querySelector("img");
        imgboneco.style.display = "none";
        mudapospersesq();
        limpaarea();
    }
}

function movdireita() {
    verposic();
    if (mapa[posypers][blocodir] === 0) {
        console.log(`bloco(${posypers},${blocodir})`)
        var blocomuda = document.getElementById(`mapa(${posypers},${blocodir})`);
        const imagem = blocomuda.querySelector("img");
        imagem.src = "personagem3.png";
        var blocopers = document.getElementById(`mapa(${posypers},${posxpers})`);
        var imgboneco = blocopers.querySelector("img");
        imgboneco.style.display = "none";
        mudapospersdir();
        limpaarea()

    }
}
