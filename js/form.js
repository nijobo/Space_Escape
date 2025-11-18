const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const firstName = form.querySelector("#first_name").value;
  const lastName = form.querySelector("#last_name").value;
  const email = form.querySelector("#email").value;
  const password = form.querySelector("#password").value;
  const terms = form.querySelector("#terms").checked;

  // 2. Vis værdierne i de rigtige output-felter
  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
  passwordOutput.textContent = password;
  termsOutput.textContent = terms ? "Accepteret" : "Ikke accepteret";

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  // ...
  optionsOutput.textContent = formData.getAll("my_options").join(", ");
  // ...
  form.reset();
}
