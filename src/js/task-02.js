const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// Выбираем список ul #ingredients
const ulRef = document.querySelector("#ingredients");

// Создаем элементы для списка

const listOfElements = ingredients.map((ingredient) => {
  const liElement = document.createElement("li");

  const linkElement = document.createElement("a");
  linkElement.textContent = ingredient;

  liElement.append(linkElement);

  return liElement;
});

// Добавляем все li в список ul

ulRef.append(...listOfElements);
