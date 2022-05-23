const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (usernameField.value?.length == 0) {
    usernameField.setCustomValidity("Ingrese su usuario");
    usernameField.reportValidity();
    return;
  }

  if (!usernameField.value?.includes("@")) {
    usernameField.setCustomValidity("El usuario debe incluir '@'");
    usernameField.reportValidity();
    return;
  }

  if (passwordField.value?.length == 0) {
    passwordField.setCustomValidity("Ingrese su contraseña");
    passwordField.reportValidity();
    return;
  }

  // submitImplementation...
});

const fields = document.getElementsByClassName("formInput");
for (let field of fields) {
  field.addEventListener("input", (e) => {
    field.setCustomValidity("");
  });
}