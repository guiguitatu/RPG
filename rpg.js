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
let danopers = 0;
let defesapers = 10;
let danoinimigo;
let danoboss;
let defesamini = 7;
let defesaboss = 10;
let defesainimigo = 5;
let vidapers = 100;
let vidainimigo = 20;
let vidaminiboss = 40;
let vidaboss = 100;
let cont = 0;
let encontrouboss = false;
let animporta = false;
let miniboss = false;
let atacou = false;
let tipoinimigo;
let d;
let arraycrit = [];


mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 4, 0, 0, 4, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 4, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 4, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 1],
    [1, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

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
    for (let dado = 0; dado < 5; dado++){
        d = Math.floor((Math.random() * 20) + 1);
        arraycrit.push(d);
    }
    arraycrit.sort(function(a, b){return b - a});
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
    }
    divcombate.style.visibility = "visible";
    btnscombate.style.visibility = "visible";
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
    if (d20 > defesainimigo && d20 !== 20  && atacou !== true && tipoinimigo === 4) {
        rolard6();
        danopers = d6 + 5;
        vidainimigo = vidainimigo - danopers;
        txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem: ${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você acertou o inimigo, dando ${danopers} de dano nele.
            `
        atacou = true;
    } else if (d20 > defesamini && d20 !== 20  && atacou !== true && tipoinimigo === 7) {
        rolard6();
        danopers = d6 + 5;
        vidaminiboss = vidaminiboss - danopers;
        txtcomb.innerHTML = `
            Vida do miniboss: ${vidaminiboss} <br>
            Vida do personagem: ${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você acertou o miniboss, dando ${danopers} de dano nele.
            `
        atacou = true;
    } else if (d20 > defesaboss && d20 !== 20  && atacou !== true && tipoinimigo === 5) {
        rolard6();
        danopers = d6 + 5;
        vidaboss = vidaboss - danopers;
        txtcomb.innerHTML = `
            Vida do boss: ${vidaboss} <br>
            Vida do personagem: ${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você acertou o boss, dando ${danopers} de dano nele.
            `
        atacou = true;
    }else if (d20 === 1 && atacou !== true) {
        rolard6();
        danopers = d6;
        vidapers = vidapers - d6;
        if (tipoinimigo === 4){
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidainimigo} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
                `
        } else if (tipoinimigo === 7){
            txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
                `
        } else if (tipoinimigo === 5){
            txtcomb.innerHTML = `
                Vida do boss: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
                `
        }
        atacou = true;
    } else if (d20 === 20 && atacou !== true) {
        crit();
        danopers = d20crit + 5;
        if (tipoinimigo === 4) {
            vidainimigo = vidainimigo - d20crit;
            txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você critou no D20, dando ${d20crit} de dano no inimigo, agora ele vai atacar, se prepare.
            `
        } else if (tipoinimigo === 7) {
            vidaminiboss = vidaminiboss - d20crit;
            txtcomb.innerHTML = `
            Vida do miniboss: ${vidaminiboss} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você critou no D20, dando ${d20crit} de dano no miniboss, agora ele vai atacar, se prepare.
            `
        } else if (tipoinimigo === 5) {
            vidaboss = vidaboss - d20crit;
            txtcomb.innerHTML = `
            Vida do boss: ${vidaboss} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você critou no D20, dando ${d20crit} de dano no boss, agora ele vai atacar, se prepare.
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

        } else if(tipoinimigo === 5){
            txtcomb.innerHTML = `
                Vida do boss: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você não acertou o boss, prepare-se para o ataque dele.
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
        mover = true;
        chavebau = true;
        divcombate.style.visibility = "collapse";
        btns.style.visibility = "visible";
        btnsataque.style.visibility = "visible";
        tipoinimigo = 0;
    }
    btnsataque.style.visibility = "collapse";
    if (inimigomorto) {
        setTimeout(function () {
            atacou = false;
            rolard20();
            if (d20 > defesapers && d20 !== 20 && atacou !== true && tipoinimigo === 4) {
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
                } else if (tipoinimigo === 7){
                    danoinimigo = d6;
                    vidaminiboss -= d6;
                    txtcomb.innerHTML = `
                        Vida do miniboss: ${vidaminiboss} <br>
                        Vida do personagem:${vidapers} <br>
                        Número rolado no D20: ${d20} <br>
                        O inimigo tirou 1 no D20 e caiu de cara no chão dando ${d6} pontos de dano em si mesmo, prepare seu ataque agora.
                        `
                    atacou = true;
                } else if (tipoinimigo === 5){
                    danoinimigo = d6;
                    vidaboss -= d6;
                    txtcomb.innerHTML = `
                        Vida do miniboss: ${vidaboss} <br>
                        Vida do personagem:${vidapers} <br>
                        Número rolado no D20: ${d20} <br>
                        O inimigo tirou 1 no D20 e caiu de cara no chão dando ${d6} pontos de dano em si mesmo, prepare seu ataque agora.
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
                } else if (tipoinimigo === 7){
                    danoinimigo = d20crit;
                    vidapers = vidapers - d20crit;
                    txtcomb.innerHTML = `
                        Vida do miniboss: ${vidaminiboss} <br>
                        Vida do personagem:${vidapers} <br>
                        Número rolado no D20: ${d20} <br>
                        O miniboss critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
                        `
                } else if (tipoinimigo === 5){
                    danoinimigo = d20crit;
                    vidapers = vidapers - d20crit;
                    txtcomb.innerHTML = `
                        Vida do boss: ${vidaboss} <br>
                        Vida do personagem:${vidapers} <br>
                        Número rolado no D20: ${d20} <br>
                        O boss critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
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
                } else if (tipoinimigo === 7){
                    txtcomb.innerHTML = `
                        Vida do miniboss: ${vidaminiboss} <br>
                        Vida do personagem:${vidapers} <br>
                        Número rolado no D20: ${d20} <br>
                        O miniboss errou o ataque, prepare o seu agora.
                        `
                } else if (tipoinimigo === 5){
                    txtcomb.innerHTML = `
                        Vida do boss: ${vidaboss} <br>
                        Vida do personagem:${vidapers} <br>
                        Número rolado no D20: ${d20} <br>
                        O boss errou o ataque, prepare o seu agora.
                        `
                }
            }
            btnsataque.style.display = "flex";
            btnsataque.style.visibility = "visible";
        }, 2000)
    }


}

function ataquee() {
    let text = document.getElementById("texto");
    let divcombate = document.getElementById("combate");
    let txtcomb = document.getElementById("combtext");
    let btnsataque = document.getElementById("btnscombate");
    let btns = document.getElementById("btns");
    let inimigomorto = true;
    atacou = false;
    if (miniboss === true) {
        ataqueminiboss()
    } else if (encontrouboss === false) {
        text.innerHTML = "Um inimigo, derrote-o para prosseguir com sua jornada."
        rolard20();
        if (d20 > defesainimigo && atacou !== true) {
            rolard6();
            danopers = d6 + 5;
            vidainimigo = vidainimigo - danopers;
            txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem: ${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você acertou o inimigo, dando ${danopers} de dano nele.
            `
            atacou = true;
        } else if (d20 === 1 && atacou !== true) {
            rolard6();
            danopers = d6;
            vidapers = vidapers - d6;
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidainimigo} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
                `
            atacou = true;
        } else if (d20 === 20 && atacou !== true) {
            crit();
            danopers = d20crit;
            vidainimigo = vidainimigo - d20crit;
            txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você critou no D20, dando ${d20crit} de dano no inimigo, agora ele vai atacar, se prepare.
            `
            atacou = true;
        } else {
            txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você não acertou o inimigo, prepare-se para o ataque dele.
            `
            atacou = true;
        }
        if (vidainimigo <= 0) {
            text.innerHTML = "Você derrotou o inimigo, agora prossiga com sua jornada através da dungeon para achar o tesouro.";
            vidainimigo = 20;
            inimigomorto = false;
            limpainimigo();
            mover = true;
            divcombate.style.visibility = "collapse";
            btns.style.visibility = "visible";
            btnsataque.style.visibility = "visible";
            txtcomb.style.marginTop = "0";
        }
        btnsataque.style.visibility = "collapse";
        if (inimigomorto) {
            setTimeout(function () {
                atacou = false;
                rolard20();
                if (d20 > defesapers && atacou !== true) {
                    rolard6();
                    danoinimigo = d6 + 3;
                    vidapers = vidapers - danoinimigo;
                    txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    O inimigo te acertou, dando ${danoinimigo} pontos de dano.
                    `
                    atacou = true;
                    if (vidapers < 0) {
                        morreu();
                    }
                } else if (d20 === 1 && atacou !== true) {
                    rolard6();
                    danoinimigo = d6;
                    vidainimigo = vidainimigo - d6;
                    txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    O inimigo tirou 1 no D20 e caiu de cara no chão dando ${d6} pontos de dano em si mesmo, prepare seu ataque agora.
                    `
                    atacou = true;
                } else if (d20 === 20 && atacou !== true) {
                    rolard20();
                    danoinimigo = d20;
                    txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    O inimigo critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
                    `
                    atacou = true;
                    if (vidapers < 0) {
                        morreu();
                    }
                } else {
                    txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    O inimigo errou o ataque, prepare o seu agora.
                    `
                }
                btnsataque.style.display = "flex";
                btnsataque.style.visibility = "visible";
            }, 2000)
        }
    } else {
        ataqueboss()
    }

}

function ataqueboss() {
    let text = document.getElementById("texto");
    let divcombate = document.getElementById("combate");
    let txtcomb = document.getElementById("combtext");
    let btnsataque = document.getElementById("btnscombate");
    text.innerHTML = "Um inimigo, derrote- o para prosseguir com sua jornada."
    rolard20();
    btnsataque.style.visibility = "collapse";
    if (d20 > defesaboss && atacou !== true) {
        rolard6();
        danopers = d6 + 10;
        vidaboss = vidaboss - danopers;
        txtcomb.innerHTML = `
            Vida do Boss: ${vidaboss} <br>
            Vida do personagem: ${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você acertou o inimigo, dando ${danopers} de dano nele.
            `
        atacou = true;
    } else if (d20 === 1 && atacou !== true) {
        rolard6();
        danopers = d6;
        vidapers = vidapers - d6;
        txtcomb.innerHTML = `
                Vida do Boss: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
                `
        atacou = true;
    } else if (d20 === 20 && atacou !== true) {
        rolard6();
        danopers = (d6 + 8) * 2;
        vidaboss = vidaboss - danopers;
        txtcomb.innerHTML = `
            Vida do Boss: ${vidaboss} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você critou no D20, dando ${danopers} de dano no inimigo, agora ele vai atacar, se prepare.
            `
        atacou = true;
    } else {
        txtcomb.innerHTML = `
            Vida do Boss: ${vidaboss} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você não acertou o inimigo, prepare-se para o ataque dele.
            `
        atacou = true;
    }
    if (vidaboss <= 0) {
        text.innerHTML = "Você derrotou o Boss e obtém a chave para abrir o baú, vá até ele e resgate a sua recompensa";
        divcombate.style.visibility = "collapse";
        limpainimigo();
        mover = true;
        chavebau = true;
        btnsataque.style.visibility = "collapse";

    }
    setTimeout(function () {
        atacou = false;
        rolard20();
        if (d20 > defesapers && atacou !== true) {
            rolard6();
            danoboss = d6 + 3;
            vidapers = vidapers - danoboss;
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O Boss te acertou, dando ${danoinimigo} pontos de dano.
                `
            if (vidapers < 0) {
                morreu();
            }
            btnsataque.style.display = "block";
            atacou = true;
        } else if (d20 === 1 && atacou !== true) {
            rolard6();
            danoboss = d6;
            vidaboss = vidaboss - danoboss
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo tirou 1 no D20 e caiu de cara no chão dando ${danoboss} pontos de dano em si mesmo, prepare seu ataque agora.
                `
            atacou = true;
            btnsataque.style.display = "block";
        } else if (d20 === 20 && atacou !== true) {
            rolard20();
            danoboss = d20 * 2;
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
                `
            if (vidapers < 0) {
                morreu();
            }
            atacou = true;
        } else {
            txtcomb.innerHTML = `
                Vida do inimigo: ${vidaboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo errou o ataque, prepare o seu agora.
                `
            atacou = true;
            btnsataque.style.display = "flex";
        }
    }, 2000)
    btnsataque.style.display = "flex";
}

function ataqueminiboss() {
    atacou = false;
    let minimorto = true
    let text = document.getElementById("texto");
    let divcombate = document.getElementById("combate");
    let txtcomb = document.getElementById("combtext");
    let btnsataque = document.getElementById("btnscombate");
    text.innerHTML = "O miniboss, derrote-o para prosseguir com sua jornada."
    txtcomb.style.marginTop = "100px";
    rolard20();
    btnsataque.style.visibility = "collapse";
    if (d20 > defesamini && d20 !== 20 && atacou !== true) {
        rolard6();
        danopers = d6 + 10;
        vidaminiboss = vidaminiboss - danopers;
        txtcomb.innerHTML = `
        Vida do miniboss: ${vidaminiboss} <br>
        Vida do personagem: ${vidapers} <br>
        Número rolado no D20: ${d20} <br>
        Você acertou o inimigo, dando ${danopers} de dano nele.
        `
        atacou = true;

    } else if (d20 === 1 && atacou !== true) {
        rolard6();
        danopers = d6;
        vidapers = vidapers - d6;
        txtcomb.innerHTML = `
            Vida do miniboss: ${vidaminiboss} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            Você tirou 1 no D20, errou o ataque e caiu de cara no chão, dando ${d6} pontos de dano em si mesmo.
            `
        atacou = true;
    } else if (d20 === 20 && atacou !== true) {
        crit();
        danopers = d20crit;
        vidaminiboss = vidaminiboss - d20crit;
        txtcomb.innerHTML = `
        Vida do miniboss: ${vidaminiboss} <br>
        Vida do personagem:${vidapers} <br>
        Número rolado no D20: ${d20} <br>
        Você critou no D20, dando ${d20crit} de dano no inimigo, agora ele vai atacar, se prepare.
        `
        atacou = true;
    } else {
        txtcomb.innerHTML = `
        Vida do miniboss: ${vidaminiboss} <br>
        Vida do personagem:${vidapers} <br>
        Número rolado no D20: ${d20} <br>
        Você não acertou o inimigo, prepare-se para o ataque dele.
        `
        atacou = true;
    }
    if (vidaminiboss <= 0) {
        text.innerHTML = "Você derrotou o miniboss e agora obtém a chave para a sala do boss.";
        divcombate.style.visibility = "collapse";
        limpainimigo();
        mover = true;
        chaveboss = true;
        miniboss = false;
        btnsataque.style.visibility = "collapse";
        minimorto = false
    }
    txtcomb.style.marginTop = "0";
    if (minimorto) {
        setTimeout(function () {
            atacou = false;
            rolard20();
            if (d20 > defesapers && atacou !== true) {
                rolard6();
                danoinimigo = d6 + 3;
                vidapers = vidapers - danoinimigo;
                txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo te acertou, dando ${danoinimigo} pontos de dano.
                `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            } else if (d20 === 1 && atacou !== true) {
                rolard6();
                danoinimigo = d6;
                vidaminiboss = vidaminiboss - d6;
                txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo tirou 1 no D20 e caiu de cara no chão dando ${d6} pontos de dano em si mesmo, prepare seu ataque agora.
                `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            } else if (d20 === 20 && atacou !== true) {
                rolard20();
                danoinimigo = d20 + 5;
                txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
                `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            } else {
                txtcomb.innerHTML = `
                Vida do miniboss: ${vidaminiboss} <br>
                Vida do personagem:${vidapers} <br>
                Número rolado no D20: ${d20} <br>
                O inimigo errou o ataque, prepare o seu agora.
                `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            }
            btnsataque.style.display = "flex";
            txtcomb.style.marginTop = "0";
        }, 2000)

    }

}

function defesa() {
    atacou = false;
    let txtcomb = document.getElementById("combtext")
    let text = document.getElementById("texto")
    if (encontrouboss !== true) {
        setTimeout(function () {
            atacou = false;
            rolard20();
            if (d20 > 15 && atacou !== true) {
                danopers = 3;
                text.innerHTML = "Você se defendeu com sucesso!!"
                txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    Você conseguiu se defender do ataque do inimigo, porém levou ${danopers} de dano
                    `
                if (vidapers < 0) {
                    morreu();
                }
                atacou = true;
            } else if (d20 < 5 && atacou !== true) {
                rolard6();
                danoinimigo = d6 + 3;
                vidapers = vidapers - danoinimigo;
                text.innerHTML = "Você não conseguiu se defendeu!! ):"
                txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    Você não conseguiu se defender e tomou ${danoinimigo} de dano
                    `
                if (vidapers < 0) {
                    morreu();
                }
                atacou = true;

            } else {
                danoinimigo = 4;
                vidapers = vidapers - danoinimigo;
                text.innerHTML = "Você defendeu parte do golpe do inimigo"
                txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    Você tenta se defender do ataque, ele ataca porém você perde a postura e leva ${danoinimigo} de dano.
                    `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            }

        }, 1000)
    } else {
        setTimeout(function () {
            atacou = false;
            rolard20();
            if (d20 > 12 && atacou !== true) {
                danopers = 3;
                text.innerHTML = "Você se defendeu com sucesso!!"
                txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    Você conseguiu se defender do ataque do inimigo, porém levou ${danopers} de dano
                    `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            } else if (d20 < 6 && atacou !== true) {
                rolard6();
                danoinimigo = d6 + 5;
                vidapers = vidapers - danoinimigo;
                text.innerHTML = "Você não conseguiu se defendeu!! ):"
                txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    Você não conseguiu se defender e tomou ${danoinimigo} de dano
                    `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }

            } else {
                danoinimigo = 6;
                vidapers = vidapers - danoinimigo;
                text.innerHTML = "Você defendeu parte do golpe do inimigo"
                txtcomb.innerHTML = `
                    Vida do inimigo: ${vidainimigo} <br>
                    Vida do personagem:${vidapers} <br>
                    Número rolado no D20: ${d20} <br>
                    Você tenta se defender do ataque, ele ataca porém você perde a postura e leva ${danoinimigo} de dano.
                    `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            }

        }, 1000)
    }
}

function curase() {
    atacou = false;
    let text = document.getElementById("texto")
    let txtcomb = document.getElementById("combtext")
    if (cura > 0) {
        vidapers = vidapers + 20;
        cura = cura - 1;
        text.innerHTML = "Você se curou, prepare-se para o ataque inimigo..."
        setTimeout(function () {
            atacou = false;
            rolard20();
            if (d20 > defesapers && atacou !== true) {
                rolard6();
                danoinimigo = d6 + 3;
                vidapers = vidapers - danoinimigo;
                txtcomb.innerHTML = `
                Vida do inimigo: ${vidainimigo} <br>
              Vida do personagem:${vidapers} <br>
              Número rolado no D20: ${d20} <br>
              O inimigo te acertou, e deu ${danoinimigo} de dano
              `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            } else if (d20 === 1 && atacou !== true) {
                rolard6();
                danoinimigo = d6;
                vidainimigo = vidainimigo - d6;
                txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            O inimigo tirou 1 no D20 e caiu de cara no chão dando ${d6} pontos de dano em si mesmo, prepare seu ataque agora.
            `
                atacou = true;
            } else if (d20 === 20 && atacou !== true) {
                rolard20();
                danoinimigo = d20;
                txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            O inimigo critou no D20, dando ${d20} pontos de dano no personagem, prepare seu ataque.
            `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            } else {
                txtcomb.innerHTML = `
            Vida do inimigo: ${vidainimigo} <br>
            Vida do personagem:${vidapers} <br>
            Número rolado no D20: ${d20} <br>
            O inimigo errou o ataque, prepare o seu agora.
            `
                atacou = true;
                if (vidapers < 0) {
                    morreu();
                }
            }
        }, 2000)
    } else {
        text.innerHTML = "Você não tem poções... :'("
    }
}

function limpaarea() {
    verposic();
    if (blococima >= 0 && blococima < 14 && blococima !== 9) {
        let quacima = document.getElementById(`mapa(${blococima},${posxpers})`);
        let imgcima = quacima.querySelector("img");
        imgcima.src = "trans.png";
        quacima.style.backgroundColor = "#00000000";
    }
    if (blocobaixo >= 0 && blocobaixo < 14 && blocobaixo !== 9) {
        console.log("Bloco baixo: " + blocobaixo)
        let quabaixo = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
        let imgbaixo = quabaixo.querySelector("img");
        imgbaixo.src = "trans.png";
        quabaixo.style.backgroundColor = "#00000000";
    }
    if (blocoesq > 0 && blocoesq < 19 && blocoesq !== 9) {
        console.log("Bloco esquerda: " + blocoesq)
        let quaesq = document.getElementById(`mapa(${posypers},${blocoesq})`);
        let imgesq = quaesq.querySelector("img");
        imgesq.src = "trans.png";
        quaesq.style.backgroundColor = "#00000000";
    }
    if (blocodir > 0 && blocodir < 19 && blocodir !== 9) {
        console.log("Bloco direita: " + blocodir)
        let quadir = document.getElementById(`mapa(${posypers},${blocodir})`);
        let imgdir = quadir.querySelector("img");
        imgdir.src = "trans.png";
        quadir.style.backgroundColor = "#00000000";
    }
}

function limpainimigo() {
    verposic();
    if (blococima >= 0 && blococima < 11) {
        console.log("Bloco cima: " + blococima)
        let quacima = document.getElementById(`mapa(${blococima},${posxpers})`);
        mapa[blococima][posxpers] = 0;
        let imgcima = quacima.querySelector("img");
        imgcima.src = "trans.png";
        imgcima.style.backgroundColor = "#00000000";
    }
    if (blocobaixo >= 0 && blocobaixo < 11) {
        console.log("Bloco baixo: " + blocobaixo)
        let quabaixo = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
        mapa[blocobaixo][posypers] = 0;
        let imgbaixo = quabaixo.querySelector("img");
        imgbaixo.src = "trans.png";
        imgbaixo.style.backgroundColor = "#00000000";
    }
    if (blocoesq > 0 && blocoesq < 19) {
        console.log("Bloco esquerda: " + blocoesq)
        let quaesq = document.getElementById(`mapa(${posypers},${blocoesq})`);
        mapa[posypers][blocoesq] = 0;
        let imgesq = quaesq.querySelector("img");
        imgesq.src = "trans.png";
        imgesq.style.backgroundColor = "#00000000";
    }
    if (blocodir > 0 && blocodir < 19) {
        console.log("Bloco direita: " + blocodir)
        let quadir = document.getElementById(`mapa(${posypers},${blocodir})`);
        mapa[posypers][blocodir] = 0;
        let imgdir = quadir.querySelector("img");
        imgdir.src = "trans.png";
        imgdir.style.backgroundColor = "#00000000";
    }
}

function anda(dir) {
    let text = document.getElementById("texto")
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

        if (bloco === 0 || bloco === 2) {
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

        } else if (bloco === 1) {
            text.innerHTML = "Você não pode andar para essa posição, há uma parede ou um objeto impedindo-o de andar até esse lugar.";
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
                if (animporta === false) {
                    text.innerHTML = "Voce coloca a chave, e com um arrepio gira ela, a porta faz um barulho estranho, como se algo estivesse estranho, esse sentimeto se acumula... mas você continua em frente."
                    animporta = true;
                    for(let i = 0; i < mapa.length; i++) {
                        for(let j = 0; j < mapa[i].length; j++) {
                            if(mapa[i][j] === 6) {
                                mapa[i][j] = 0;
                            }
                        }
                    }
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
            imagem.src = "miniboss.png"
            text.innerHTML = "Você me achou, e se quer enfrentar o boss, vai ter que pegar a chave que está comigo, ha ha ha..."
            divanda.style.visibility = "collapse";
            combate();
        } else if (bloco === 9) {
            let bau;
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
            imgbau.src = "baufechado.png"
            if (chavebau !== true) {
                text.innerHTML = "Você achou o baú da dungeon, porém ele está trancado, ache a chave do baú para conseguir abri-lo."
            } else {
                let botoes = document.getElementById("btns");
                botoes.style.visibility = "collapse"
                imgbau.src = "bautesouro.png"
                text.innerHTML = "Você pegou a chave e conseguiu abrir o baú, aproveite o tesouro que esse baú obtém. Recarregando a página"
                alert("Você finalizou o game")
                setTimeout(function () {
                    location.reload()
                }, 5000)
            }
        } else if (bloco === 3) {
            let pocao;
            if (dir === "cima") {
                pocao = document.getElementById(`mapa(${blococima},${posxpers})`);
            } else if (dir === "baixo") {
                pocao = document.getElementById(`mapa(${blocobaixo},${posxpers})`);
            } else if (dir === "esquerda") {
                pocao = document.getElementById(`mapa(${posypers},${blocoesq})`);
            } else if (dir === "direita") {
                pocao = document.getElementById(`mapa(${posypers},${blocodir})`);
            }
            let imgpocao = pocao.querySelector("img")
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
            }, 2000)
        }
    } else {
        resetapagina();
    }
}

function teste(){
    for (let dado = 0; dado < 5; dado++){
        d = Math.floor((Math.random() * 20) + 1);
        crit.push(d);
    }
    console.log(d)
    console.log(`Você tirou ${d20} no D20`)
}