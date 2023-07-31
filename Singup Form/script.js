let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");

function checkPasswordMatch() {
  const pass = password.value;
  const conPass = confirmPassword.value;

  if (pass !== conPass) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  }
}

password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);
