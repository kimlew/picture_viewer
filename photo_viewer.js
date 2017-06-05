// For JSLint:

// To disable use strict warning:
/*jslint node: true */

// To disable warning for undeclared document, window
/*jslint browser: true*/

// To ignore number of indentation spaces.
/*jslint white: true */

function init() {
  "use strict";
  
  var petsSpan = document.getElementById("pets");
  var facesSpan = document.getElementById("faces");
  
  petsSpan.onclick = selectPets;
  facesSpan.onclick = selectFaces;
  
  var links = document.querySelectorAll("a");
  
  // Loop through collection of elements, links. Adds addImage() as click
  // handler for each element in collection.
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = addImage;
  }
}

function selectPets() {
  var ul = document.getElementById("petsList");
  showHide(ul);

}

function selectFaces() {
  var ul = document.getElementById("facesList");
  showHide(ul);
}

function showHide(elem) {
  // Show ONLY menu user clicked on. Hide other menus.
  // Deselect everything.
  var selectedElems = document.querySelectorAll(".show");
  
  // Loop through all elements in the collection of elements in the show class 
  // (in this case - is only 1) & compare to the user-clicked one. If not the
  // user-clicked one, set the class to empty "" - to hide it.
  for (var i = 0; i < selectedElems.length; i++) {
    if (selectedElems[i] != elem) {
      selectedElems[i].setAttribute("class", "");
    }
  }
  
  // ulClass - initially ""
  // Toggle show/hide - so menus hidden when clicked a 2nd time.
  var ulClass = elem.getAttribute("class");
  
  if (ulClass == "show") {
    // Element is selected - so deselect it and hide it.
    elem.setAttribute("class", ""); // e.g. Does same as: <ul id="petsList" class="show">
  }
  else {
    // Element is NOT selected - so select it and show it.
    elem.setAttribute("class", "show");
  }
  
}

function addImage(evObj) {
  // 
  var a = evObj.target;
  var imagePath = a.getAttribute("href");
  
  return false; // Prevents browser from going to a new web page.
}
window.onload = init;