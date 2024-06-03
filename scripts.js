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
});
