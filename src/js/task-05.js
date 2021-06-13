const inputRef = document.querySelector("#name-input");

let spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    return (spanRef.textContent = "незнакомец");
  }
  spanRef.textContent = event.currentTarget.value;
}
