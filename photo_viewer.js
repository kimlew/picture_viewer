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

function showHide(elem) {
  // ulClass - initially ""
  // Toggle show/hide - so menus hidden when clicked a 2nd time.
  var ulClass = elem.getAttribute("class");
  
  if (ulClass == "show") {
    // Element is selected - so deselect it and hide it.
    elem.setAttribute("class", "");
  }
  else {
    // Element is NOT selected - so select it and show it.
    elem.setAttribute("class", "show");
  }
  
}

window.onload = init;