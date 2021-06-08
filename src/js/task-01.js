const getParentEl = document.querySelector("#categories");
// console.log(getParentEl);

// =================================================================================== TASK 1

const getListOfParentEl = getParentEl.children;
// console.log(getListOfParentEl);
console.log(`В списке ${getListOfParentEl.length} категории`);

// const getListOfLiEl = document.querySelector(".item");
// console.log(`Категория: ${getListOfLiEl.querySelector("h2").textContent}`);
// console.log(
//   `Количество элементов: ${getListOfLiEl.querySelector("ul").children.length}`
// );

const builtCategoriesParams = (elem) => {
  return elem.forEach((stringBuilder) =>
    console.log(
      `\nКатегория: ${
        stringBuilder.querySelector("h2").textContent
      } \nКоличество элементов: ${
        stringBuilder.querySelector("ul").children.length
      }`
    )
  );
};

builtCategoriesParams(document.querySelectorAll(".item"));

// ============================================================================ END OF TASK 1
