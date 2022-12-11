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



















// --------------------------- CODE REALISE PAR FL ------------------------------

// close modal
document.querySelector(".close").addEventListener("click", () => { resetFieldsNClose(); });
//gestion de la fermeture par touche echap
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") { resetFieldsNClose(); }
});





















// init des variables
let formAnswers = {};
let formRecipe = document.querySelector("#inscriptionForm");
const messageError = {
  text: "Le champ dois posseder un minimum de 2 caractères",
  email: "Le format email n'est pas réspécté Ex : test.test@test.com",
  number: "Veuillez saisir une valeur numérique",
  radio: "Veuillez selectionner une option",
  checkbox: "Sans acceptation des conditions générales, votre inscription est impossible"
};

const outputMessage = {};

// Submit event
document.querySelector(".btn-submit").addEventListener("click", (event) => {
  getFormAnswers();
  // checkAnswers();
});


function getFormAnswers() {
  formRecipe.querySelectorAll("input").forEach(item => {

    formAnswers[item.id] = { required: item.required, type: item.type, value: item.value, checked: item.checked };



    // const node = document.createElement('<output id="output"></output>');
    // item.appendChild(node);
    // if (item.value == "" && item.required) {
    //   formAnswers[item.id] = "error";
    // } else if (item.value == "" && !item.required) {
    //   formAnswers[item.id] = "blank";
    // } else if (item.value != "") {
    //   item.type == "submit" ? null :
    //     item.type == "text" ? (/[A-Za-z]{2,}/.test(item.value) ? formAnswers[item.id] = [item.value] : formAnswers[item.id] = "error") :
    //       item.type == "email" ? (/[A-Za-z0-9_\.+]+@[A-Za-z0-9]+\.[a-z]{2,3}/.test(item.value) ? formAnswers[item.id] = [item.value] : formAnswers[item.id] = "error") :
    //         item.type == "date" ? (item.value == "" ? formAnswers[item.id] = "error" : formAnswers[item.id] = [item.value]) :
    //           item.type == "number" ? (/[0-9]*/.test(item.value) ? formAnswers[item.id] = [item.value] : formAnswers[item.id] = "error") :
    //             item.type == "checkbox" ? formAnswers[item.id] = [item.checked] :
    //               item.type == "radio" ? (item.checked ? formAnswers[item.name] = [item.value] : null) : null;
    // }
  })
  console.log(formAnswers);

};

function checkAnswers() {

  formAnswers.forEach((value, index) => {
    console.log(value, index)
  })

  //<output id="output"></output>

}







// function getFormAnswers() {
//   formRecipe.querySelectorAll("input").forEach(item => {
//     console.log(item.required);
//     item.type == "submit" ? null :
//       item.type == "text" ? (/[A-Za-z]{2,}/.test(item.value) ? formAnswers[item.id] = item.value : formAnswers[item.id] = "error") :
//         item.type == "email" ? (/[A-Za-z0-9_\.+]+@[A-Za-z0-9]+\.[a-z]{2,3}/.test(item.value) ? formAnswers.push(`${item.id} : ${item.value}`) : formAnswers.push(`${item.id} : "error"`)) :
//           item.type == "date" ? formAnswers.push(`${item.id} : ${item.value}`) :
//             item.type == "number" ? (/[0-9]*/.test(item.value) ? formAnswers.push(`${item.id} : ${item.value}`) : formAnswers.push(`${item.id} : "error"`)) :
//               null;
//     // document.querySelector('input[name="location"]:checked') == null ? formAnswers.push(`${"location"} : ${"error"}`) : formAnswers.push(`${"location"} :${document.querySelector('input[name="location"]:checked').defaultValue}`);
//     item.type == "checkbox" ? formAnswers.push(`${item.id} : ${item.checked}`) : null;
//   })

//   console.log("formAnswers", formAnswers);
// };






// function resetFieldsNClose() {
//   // remise à zero du formulaire
//   document.querySelector("#first").value = "";
//   document.querySelector("#last").value = "";
//   document.querySelector("#email").value = "";
//   document.querySelector("#birthdate").value = "";
//   document.querySelector("#quantity").value = "";
//   // document.querySelector('input[name="location"]:checked').value = false; //reset des radios
//   document.querySelector("#checkbox1").checked = false; //mise à zero
//   document.querySelector("#checkbox2").checked = false; //mise à zero
//   modalbg.style.display = "none";
// };