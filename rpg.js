let d20 = 0;
let d20crit = 0;
let d6 = 0;
let posxpers = 2;
let posypers = 7;
let blococima = 5;
let blocobaixo = 7;
let blocoesq = 0;
let blocodir = 1;
let cura = 1;
let chaveboss = false;
let chavebau = false;
let mover = true;
let arma = false
let danopers = 0;
let defesapers = 10;
let danoinimigo;
let danoboss;
let defesamini = 7;
let defesaboss = 10;
let defesainimigo = 5;
let defesamimico = 5;
let vidapers = 100;
let vidainimigo = 20;
let vidaminiboss = 40;
let vidaboss = 100;
let vidamimico = 20;
let cont = 0;
let encontrouboss = false;
let animporta = false;
let atacou = false;
let baudun = false;
let baumim = false;
let tipoinimigo;
let d;
let cima = '';
let baixo = '';
let arraycrit = [];
let cheat;


mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 4, 0, 0, 4, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 0, 0, 4, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 4, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 1],
    [1, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

if (localStorage.getItem('cheat') === "true") {
    cheat = true;
    console.log(cheat)
} else {
    cheat = false;
    console.log(cheat)
}    

document.addEventListener('keydown', function (event) {
    let bool = document.getElementById("btnscombate")
    let chet = document.getElementById("divcheat");
    if (event.key === "ArrowLeft" || event.key === "a" && mover === true && (chet.style.display == "none" || chet.style.display == "")) {
        anda("esquerda");
    } else if (event.key === "ArrowRight" || event.key === "d" && mover === true && (chet.style.display == "none" || chet.style.display == "")) {
        anda("direita");
    } else if (event.key === "ArrowUp" || event.key === "w" && mover === true && (chet.style.display == "none" || chet.style.display == "")) {
        anda("cima");
    } else if (event.key === "ArrowDown" || event.key === "s" && mover === true && (chet.style.display == "none" || chet.style.display == "")) {
        anda("baixo");
    }
    if (cheat && event.key === "t"){        
        if (chet.style.display == "flex"){
            chet.style.display = "none";
        } else if (chet.style.display == "none" || chet.style.display == ""){
            chet.style.display = "flex";
        }
    }

    if (bool.style.visibility === "visible") {
        if (event.key === "z") {
            ataque();
        } else if (event.key === "x") {
            defesa();
        } else if (event.key === "c") {
            curase();
        }
    }
});

function verposic() {
    if (posypers - 1 >= 0 && posypers - 1 <= 13) {
        blococima = posypers;
        blococima -= 1;
    } else {
        console.log(posypers - 1)
    }
    if (posypers + 1 <= 13 && posypers - 1 >= 0) {
        blocobaixo = posypers;
        blocobaixo += 1;
    } else {
        console.log(posypers + 1);
    }
    if (posxpers + 1 >= 0 && posxpers + 1 <= 21) {
        blocodir = posxpers;
        blocodir += 1;
    } else {
        console.log(posxpers + 1)
    }
    if (posxpers - 1 <= 21 && posxpers - 1 >= 0) {
        blocoesq = posxpers;
        blocoesq -= 1;
    } else {
        console.log(posxpers - 1)
    }
}

function rolard20() {
    d20 = Math.floor((Math.random() * 20) + 1);
    console.log(`Você tirou ${d20} no D20`)
}

function crit() {
    for (let dado = 0; dado < 5; dado++) {
        d = Math.floor((Math.random() * 20) + 1);
        arraycrit.push(d);
    }
    arraycrit.sort(function (a, b) { return b - a });
    console.log(arraycrit)
    d20crit = arraycrit[0]
    console.log(d20crit)
    console.log(`Você tirou ${d20crit} no D20`)
}

function rolard6() {
    d6 = Math.floor((Math.random() * 6) + 1)
    console.log(`VOcê tirou ${d6} no D6`)
}

function atualizainventario() {
    let inv = document.getElementById('inventario')
    if (chaveboss === false) {
        inv.innerHTML = "Espada longa europeia <br> Poções de cura: " + cura
    } else {
        inv.innerHTML = `
        Espada longa europeia  <br>
        Poções de cura: ${cura} <br>
        Chaves: Chave sala boss <br>
        `
    }
}

function morreu() {
    alert("Você morreu")
    let text = document.getElementById("texto");
    let botoes = document.getElementById("btns");
    botoes.style.visibility = "collapse"
    text.innerHTML = "Você morreu, um golpe fatal foi dado e você não resistiu, indo de vala, recarregando página para reiniciar o jogo."
    setTimeout(function () {
        window.location.href = "index.html";
    }, 5000)
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
    posxpers += 1;
}

function resetapagina() {
    if (cont >= 3 && cont <= 5) {
        text.innerHTML = "Já disse pra você terminar a ação antes de andar";
        alert("Termine a ação");
    } else if (cont >= 6 && cont <= 8) {
        text.innerHTML = "Estou avisando, se continuar a tentar andar eu vou recarregar a página...";
        alert("Termine a ação");
    } else if (cont === 9) {
        text.innerHTML = "Último aviso, se você tentar andar novamente serei forçado a recarregar a página...";
        alert("Termine a ação");
    } else if (cont > 9) {
        text.innerHTML = "Já era, estou recarregando a página...";
        alert("Termine a ação");
    }
}

function combate() {
    let combtxt = document.getElementById("combtext");
    let texto = document.getElementById("texto")
    let btnscombate = document.getElementById("btnscombate");
    mover = false;
    let divcombate = document.getElementById("combate");
    if (mapa[posypers][blocodir] === 4 || mapa[posypers][blocoesq] === 4 || mapa[blococima][posxpers] === 4 || mapa[blocobaixo][posxpers] === 4) {
        combtxt.innerHTML = `
        Vida do inimigo: ${vidainimigo} <br>
        Vida personagem: ${vidapers} <br>
        `
        texto.innerHTML = "Um inimigo, derrote-o para prosseguir com sua jornada."
        tipoinimigo = 4;
    } else if (mapa[posypers][blocodir] === 7 || mapa[posypers][blocoesq] === 7 || mapa[blococima][posxpers] === 7 || mapa[blocobaixo][posxpers] === 7) {
        combtxt.innerHTML = `
        Vida do mini-boss: 40 <br>
        Vida personagem: ${vidapers} <br>
        `
        texto.innerHTML = "Ha Ha Ha, você me achou, se quiser a chave para o Boss, terá que me enfrentar..."
        tipoinimigo = 7;
    } else if (mapa[posypers][blocodir] === 5 || mapa[posypers][blocoesq] === 5 || mapa[blococima][posxpers] === 5 || mapa[blocobaixo][posxpers] === 5) {
        combtxt.innerHTML = `
        Vida do boss: 100 <br>
        Vida personagem: ${vidapers} <br>
        `
        texto.innerHTML = "Você achou o Boss, derrote-o para obter a chave para o baú."
        tipoinimigo = 5;
    } else if (mapa[posypers][blocodir] === 2 || mapa[posypers][blocoesq] === 2 || mapa[blococima][posxpers] === 2 || mapa[blocobaixo][posxpers] === 2) {
        combtxt.innerHTML = `
        Vida do Mímico: ${vidamimico} <br>
        Vida personagem: ${vidapers} <br>
        `
        texto.innerHTML = "Você achou um mímico, derrote-o para prosseguir com sua jornada."
        tipoinimigo = 2;
    }
    divcombate.style.visibility = "visible";
    btnscombate.style.visibility = "visible";
}

function ataqueinimigo() {
    let text = document.getElementById("texto");
    let divcombate = document.getElementById("combate");
    let txtcomb = document.getElementById("combtext");
    let btnsataque = document.getElementById("btnscombate");
    let btns = document.getElementById("btns");
    btnsataque.style.visibility = "collapse";
    atacou = false;
    rolard20();
    if (d20 > defesapers && d20 !== 20 && atacou !== true) {
        rolard6();
        if (tipoinimigo === 4) {
            danoinimigo = d6 + 3;
            vidapers = vidapers - danoinimigo;
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidainimigo} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo te acertou, dando ${danoinimigo} pontos de dano.
                `
        } else if (tipoinimigo === 7) {
            danoinimigo = d6 + 3;
            vidapers = vidapers - danoinimigo;
            txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O miniboss te acertou, dando ${danoinimigo} pontos de dano.
                `
        } else if (tipoinimigo === 5) {
            danoinimigo = d6 + 5;
            vidapers = vidapers - danoinimigo;
            txtcomb.innerHTML = `
                Vida do boss: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O boss te acertou, dando ${danoinimigo} pontos de dano.
                `
        } else if (tipoinimigo === 2) {
            danoinimigo = d6 + 3;
            vidapers = vidapers - danoinimigo;
            txtcomb.innerHTML = `
                Vida do mímico: ${vidamimico} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O mímico te acertou, dando ${danoinimigo} pontos de dano.
                `
        } else txtcomb.innerHTML = "não sei o que aconteceu"
        atacou = true;
        if (vidapers < 0) {
            morreu();
        }
    } else if (d20 === 1 && atacou !== true) {
        rolard6();
        if (tipoinimigo === 4) {
            danoinimigo = d6;
            vidainimigo = vidainimigo - d6;
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidainimigo} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo tirou 1 no D20 e caiu de cara no chão dando ${d6} pontos de dano em si mesmo, prepare seu ataque agora.
                `
            atacou = true;
        } else if (tipoinimigo === 7) {
            danoinimigo = d6;
            vidaminiboss -= d6;
            txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O miniboss tirou 1 no D20 e caiu de cara no chão dando ${d6} pontos de dano em si mesmo, prepare seu ataque agora.
                `
            atacou = true;
        } else if (tipoinimigo === 5) {
            danoinimigo = d6;
            vidaboss -= d6;
            txtcomb.innerHTML = `
                Vida do Boss: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O Boss tirou 1 no D20 e caiu de cara no chão dando ${d6} pontos de dano em si mesmo, prepare seu ataque agora.
                `
            atacou = true;
        } else if (tipoinimigo === 2) {
            danoinimigo = d6;
            vidamimico -= d6;
            txtcomb.innerHTML = `
                Vida do Mímico: ${vidamimico} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O Mímico tirou 1 no D20 e mordeu sua lingua dando ${d6} pontos de dano em si mesmo, prepare seu ataque agora.
                `
            atacou = true;
        }
    } else if (d20 === 20 && atacou !== true) {
        crit();
        if (tipoinimigo === 4) {
            danoinimigo = d20crit;
            vidapers -= d20crit;
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidainimigo} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
                `
            atacou = true;
        } else if (tipoinimigo === 7) {
            danoinimigo = d20crit;
            vidapers = vidapers - d20crit;
            txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O miniboss critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
                `
        } else if (tipoinimigo === 5) {
            danoinimigo = d20crit;
            vidapers = vidapers - d20crit;
            txtcomb.innerHTML = `
                Vida do boss: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O boss critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
                `
        } else if (tipoinimigo === 2) {
            danoinimigo = d20crit;
            vidapers = vidapers - d20crit;
            txtcomb.innerHTML = `
                Vida do mímico: ${vidamimico} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O mímico critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
                `
        }
        if (vidapers < 0) {
            morreu();
        }
    } else {
        if (tipoinimigo === 4) {
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidainimigo} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo errou o ataque, prepare o seu agora.
                `
        } else if (tipoinimigo === 7) {
            txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O miniboss errou o ataque, prepare o seu agora.
                `
        } else if (tipoinimigo === 5) {
            txtcomb.innerHTML = `
                Vida do boss: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O boss errou o ataque, prepare o seu agora.
                `
        }
    }
    if (vidainimigo <= 0 && tipoinimigo === 4) {
        text.innerHTML = "Você derrotou o inimigo, agora prossiga com sua jornada através da dungeon para achar o tesouro.";
        vidainimigo = 20;
        inimigomorto = false;
        limpainimigo();
        mover = true;
        divcombate.style.visibility = "collapse";
        btns.style.visibility = "visible";
        btnsataque.style.visibility = "visible";
        txtcomb.style.marginTop = "0";
        tipoinimigo = 0;
    } else if (vidaminiboss <= 0 && tipoinimigo === 7) {
        chaveboss = true;
        text.innerHTML = "Você derrotou o miniboss, agora prossiga com sua jornada através da dungeon para achar boss e pegar a chave para o tesouro.";
        inimigomorto = false;
        limpainimigo();
        mover = true;
        divcombate.style.visibility = "collapse";
        btns.style.visibility = "visible";
        btnsataque.style.visibility = "visible";
        tipoinimigo = 0;
    } else if (vidaboss <= 0 && tipoinimigo === 5) {
        text.innerHTML = "Você derrotou o Boss e obtém a chave para abrir o baú, vá até ele e resgate a sua recompensa";
        divcombate.style.visibility = "collapse";
        limpainimigo();
        inimigomorto = false;
        mover = true;
        chavebau = true;
        divcombate.style.visibility = "collapse";
        btns.style.visibility = "visible";
        tipoinimigo = 0;
    }
    btnsataque.style.display = "flex";
    btnsataque.style.visibility = "visible";
}

function ataque() {
    let text = document.getElementById("texto");
    let divcombate = document.getElementById("combate");
    let txtcomb = document.getElementById("combtext");
    let btnsataque = document.getElementById("btnscombate");
    let btns = document.getElementById("btns");
    let inimigomorto = true;
    btnsataque.style.visibility = "collapse";
    atacou = false;
    rolard20();
    if (d20 > defesainimigo && d20 !== 20 && atacou !== true && tipoinimigo === 4) {
        rolard6();
        if (!arma) {
            danopers = d6 + 5;
        } else {
            danopers = d6 + 10;
        }
        vidainimigo = vidainimigo - danopers;
        txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem: ${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você acertou o inimigo, dando ${danopers} de dano nele.
            `
        atacou = true;
    } else if (d20 > defesamini && d20 !== 20 && atacou !== true && tipoinimigo === 7) {
        rolard6();
        if (!arma) {
            danopers = d6 + 5;
        } else {
            danopers = d6 + 10;
        }
        vidaminiboss = vidaminiboss - danopers;
        txtcomb.innerHTML = `
            Vida do miniboss: ${vidaminiboss} <br>
            Vida do personagem: ${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você acertou o miniboss, dando ${danopers} de dano nele.
            `
        atacou = true;
    } else if (d20 > defesaboss && d20 !== 20 && atacou !== true && tipoinimigo === 5) {
        rolard6();
        if (!arma) {
            danopers = d6 + 5;
        } else {
            danopers = d6 + 10;
        }
        vidaboss = vidaboss - danopers;
        txtcomb.innerHTML = `
            Vida do boss: ${vidaboss} <br>
            Vida do personagem: ${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você acertou o boss, dando ${danopers} de dano nele.
            `
        atacou = true;
    } else if (d20 > defesamimico && d20 !== 20 && atacou !== true && tipoinimigo === 2) {
        rolard6();
        danopers = d6 + 5;
        vidamimico = vidamimico - danopers;
        txtcomb.innerHTML = `
            Vida do mímico: ${vidamimico} <br>
            Vida do personagem: ${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você acertou o mímico, dando ${danopers} de dano nele.
            `
        atacou = true;
    } else if (d20 === 1 && atacou !== true) {
        rolard6();
        danopers = d6;
        vidapers = vidapers - d6;
        if (tipoinimigo === 4) {
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidainimigo} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
                `
        } else if (tipoinimigo === 7) {
            txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
                `
        } else if (tipoinimigo === 5) {
            txtcomb.innerHTML = `
                Vida do boss: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
                `
        } else if (tipoinimigo === 2) {
            txtcomb.innerHTML = `
                Vida do mímico: ${vidamimico} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
                `
        }
        atacou = true;
    } else if (d20 === 20 && atacou !== true) {
        crit();
        rolard6();
        if (tipoinimigo === 4) {
            if (arma) {
                danopers = d20crit + d6;
            }
            vidainimigo = vidainimigo - danopers;
            txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você critou no D20, dando ${d20crit} de dano no inimigo, agora ele vai atacar, se prepare.
            `
        } else if (tipoinimigo === 7) {
            if (arma) {
                danopers = d20crit + d6;
            }
            vidaminiboss = vidaminiboss - danopers;
            txtcomb.innerHTML = `
            Vida do miniboss: ${vidaminiboss} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você critou no D20, dando ${d20crit} de dano no miniboss, agora ele vai atacar, se prepare.
            `
        } else if (tipoinimigo === 5) {
            if (arma) {
                danopers = d20crit + d6;
            }
            vidaboss = vidaboss - danopers;
            txtcomb.innerHTML = `
            Vida do boss: ${vidaboss} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você critou no D20, dando ${d20crit} de dano no boss, agora ele vai atacar, se prepare.
            `
        } else if (tipoinimigo === 2) {
            if (arma) {
                danopers = d20crit + d6;
            }
            vidamimico = vidamimico - danopers;
            txtcomb.innerHTML = `
            Vida do mímico: ${vidamimico} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você critou no D20, dando ${d20crit} de dano no mímico, agora ele vai atacar, se prepare.
            `
        }
        atacou = true;
    } else {
        if (tipoinimigo === 4) {
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidainimigo} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você não acertou o inimigo, prepare-se para o ataque dele.
                `
        } else if (tipoinimigo === 7) {
            txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você não acertou o miniboss, prepare-se para o ataque dele.
                `

        } else if (tipoinimigo === 5) {
            txtcomb.innerHTML = `
                Vida do boss: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você não acertou o boss, prepare-se para o ataque dele.
                `
        } else if (tipoinimigo === 2) {
            txtcomb.innerHTML = `
                Vida do mímico: ${vidamimico} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você não acertou o mímico, prepare-se para o ataque dele.
                `
        }
        atacou = true;
    }
    if (vidainimigo <= 0 && tipoinimigo === 4) {
        text.innerHTML = "Você derrotou o inimigo, agora prossiga com sua jornada através da dungeon para achar o tesouro.";
        vidainimigo = 20;
        inimigomorto = false;
        limpainimigo();
        mover = true;
        divcombate.style.visibility = "collapse";
        btns.style.visibility = "visible";
        txtcomb.style.marginTop = "0";
        tipoinimigo = 0;
    } else if (vidaminiboss <= 0 && tipoinimigo === 7) {
        chaveboss = true;
        text.innerHTML = "Você derrotou o miniboss, agora prossiga com sua jornada através da dungeon para achar boss e pegar a chave para o tesouro.";
        inimigomorto = false;
        limpainimigo();
        mover = true;
        divcombate.style.visibility = "collapse";
        btns.style.visibility = "visible";
        btnsataque.style.visibility = "visible";
        tipoinimigo = 0;
    } else if (vidaboss <= 0 && tipoinimigo === 5) {
        text.innerHTML = "Você derrotou o Boss e obtém a chave para abrir o baú, vá até ele e resgate a sua recompensa";
        divcombate.style.visibility = "collapse";
        limpainimigo();
        inimigomorto = false;
        mover = true;
        chavebau = true;
        divcombate.style.visibility = "collapse";
        btns.style.visibility = "visible";
        tipoinimigo = 0;
    } else if (vidamimico <= 0 && tipoinimigo === 2) {
        text.innerHTML = "Você derrotou o mímico e adiquiriu uma nova arma para sua jornada, fazendo com que você tenha um dano maior, agora prossiga com sua jornada.";
        inimigomorto = false;
        limpainimigo();
        mover = true;
        divcombate.style.visibility = "collapse";
        btns.style.visibility = "visible";
        txtcomb.style.marginTop = "0";
        tipoinimigo = 0;
        arma = true;
        defesaboss -= 5;
        defesainimigo -= 3;
        defesamini -= 5;
    }
    btnsataque.style.visibility = "collapse";
    if (inimigomorto) {
        setTimeout(function () {
            ataqueinimigo();
        }, 2000)
    }


}
function morre() {
    vidaboss = 0
    chaveboss = true
}

function defesa() {
    let text = document.getElementById("combtext");
    let btns = document.getElementById("btnscombate");

    btns.style.visibility = "collapse";
    if (tipoinimigo === 4) {
        text.innerHTML = `
        Vida do inimigo: ${vidainimigo}<br>
        Vida do personagem: ${vidapers}<br>
        Você está se defendendo, agora prepare-se para o ataque inimigo...`
    } else if (tipoinimigo === 7) {
        text.innerHTML = `
        Vida do miniboss: ${vidaminiboss}<br>
        Vidado personagem: ${vidapers}<br>
        Você está se defendendo, agora prepare-se para o ataque do miniboss...
        `
    } else if (tipoinimigo === 5) {
        text.innerHTML = `
        Vida do boss: ${vidaboss}<br>
        Vida do personagem: ${vidapers}<br>
        Você está se defendendo, agora prepare-se para o ataque do boss...
        `
    }
    defesapers = defesapers + 5;
    setTimeout(() => {
        ataqueinimigo();
    }, 2000);
    defesapers -= 5;
}

function curase() {
    let text = document.getElementById("combtext");
    let btns = document.getElementById("btnscombate");

    if (cura > 0) {
        vidapers += 20;
        cura -= 1;
        btns.style.visibility = "collapse";
        if (tipoinimigo === 4) {
            text.innerHTML = `
            Vida do inimigo: ${vidainimigo}<br>
            Vida do personagem: ${vidapers}<br>
            Você se curou, agora prepare-se para o ataque inimigo...`
        } else if (tipoinimigo === 7) {
            text.innerHTML = `
            Vida do miniboss: ${vidaminiboss}<br>
            Vidado personagem: ${vidapers}<br>
            Você se curou, agora prepare-se para o ataque do miniboss...
            `
        } else if (tipoinimigo === 5) {
            text.innerHTML = `
            Vida do boss: ${vidaboss}<br>
            Vida do personagem: ${vidapers}<br>
            Você se curou, agora prepare-se para o ataque do boss...
            `
        }
        setTimeout(() => {
            ataqueinimigo();
        }, 2000);
    } else {
        text.innerHTML = `
            Vida do personagem: ${vidapers}<br>
            Você não tem poções de cura... :(
            `
    }
    atualizainventario();
}

function limpaarea() {
    verposic();
    if ((blococima >= 0 && blococima < 14) && mapa[blococima][posxpers] !== 1 && mapa[blococima][posxpers] !== 3 && mapa[blococima][posxpers] !== 4 && mapa[blococima][posxpers] !== 5 && mapa[blococima][posxpers] !== 7) {
        let quacima = document.getElementById(`mapa(${blococima},${posxpers})`);
        let imgcima = quacima.querySelector("img");
        if (mapa[blococima][posxpers] !== 9 && mapa[blococima][posxpers] !== 2) {
            imgcima.src = "trans.png";
        }
        quacima.style.backgroundColor = "#00000000";
    }
    if ((blocobaixo >= 0 && blocobaixo < 14) && mapa[blocobaixo][posxpers] !== 1 && mapa[blocobaixo][posxpers] !== 3 && mapa[blocobaixo][posxpers] !== 4 && mapa[blocobaixo][posxpers] !== 5 && mapa[blocobaixo][posxpers] !== 7) {
        console.log("Bloco baixo: " + blocobaixo)
        let quabaixo = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
        let imgbaixo = quabaixo.querySelector("img");
        if (mapa[blocobaixo][posxpers] !== 9 && mapa[blocobaixo][posxpers] !== 2) {
            imgbaixo.src = "trans.png";
        }
        quabaixo.style.backgroundColor = "#00000000";
    }
    if ((blocoesq > 0 && blocoesq < 19) && mapa[posypers][blocoesq] !== 1 && mapa[posypers][blocoesq] !== 3 && mapa[posypers][blocoesq] !== 4 && mapa[posypers][blocoesq] !== 5 && mapa[posypers][blocoesq] !== 7) {
        console.log("Bloco esquerda: " + blocoesq)
        let quaesq = document.getElementById(`mapa(${posypers},${blocoesq})`);
        let imgesq = quaesq.querySelector("img");
        if (mapa[posypers][blocoesq] !== 9 && mapa[posypers][blocoesq] !== 2) {
            imgesq.src = "trans.png";
        }
        quaesq.style.backgroundColor = "#00000000";
    }
    if ((blocodir > 0 && blocodir < 19) && mapa[posypers][blocodir] !== 1 && mapa[posypers][blocodir] !== 3 && mapa[posypers][blocodir] !== 4 && mapa[posypers][blocodir] !== 5 && mapa[posypers][blocodir] !== 7) { 
        console.log("Bloco direita: " + blocodir)
        let quadir = document.getElementById(`mapa(${posypers},${blocodir})`);
        let imgdir = quadir.querySelector("img");
        if (mapa[posypers][blocodir] !== 9 && mapa[posypers][blocodir] !== 2) {
            imgdir.src = "trans.png";
        }
        quadir.style.backgroundColor = "#00000000";
    }
}

function limpainimigo() {
    verposic();
    if (blococima > 0 && blococima < 11 && mapa[blococima][posxpers] !== 1) {
        console.log("Bloco cima: " + blococima)
        let quacima = document.getElementById(`mapa(${blococima},${posxpers})`);
        mapa[blococima][posxpers] = 0;
        let imgcima = quacima.querySelector("img");
        imgcima.src = "trans.png";
        imgcima.style.backgroundColor = "#00000000";
    }
    if (blocobaixo >= 0 && blocobaixo < 11 && mapa[blococima][posxpers] !== 1) {
        console.log("Bloco baixo: " + blocobaixo)
        let quabaixo = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
        mapa[blocobaixo][posxpers] = 0;
        let imgbaixo = quabaixo.querySelector("img");
        imgbaixo.src = "trans.png";
        imgbaixo.style.backgroundColor = "#00000000";
    }
    if (blocoesq > 0 && blocoesq < 19 && mapa[blococima][posxpers] !== 1) {
        console.log("Bloco esquerda: " + blocoesq)
        let quaesq = document.getElementById(`mapa(${posypers},${blocoesq})`);
        mapa[posypers][blocoesq] = 0;
        let imgesq = quaesq.querySelector("img");
        imgesq.src = "trans.png";
        imgesq.style.backgroundColor = "#00000000";
    }
    if (blocodir > 0 && blocodir < 19 && mapa[blococima][posxpers] !== 1) {
        console.log("Bloco direita: " + blocodir)
        let quadir = document.getElementById(`mapa(${posypers},${blocodir})`);
        mapa[posypers][blocodir] = 0;
        let imgdir = quadir.querySelector("img");
        imgdir.src = "trans.png";
        imgdir.style.backgroundColor = "#00000000";
    }
}

function percepcao(dir) {
    let text = document.getElementById("texto");
    mover = false;

    text.innerHTML = "Você vê uma porta a sua frente, e está fechada, rolando um teste de perçepção para saber o que está atrás dela."
    if (dir === 'cima' && cima === '') {
        setTimeout(() => {
            rolard20();
            let confirmed;
            console.log(d20)
            if (d20 === 1) {
                rolard6();
                mover = true;
                vidapers -= d6;
                text.innerHTML = `Você tenta ouvir o que está atrás da porta e bate a cabeça na porta, tomanddo ${d6} de dano em si mesmo.`
            } else if (d20 === 20 && dir === "cima") {
                cima = "Voçe percebe que existe um baú na sua esuqerda e poções de cura na direita, você vai abrir a porta?"
                text.innerHTML = cima;
                setTimeout(() => {
                    confirmed = confirm("Deseja abrir a porta?");
                    if (confirmed === true) {
                        mapa[4][6] = 0;
                    }
                    mover = true;
                }, 2000);
            } else if (d20 >= 10 && dir === "cima") {
                cima = "Você percebe um baú na esquerda e alguns objetos de vidro na direita, você vai abrir a porta?"
                text.innerHTML = cima;
                setTimeout(() => {
                    confirmed = confirm("Deseja abrir a porta?");
                    if (confirmed === true) {
                        mapa[4][6] = 0;
                    }
                    mover = true;
                }, 2000);
            } else if (d20 >= 5 && dir === "cima") {
                cima = "Você percebe várias coisas na direita e uma coisa na esquerda, você vai abrir a porta?"
                text.innerHTML = cima;
                setTimeout(() => {
                    confirmed = confirm("Deseja abrir a porta?");
                    if (confirmed === true) {
                        mapa[4][6] = 0;
                    }
                    mover = true;
                }, 2000);
            } else if (d20 >= 2 && dir === "cima") {
                cima = "Você não percebe nada de anormal, Vai abrir a porta?"
                text.innerHTML = cima;
                setTimeout(() => {
                    confirmed = confirm("Deseja abrir a porta?");
                    if (confirmed === true) {
                        mapa[4][6] = 0;
                    }
                    mover = true;
                }, 2000);
            }
        }, 2000);
    } else if (baixo === '' && dir === 'baixo') {
        setTimeout(() => {
            rolard20();
            if (d20 === 1) {
                rolard6();
                mover = true;
                vidapers -= d6;
                text.innerHTML = `Você tenta ouvir o que está atrás da porta e bate a cabeça na porta, tomanddo ${d6} de dano em si mesmo.`
            } else if (d20 === 20 && dir === "baixo") {
                baixo = "Você percebe que existe um inimigo com a chave para o boss no pulso na esquerda e um baú na direita, você vai abrir a porta?"
                text.innerHTML = baixo;
                setTimeout(() => {
                    confirmed = confirm("Deseja abrir a porta?");
                    if (confirmed === true) {
                        mapa[9][6] = 0;
                    }
                    mover = true;
                }, 2000);
            } else if (d20 >= 10 && dir === "baixo") {
                baixo = "Você percebe um inimigo com uma chave e um baú na direita, você vai abrir a porta?"
                text.innerHTML = baixo;
                setTimeout(() => {
                    confirmed = confirm("Deseja abrir a porta?");
                    if (confirmed === true) {
                        mapa[9][6] = 0;
                    }
                    mover = true
                }, 2000);
            } else if (d20 >= 5 && dir === "baixo") {
                baixo = "Você percebe alguém na esquerda e alguma coisa na direita, você vai abrir a porta?"
                text.innerHTML = baixo;
                setTimeout(() => {
                    confirmed = confirm("Deseja abrir a porta?");
                    if (confirmed === true) {
                        mapa[9][6] = 0;
                    }
                    mover = true
                }, 2000);
            } else if (d20 >= 2 && dir === "baixo") {
                baixo = "Você não percebe nada de anormal, vai abrir a porta??"
                text.innerHTML = baixo;
                setTimeout(() => {
                    confirmed = confirm("Deseja abrir a porta?");
                    if (confirmed === true) {
                        mapa[9][6] = 0;
                    }
                    mover = true;
                }, 2000);
            }
        }, 2000);    
    } else if (cima != '' || baixo != '') {
        if (dir === 'cima'){
            text.innerHTML = cima;
            setTimeout(() => {
                confirmed = confirm("Deseja abrir a porta?");
                if (confirmed === true) {
                    mapa[4][6] = 0;
                }
                mover = true;
            }, 2000);
        } else {
            text.innerHTML = baixo;
            setTimeout(() => {
                confirmed = confirm("Deseja abrir a porta?");
                if (confirmed === true) {
                    mapa[9][6] = 0;
                }
                mover = true;
            }, 2000);
        }
    }    
}

function anda(dir) {
    let text = document.getElementById("texto")
    mover = true;
    /*
    if (dir === "cima") {

        } else if (dir === "baixo") {

        } else if (dir === "esquerda") {

        } else if (dir === "direita") {

        }
    */
    if (mover !== false) {
        verposic();
        let bloco;
        let divanda = document.getElementById("btns");
        if (dir === "cima") {
            bloco = mapa[blococima][posxpers]
            console.log(`mapa(${blococima},${posxpers})`);
        } else if (dir === "baixo") {
            bloco = mapa[blocobaixo][posxpers]
            console.log(`mapa(${blocobaixo},${posxpers})`);
        } else if (dir === "esquerda") {
            bloco = mapa[posypers][blocoesq]
            console.log(`mapa(${posypers},${blocoesq})`);
        } else if (dir === "direita") {
            bloco = mapa[posypers][blocodir]
            console.log(`mapa(${posypers},${blocodir})`);
        }

        if (bloco === 0) {
            console.log(bloco);
            let blocomuda;
            if (dir === "cima") {
                blocomuda = document.getElementById(`mapa(${blococima},${posxpers})`);
            } else if (dir === "baixo") {
                blocomuda = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
            } else if (dir === "esquerda") {
                blocomuda = document.getElementById(`mapa(${posypers},${blocoesq})`);
            } else if (dir === "direita") {
                blocomuda = document.getElementById(`mapa(${posypers},${blocodir})`);
            }
            const imagem = blocomuda.querySelector("img");
            imagem.src = "personagem3.png";
            let blocopers = document.getElementById(`mapa(${posypers},${posxpers})`);
            let imgboneco = blocopers.querySelector("img");
            imgboneco.src = "trans.png";
            blocomuda.style.backgroundColor = "#00000000";
            if (dir === "cima") {
                mudaposperscima()
            } else if (dir === "baixo") {
                mudapospersbaixo()
            } else if (dir === "esquerda") {
                mudapospersesq()
            } else if (dir === "direita") {
                mudapospersdir()
            }
            limpaarea();
            atualizainventario();
            mover = true;

        } else if (bloco === 10 || bloco === 11) {
            mover = false;
            if (bloco === 10) {
                percepcao("baixo")
            } else if (bloco === 11) {
                percepcao("cima")
            }
        } else if (bloco === 1) {
            text.innerHTML = "Você não pode andar para essa posição, há uma parede ou um objeto impedindo-o de andar até esse lugar.";
            mover = true
        } else if (bloco === 4) {
            let inimigo;
            if (dir === "cima") {
                inimigo = document.getElementById(`mapa(${blococima},${posxpers})`);
            } else if (dir === "baixo") {
                inimigo = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
            } else if (dir === "esquerda") {
                inimigo = document.getElementById(`mapa(${posypers},${blocoesq})`);
            } else if (dir === "direita") {
                inimigo = document.getElementById(`mapa(${posypers},${blocodir})`);
            }
            const imagem = inimigo.querySelector("img");
            imagem.src = "inimigo.png";
            inimigo.style.backgroundColor = "#00000000";
            divanda.style.visibility = "collapse";
            vidainimigo = 20;
            combate();

        } else if (bloco === 6) {
            if (chaveboss === true) {
                mover = false;
                if (animporta === false) {
                    text.innerHTML = "Voce coloca a chave, e com um arrepio gira ela, a porta faz um barulho estranho, como se algo estivesse estranho, esse sentimeto se acumula... mas você continua em frente."
                    animporta = true;
                    mover = true;
                    mapa[6][13] = 0;
                    mapa[7][13] = 0;
                } else {
                    bloco = 0;
                }
            } else {
                text.innerHTML = "Você não possui a chave para a sala do boss, encontre-a"
            }

        } else if (bloco === 5) {
            let inimigo;
            if (dir === "cima") {
                inimigo = document.getElementById(`mapa(${blococima},${posxpers})`);
            } else if (dir === "baixo") {
                inimigo = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
            } else if (dir === "esquerda") {
                inimigo = document.getElementById(`mapa(${posypers},${blocoesq})`);
            } else if (dir === "direita") {
                inimigo = document.getElementById(`mapa(${posypers},${blocodir})`);
            }
            inimigo.style.backgroundColor = "#00000000";
            const imagem = inimigo.querySelector("img");
            imagem.src = "boss.png"
            text.innerHTML = "Você encontrou o boss, agora prepare-se para a luta."
            combate()

        } else if (bloco === 7) {
            miniboss = true;
            let inimigo;
            if (dir === "cima") {
                inimigo = document.getElementById(`mapa(${blococima},${posxpers})`);
            } else if (dir === "baixo") {
                inimigo = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
            } else if (dir === "esquerda") {
                inimigo = document.getElementById(`mapa(${posypers},${blocoesq})`);
            } else if (dir === "direita") {
                inimigo = document.getElementById(`mapa(${posypers},${blocodir})`);
            }
            const imagem = inimigo.querySelector("img");
            inimigo.style.backgroundColor = "#00000000";
            imagem.src = "miniboss.png"
            text.innerHTML = "Você me achou, e se quer enfrentar o boss, vai ter que pegar a chave que está comigo, ha ha ha..."
            divanda.style.visibility = "collapse";
            combate();
        } else if (bloco === 9 || bloco === 2) {
            let bau;
            mover = false;
            if (dir === "cima") {
                bau = document.getElementById(`mapa(${blococima},${posxpers})`);
            } else if (dir === "baixo") {
                bau = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
            } else if (dir === "esquerda") {
                bau = document.getElementById(`mapa(${posypers},${blocoesq})`);
            } else if (dir === "direita") {
                bau = document.getElementById(`mapa(${posypers},${blocodir})`);
            }
            let imgbau = bau.querySelector("img");
            bau.style.backgroundColor = "#00000000"
            if (bloco === 9) {
                let conmed;
                mover = false;
                text.innerHTML = "Você encontrou um baú, deseja abri-lo?"
                bau.style.backgroundColor = "#00000000"
                imgbau.src = "baufechado.png"
                if (!baudun) {
                    setTimeout(() => {
                        conmed = confirm("Deseja abrir o baú?")
                        if (conmed === true) {
                            if (chavebau !== true && conmed === true) {
                                mover = true
                                text.innerHTML = "Você achou o baú da dungeon, porém ele está trancado, ache a chave do baú para conseguir abri-lo."
                                baudun = true
                            } else if (chavebau === true && conmed === true) {
                                let botoes = document.getElementById("btns");
                                botoes.style.visibility = "collapse"
                                imgbau.src = "bautesouro.png"
                                text.innerHTML = "Você pegou a chave e conseguiu abrir o baú, aproveite o tesouro que esse baú obtém. Indo para o Menu"
                                setTimeout(function () {
                                    window.location.href = "index.html"
                                }, 5000)
                            } else mover = true
                        } else mover = true
                    }, 2000);
                }

                if (chavebau !== true && baudun === true) {
                    mover = true
                    text.innerHTML = "Você ainda não achou a chave do baú da dungeon, procure-a para conseguir abrir o baú."
                } else if (chavebau === true) {
                    setTimeout(() => {
                        conmed = confirm("Deseja abrir o baú da dungeon?")
                        if (conmed === true) {
                            if (chavebau !== true && conmed === true) {
                                mover = true
                                text.innerHTML = "Você achou o baú da dungeon, porém ele está trancado, ache a chave do baú para conseguir abri-lo."
                                baudun = true
                            } else if (chavebau === true && conmed === true) {
                                mover = true
                                let botoes = document.getElementById("btns");
                                botoes.style.visibility = "collapse"
                                imgbau.src = "bautesouro.png"
                                text.innerHTML = "Você pegou a chave e conseguiu abrir o baú, aproveite o tesouro que esse baú obtém. Indo para o menu."
                                setTimeout(function () {
                                    window.location.href = "index.html"
                                }, 5000)
                            } else mover = true
                        } else mover = true
                    }, 2000);
                } else mover = true
            } else {
                let conmed;
                text.innerHTML = "Você encontrou um baú, deseja abri-lo?"
                bau.style.backgroundColor = "#00000000"
                imgbau.src = "bau1.png"
                if (!baudun) {
                    setTimeout(() => {
                        conmed = confirm("Deseja abrir o baú?")
                        if (conmed === true) {
                            imgbau.src = "bau2.png"
                            combate();
                        } else mover = true
                    }, 2000);
                }
            }
        } else if (bloco === 3) {
            let pocao;
            mover = false;
            if (dir === "cima") {
                pocao = document.getElementById(`mapa(${blococima},${posxpers})`);
            } else if (dir === "baixo") {
                pocao = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
            } else if (dir === "esquerda") {
                pocao = document.getElementById(`mapa(${posypers},${blocoesq})`);
            } else if (dir === "direita") {
                pocao = document.getElementById(`mapa(${posypers},${blocodir})`);
            }
            let imgpocao = pocao.querySelector("img");
            pocao.style.backgroundColor = "#00000000"
            imgpocao.src = "pocao.png"
            if (dir === "cima") {
                mapa[blococima][posxpers] = 0
            } else if (dir === "baixo") {
                mapa[blocobaixo][posxpers] = 0
            } else if (dir === "esquerda") {
                mapa[posypers][blocoesq] = 0
            } else if (dir === "direita") {
                mapa[posypers][blocodir] = 0
            }

            setTimeout(function () {
                cura += 1
                imgpocao.src = "trans.png"
                mover = true
            }, 2000)
        }
    } else {
        resetapagina();
    }
}

function abretesesamo(){
    let p = document.getElementById('pcheat')
    mapa[4][6] = 0;
    mapa[9][6] = 0;
    mapa[6][13] = 0;
    mapa[7][13] = 0;
    p.innerHTML = p.innerHTML + "<br>abretesesamo"
}

function noclip() {
    let p = document.getElementById('pcheat')
    for (let i = 1; i < mapa.length -1; i++) {
        for (let j = 1; j < mapa[i].length - 1; j++) {
            if (mapa[i][j] === 1 || mapa[i][j] === 10 || mapa[i][j] === 11 || mapa[i][j] === 6) {
                mapa[i][j] = 0;
            }
        }
    }
    p.innerHTML = p.innerHTML + "<br>noclip"
}

function aumentavida(arg){
    let p = document.getElementById('pcheat')
    vidapers += parseInt(arg);
    p.innerHTML = p.innerHTML + "<br>vidapers" + arg
}

function cheatfunc() {
    var p = document.getElementById("pcheat");
    var cheatinput = document.getElementById("cheatInput").value;
    var command = cheatinput.split(" ")[0];
    var argument = cheatinput.split(" ")[1];

        switch (command) {
            case "noclip":
                noclip();
                break;
            case "abretesesamo":
                abretesesamo();
                break; 
            case "vidapers":
                aumentavida(argument);
                break;
            default:
                p.innerHTML = p.innerHTML + "<br>" + command + " não é um comando válido."
        }
    
    cheatinput.value = ""    
}