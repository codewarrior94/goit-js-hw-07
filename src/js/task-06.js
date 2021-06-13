const formRef = document.getElementById("validation-input");
const dataLength = formRef.dataset.length;

formRef.value.trim();

formRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(dataLength)) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}
