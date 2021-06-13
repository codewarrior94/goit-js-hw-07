const inputRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");

inputRef.addEventListener("input", onInputChange);

function onInputChange() {
  spanRef.style.fontSize = `${inputRef.value}px`;
}
