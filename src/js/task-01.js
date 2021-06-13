const getParentEl = document.querySelector("#categories");
// console.log(getParentEl);

// =================================================================================== TASK 1

const getListOfParentEl = getParentEl.children;

console.log(`В списке ${getListOfParentEl.length} категории`);

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
