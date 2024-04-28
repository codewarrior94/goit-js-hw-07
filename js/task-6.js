// Define references
const createButton = document.querySelector("button[data-create]");
const deleteButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");
const input = document.querySelector("input");

// Init event listeners for buttons
createButton.addEventListener("click", handleCreate);
deleteButton.addEventListener("click", handleDelete);

// Init values for functions
const START_VALUE = 30;
let sizeValue = START_VALUE;

function handleCreate() {
  boxesContainer.innerHTML = "";
  sizeValue = START_VALUE;

  const amount = input.value;
  let totalDivBoxes = [];

  if (amount <= 0) {
    alert("Negative values are not allowed");
    input.value = "";
    return;
  }

  // Cycle for construction div elements
  for (let i = 0; i < amount && i < 100; i++) {
    const constructorDiv = document.createElement("div");

    constructorDiv.style.backgroundColor = `${getRandomHexColor()}`;
    constructorDiv.style.width = `${sizeValue}px`;
    constructorDiv.style.height = `${sizeValue}px`;
    constructorDiv.style.margin = "10px";

    sizeValue += 10;

    totalDivBoxes.push(constructorDiv);
  }
  // Creating markup in browser
  boxesContainer.append(...totalDivBoxes);
  input.value = "";
  console.log(totalDivBoxes); // To check how many div containers were created
}

function handleDelete() {
  boxesContainer.innerHTML = "";
  input.value = "";
  sizeValue = START_VALUE;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
