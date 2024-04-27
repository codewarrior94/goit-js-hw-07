// Get form reference
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  const userData = {
    email: "",
    password: "",
  };

  if (login === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  userData.email = login;
  userData.password = password;

  console.log(userData);

  form.reset();
}
