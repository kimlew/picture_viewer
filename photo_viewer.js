
function init() {
  var petsSpan = document.getElementById("pets");
  var facesSpan = document.getElementById("faces");
  
  petsSpan.onclick = selectPets;
  facesSpan.onclick = selectFaces;
}

function selectPets() {
  var ul = document.getElementById("petsList");
  ul.setAttribute("class", "show");
}

function selectFaces() {
  var ul = document.getElementById("facesList");
  ul.setAttribute("class", "show");
}

window.onload = init;