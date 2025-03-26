let nome1 = false;
let nome2 = false;
let nome3 = false;
let nome4 = false;
let cheatactive = false;

function cheat(nome) {
    if (nome === 'nome1') {
        nome1 = true;
        console.log("Dirceu")
    } else if (nome === 'nome2') {
        nome2 = true;
        console.log("Guilherme")
    } else if (nome === 'nome3') {
        nome3 = true;
        console.log("João")
    } else if (nome === 'nome4') {
        nome4 = true;
        console.log("Vinicius")
    }
    if (nome1 && nome2 && nome3 && nome4) {
        cheatactive = true;
        console.log(cheatactive)
        localStorage.setItem('cheat', "true");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("aboutModal");
    var btn = document.getElementById("aboutButton");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    var exitButton = document.getElementById("exitButton");
    exitButton.onclick = function () {
        window.close();
    }
});

document.getElementById('conquistasButton').onclick = function () {
    document.getElementById('conquistasModal').style.display = "block";
    let descricoes = ["Flawless victory", "Cheater!!!", "Mímico", "Cagão!!!", "Comendo terra", "O jogo"];
    let conquistasContainer = document.getElementById('conquistasContainer');
    conquistasContainer.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        console.log(`conquista ${i}: ${conquistas[i]}`)
        let div = document.createElement('div');
        if (conquistas[i] === 1) {
            div.className = "liberado"
        } else {
            div.className = "bloqueado"
        }
        let img = document.createElement('img');
        img.height = 50;
        img.style.margin = "0 20px 0 20px";
        if (conquistas[i] === 1) {
            img.src = 'img/trofeu.png';
        } else {
            img.src = 'img/trofeucinza.png';
        }
        div.appendChild(img);

        let descricao = document.createElement('p');
        if (conquistas[i] === 1) {
            descricao.textContent = descricoes[i];
        } else descricao.textContent = "???"
        div.appendChild(descricao);

        conquistasContainer.appendChild(div);
    }
}

document.getElementsByClassName('close')[1].onclick = function () {
    document.getElementById('conquistasModal').style.display = "none";
}

document.getElementById('playButton').addEventListener('click', function (event) {
    event.preventDefault();
    alert(`Tutorial para o game:
    Você pode jogar com os botões aparecendo na tela ou usando:
    W A S D ou as setas no teclado para movimentar o personagem.
    Para atacar, defender ou curar-se, você pode usar as teclas:
    Z X C respectivamente.`)
    let confirmation = confirm("O jogo é melhor jogado com um zoom de 80%\nDeseja continuar?");
    if (confirmation) {
        window.location.href = "jogo.html";
    }
});
