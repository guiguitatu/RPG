const object = document.getElementById("movableObject");

d20 = false;
posxpers = 6;
posypers = 0;
iniciar = false;
inventario = [];
mover = true;
 let arma, monstro, posxbaixo, posxcima, posydir, posyesq;
mapa = [
    [0,3,0,3,0,0,0,3,0,0,0,3,1,0,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,1,1,0,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0,0,1,0],
    [0,0,8,0,0,0,0,0,0,0,0,0,2,0,0,0,5,5,0,0],
    [0,0,1,1,0,0,0,0,8,0,0,0,2,0,0,0,5,5,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,2,0,0,1,0,0,1,0],
    [1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,4,0,0,0,0,0,0,0,0,9,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]
];

function verposic(){
    if (posxpers - 1 != ''){
        posxcima = posxpers - 1;
    }
    if (posxpers + 1 != ''){
        posxbaixo = posxpers + 1;
    }
    if (posypers + 1 != ''){
        posydir = posypers + 1;
    }
    if ( posypers - 1 != ''){
        posyesq = posypers - 1;
    }
}

function movcima(){
    verposic();
    if (posxcima === 0){
        document.getElementById()
    }
}

function movbaixo() {
    verposic();
}
function movesquerda(){
    verposic();
}

function movdireita() {
    verposic();
}
