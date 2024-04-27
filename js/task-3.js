// Get input element
const getInput = document.querySelector("#name-input");
// Get output element
const getOutput = document.querySelector("#name-output");

// Enroll typing data to output
getInput.addEventListener("input", handleInput);

function handleInput(event) {
  if (
    event.currentTarget.value === "" ||
    event.currentTarget.value.charAt(0) === " "
  ) {
    getOutput.textContent = "Anonymous";
  } else {
    getOutput.textContent = event.currentTarget.value.trim();
  }
}
