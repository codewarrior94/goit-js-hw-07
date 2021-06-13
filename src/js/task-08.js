// Инициализация ссылок на элементы ===================
const controlRef = document.getElementById("controls");

const inputRef = controlRef.firstElementChild;

const boxesRef = document.getElementById("boxes");

const createBtn = document.querySelector(
  '#controls button[data-action="render"]'
);

const clearBtn = document.querySelector(
  '#controls button[data-action="destroy"]'
);
//=====================================================

// Инициализация слушателей на кнопки =================
createBtn.addEventListener("click", createBoxes);
clearBtn.addEventListener("click", destroyBoxes);
//=====================================================

// Создание функций для выполнения при клике на кнопку=

const START_VALUE = 30;
let sizeValue = START_VALUE;

function createBoxes() {
  const amount = inputRef.value;
  let totalDivBoxes = [];

  for (let i = 0; i < amount; i++) {
    const constructorDiv = document.createElement("div");

    constructorDiv.style.backgroundColor = `${randomColor({ type: "rgb" })}`;
    constructorDiv.style.width = `${sizeValue}px`;
    constructorDiv.style.height = `${sizeValue}px`;
    constructorDiv.style.margin = "10px";

    sizeValue += 10;

    totalDivBoxes.push(constructorDiv);
  }
  boxesRef.append(...totalDivBoxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
  sizeValue = START_VALUE;
}
