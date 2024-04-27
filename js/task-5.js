// Define references for elements
const getWidget = document.querySelector(".widget");
const getSpan = document.querySelector(".color");
const getButton = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

getButton.addEventListener("click", handleClick);

function handleClick(event) {
  const generatedColor = getRandomHexColor();
  getWidget.style.backgroundColor = generatedColor;
  getSpan.textContent = generatedColor;
}
