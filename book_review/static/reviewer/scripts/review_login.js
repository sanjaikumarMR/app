const form = document.querySelector("form");
const eField = form.querySelector(".name"),
      eInput = eField.querySelector("input"),
      pField = form.querySelector(".password"),
      pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault(); // preventing form from submitting

    // if name and password are blank then add shake class, else call specified function
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkName();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

    setTimeout(() => { // remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => { checkName(); } // calling checkName function on name input keyup
    pInput.onkeyup = () => { checkPass(); } // calling checkPass function on password input keyup

    function checkName() { // checkName function
        let pattern = /^[a-zA-Z]{2,}$/; // pattern to validate name
        if (!eInput.value.match(pattern)) { // if pattern not matched then add error and remove valid class
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");
            // if name value is not empty then show valid name message, else show Name can't be blank
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid name" : errorTxt.innerText = "Name can't be blank";
        } else { // if pattern matched then remove error and add valid class
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        let errors = [];

        if (errors.length > 0) {
            pField.classList.add("error");
            pField.classList.remove("valid");
            let errorTxt = pField.querySelector(".error-txt");
            errorTxt.innerText = errors.join("\n");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    // if eField and pField don't contain error class, that means user filled details properly
    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        form.submit(); // redirecting user to the specified URL which is inside action attribute of form tag
    }
}
