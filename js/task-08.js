const login = document.querySelector("form.login-form");
const email = login.email;
const password = login.password;
const button = document.querySelector("button");

login.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value.length === 0 || password.value.length === 0) {
    alert("Uzupełnij pola!");
  } else {
    const {
      elements: { email, password },
    } = event.currentTarget;
    console.log(`Email: ${email.value} Password: ${password.value}`);
    login.reset();
  }
});
