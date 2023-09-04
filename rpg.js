let d20 = 0;
let posxpers = 2;
let posypers = 7;
let blococima = 5;
let blocobaixo = 7;
let blocoesq = 0;
let blocodir = 1;
var cura = 0;
let chaveboss = false;
var mover = true;
let vidainimigo = 0;

mapa = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,3,0,3,0,0,0,3,0,0,0,3,1,0,0,0,0,0,0,0,1],
    [1,0,0,4,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,1,0,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,5,5,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,5,5,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,1,0,0,1,0,1],
    [1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [1,0,10,0,0,0,0,0,0,0,0,9,0,1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function verposic(){
    if (posypers - 1 >= 0 && posypers - 1 <= 13){
        blococima = posypers;
        blococima -= 1;
    } else {
        console.log(posypers - 1)
    }
    if (posypers + 1 <= 13 && posypers - 1 >= 0){
        blocobaixo = posypers;
        blocobaixo += 1;
    }else {
        console.log(posypers + 1);
    }
    if (posxpers + 1 >= 0 && posxpers + 1 <= 21){
        blocodir = posxpers;
        blocodir += 1;
    }else {
        console.log(posxpers + 1)
    }
    if (posxpers - 1 <= 21 && posxpers - 1 >= 0){
        blocoesq = posxpers;
        blocoesq -= 1;
    }else {
        console.log(posxpers - 1)
    }
}

function atualizainventario(){
    let inv = document.getElementById('inventario')

    inv.innerHTML = `
    Espada longa europeia
    \nPoções de cura: ${cura}\n
    `
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
    if(mover === true) {
        verposic();
        if (mapa[blococima][posxpers] === 0 || mapa[blococima][posxpers] === 2) {
            console.log(`bloco(${blococima},${posxpers})`)
            var blocomuda = document.getElementById(`mapa(${blococima},${posxpers})`);
            const imagem = blocomuda.querySelector("img");
            imagem.src = "personagem3.png";
            var blocopers = document.getElementById(`mapa(${posypers},${posxpers})`);
            var imgboneco = blocopers.querySelector("img");
            imgboneco.src = "trans.png"
            mudaposperscima();
            limpaarea();
            atualizainventario()
        }
    }
}

function movbaixo() {
    if (mover === true) {
        verposic();
        if (mapa[blocobaixo][posxpers] === 0 || mapa[blocobaixo][posxpers] === 2) {
            console.log(`bloco(${blocobaixo},${posxpers})`)
            var blocomuda = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
            const imagem = blocomuda.querySelector("img");
            imagem.src = "personagem3.png";
            var blocopers = document.getElementById(`mapa(${posypers},${posxpers})`);
            var imgboneco = blocopers.querySelector("img");
            mudapospersbaixo();
            limpaarea();
            atualizainventario()
        }
    }
}
function movesquerda(){
    if(mover === true) {
        verposic();
        if (mapa[posypers][blocoesq] === 0) {
            console.log(`bloco(${posypers},${blocoesq})`)
            var blocomuda = document.getElementById(`mapa(${posypers},${blocoesq})`);
            const imagem = blocomuda.querySelector("img");
            imagem.src = "personagem3.png";
            var blocopers = document.getElementById(`mapa(${posypers},${posxpers})`);
            var imgboneco = blocopers.querySelector("img");
            imgboneco.src = "trans.png"
            mudapospersesq();
            limpaarea();
            atualizainventario()
        }
    }
}

function movdireita() {
    if(mover === true) {
        verposic();
        if (mapa[posypers][blocodir] === 0) {
            console.log(`bloco(${posypers},${blocodir})`)
            var blocomuda = document.getElementById(`mapa(${posypers},${blocodir})`);
            const imagem = blocomuda.querySelector("img");
            imagem.src = "personagem3.png";
            var blocopers = document.getElementById(`mapa(${posypers},${posxpers})`);
            var imgboneco = blocopers.querySelector("img");
            imgboneco.src = "trans.png"
            mudapospersdir();
            limpaarea();
            atualizainventario();

        }
    }
}
