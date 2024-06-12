let nome1 = false;
let nome2 = false;
let nome3 = false;
let nome4 = false;
window.cheatactive = false;

function cheat(nome){
    if(nome == 'nome1'){
        nome1 = true;
        console.log("Dirceu")
    }else if(nome == 'nome2'){
        nome2 = true;
        console.log("Guilherme")
    }else if(nome == 'nome3'){
        nome3 = true;
        console.log("João")
    }else if(nome == 'nome4'){
        nome4 = true;
        console.log("Vinicius")
    }
     if (nome1 && nome2 && nome3 && nome4){
        window.cheatactive = true;
        console.log(window.cheatactive)
        localStorage.setItem('cheat', "true");
    }   
}

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("aboutModal");
    var btn = document.getElementById("aboutButton");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var exitButton = document.getElementById("exitButton");
    exitButton.onclick = function() {
        window.close();
    }
});

document.getElementById('playButton').addEventListener('click', function(event) {
    event.preventDefault();
    let confirmation = confirm("O jogo é melhor jogado com um zoom de 80%\nDeseja continuar?");
    if (confirmation) {
        window.location.href = "jogo.html";
    }
    alert(`Tutorial para o game:
    Você pode jogar com os botões aparecendo na tela ou usando:
    W A S D ou as setas no teclado para movimentar o personagem.
    Para atacar, defender ou curar-se, você pode usar as teclas:
    Z X C respectivamente.`)
});
