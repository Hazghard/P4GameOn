function main() {
    const modalBtn = document.querySelectorAll(".modal-btn");
    const modalCloseBtn = document.querySelectorAll(".close");
    const form = document.querySelector("#inscriptionForm"); //Est-ce utilise de déclarer ici alors qu'on ne l'utilise que tres loin (ca nous oblige a donner en paramatre a chaque niveaux)
    const formSubmit = document.querySelector("#btnsendmodal");

    modalBtn.forEach(btn => btn.addEventListener("click", () => { launchModal(); }));
    modalCloseBtn.forEach(btn => btn.addEventListener("click", () => { closeModal(); }));
    formSubmit.addEventListener("click", (e) => { formValidation(form, e); });

};

main();

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

// launch modal form
function launchModal() {
    document.querySelector(".bground").style.display = "block";
};

// close modal form
function closeModal() {
    document.querySelector(".bground").style.display = "none";
};

// form validation procedure
function formValidation(form, e) {
    e.preventDefault();
    let formInputsValues = [];
    getFormData(form, formInputsValues);
    checkData(formInputsValues);
    showStates(formInputsValues, form);
};

function getFormData(form, formInputsValues) {
    const formInputs = form.querySelectorAll("input");
    let radioList = [];
    formInputs.forEach(input => {
        if (input.type != "radio") {
            formInputsValues.push({
                id: input.id,
                name: input.name,
                type: input.type,
                required: input.required,
                checked: input.checked,
                value: input.value
            });
        } else {
            radioList.push({
                id: input.id,
                name: input.name,
                type: input.type,
                required: input.required,
                checked: input.checked,
                value: input.value
            });
        }
    });

    //supression des doublons pour n'avoir qu'une iteration de name 
    for (let i = 1; i < radioList.length; i++) {
        if (radioList[i - 1].name === radioList[i].name) { radioList.splice(i, 1); i = 0 };
    }

    //iterer sur le name et recuperer si checked si non push error
    radioList.forEach(item => {
        let radioCheckedItem = form.querySelector(`input[type=radio][name=${item.name}]:checked`);
        radioCheckedItem ?
            formInputsValues.push({
                id: radioCheckedItem.id,
                name: radioCheckedItem.name,
                type: radioCheckedItem.type,
                required: radioCheckedItem.required,
                checked: radioCheckedItem.checked,
                value: radioCheckedItem.value,
                state: "ok"
            }) : formInputsValues.push(item);
    })
};

function checkData(formInputsValues) {
    for (let i = 0; i < formInputsValues.length; i++) {
        if (!formInputsValues[i].value && formInputsValues[i].required) {
            formInputsValues[i].state = "error";
        } else if (formInputsValues[i].value == "" && !formInputsValues[i].required) {
            formInputsValues[i].state = "blank";
        } else if (formInputsValues[i].value != "" && formInputsValues[i].required) {
            formInputsValues[i].type == "text" ? (/[A-Za-z]{2,}/.test(formInputsValues[i].value) ? formInputsValues[i].state = "ok" : formInputsValues[i].state = "error") :
                formInputsValues[i].type == "email" ? (/[A-Za-z0-9_\.+]+@[A-Za-z0-9]+\.[a-z]{2,3}/.test(formInputsValues[i].value) ? formInputsValues[i].state = "ok" : formInputsValues[i].state = "error") :
                    formInputsValues[i].type == "date" ? (formInputsValues[i].value == "" ? formInputsValues[i].state = "error" : formInputsValues[i].state = "ok") :
                        formInputsValues[i].type == "number" ? (/[0-9]*/.test(formInputsValues[i].value) ? formInputsValues[i].state = "ok" : formInputsValues[i].state = "error") :
                            formInputsValues[i].type == "checkbox" ? (formInputsValues[i].checked == true ? formInputsValues[i].state = "ok" : formInputsValues[i].state = "error") :
                                formInputsValues[i].type == "radio" ? (formInputsValues[i].checked == true ? formInputsValues[i].state = "ok" : formInputsValues[i].state = "error") : //possible de vérifier aussi avec : (form.querySelectorAll("input[type=radio][name=location]:checked").length > 0 ?
                                    null;
        } else {
            formInputsValues[i].state = "ok";
        }
    }
};

function showStates(formInputsValues, form) {

    //affichage des erreurs
    formInputsValues.forEach(input => {
        //Set les data-error pour proc la regle css et mettre le code erreur
        if (input.state === "error") {
            let formDataSelector = document.querySelector(`div[class="formData"]:has(input[id=${input.id}])`);
            formDataSelector.setAttribute("data-error-visible", "true");
        } else {
            let formDataSelector = document.querySelector(`div[class="formData"]:has(input[id=${input.id}])`);
            formDataSelector.setAttribute("data-error-visible", "false");
        }
    })

    //Insertion du parametre global pour validation complete du form et trigger 
    formInputsValues.some(item => item.state === "error") ? formInputsValues.push({ globalValidators: "nok" }) : (formInputsValues.push({ globalValidators: "ok" }), showFormIsOk(form));

    console.log(formInputsValues);

};

function showFormIsOk(form) {
    console.log(form);
    form.innerHTML = '<span class="successMessage">Merci, votre inscription est bien prise en compte.</br><button class="btn-submit">OK</button></span>';
    form.innerHTML += '';
}
