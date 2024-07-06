document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login");
  
    // Field elements
    const name = document.getElementById("name");
    const password = document.getElementById("password");
  
    // Error messages
    const nameError = document.getElementById("nameError");
    const passwordError = document.getElementById("passwordError");
  
    // Validation patterns
    const namePattern = /^[a-zA-Z]{2,}$/;
  
    // Function to reset form styles
    function resetFormStyles() {
      name.classList.remove("invalid");
      password.classList.remove("invalid");
      nameError.textContent = "";
      passwordError.textContent = "";
    }
  
    // Function to set invalid styles and error messages
    function setInvalid(element, errorMessage) {
      element.classList.add("invalid");
      const errorField = element.id === "name" ? nameError : passwordError;
      errorField.textContent = errorMessage;
    }
  
    // Validation functions
    function validateName() {
      if (!name.value.trim()) {
        setInvalid(name, "Name is required");
        return false;
      } else if (!namePattern.test(name.value)) {
        setInvalid(name, "Invalid name format");
        return false;
      }
      return true;
    }
  
    function validatePassword() {
      if (!password.value.trim()) {
        setInvalid(password, "Password is required");
        return false;
      }
      return true;
    }
  
    // Form submit event
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      resetFormStyles();
  
      const isNameValid = validateName();
      const isPasswordValid = validatePassword();
  
      if (isNameValid && isPasswordValid) {
        form.submit();
      }
    });
  });
  