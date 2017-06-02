// For JSLint:

// To disable use strict warning:
/*jslint node: true */

// To disable warning for undeclared document, window
/*jslint browser: true*/

/*jslint white: true */

function init() {
  "use strict";
  
  var petsSpan = document.getElementById("pets");
  var facesSpan = document.getElementById("faces");
  
  petsSpan.onclick = selectPets;
  facesSpan.onclick = selectFaces;
}

function selectPets() {
  var ul = document.getElementById("petsList");
  ul.setAttribute("class", "show"); // Does same as: <ul id="petsList" class="show">
}

function selectFaces() {
  var ul = document.getElementById("facesList");
  ul.setAttribute("class", "show"); // Does same as: <ul id="facesList" class="show">
}

window.onload = init;