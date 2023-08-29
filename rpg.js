const object = document.getElementById("movableObject");

iniciar = false;
inventario = [];
mover = true;
arma = 0;
monstro = 0;
mapa = [
    []
];


document.getElementById("btnTopLeft").addEventListener("click", () => moveObject(-50,));
document.getElementById("btnTopRight").addEventListener("click", () => moveObject(50,));
document.getElementById("btnBottomLeft").addEventListener("click", () => moveObject(0,-50,));
document.getElementById("btnBottomRight").addEventListener("click", () => moveObject(0,50,));

function moveObject(x, y) {
  const currentTop = parseInt(object.style.top) || 0;
  const currentLeft = parseInt(object.style.left) || 0;
  
  object.style.top = `${currentTop + y}px`;
  object.style.left = `${currentLeft + x}px`;
}
