function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => { modalbg.style.display = "none"; });
//gestion de la fermeture par touche echap
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalbg.style.display = "none";
  }
});
