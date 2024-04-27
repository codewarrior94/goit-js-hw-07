// Get parent element
const getParentElement = document.querySelector("#categories");

// Get children elements
const getChildrenElements = getParentElement.children;
console.log(`Number of categories: ${getChildrenElements.length}`);

// Cycle topics for it's name and number of elements in it
const getCountByTopics = topic =>
  topic.forEach(element => {
    console.log(`Categories: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelector("ul").children.length}`);
  });

// Give argument for function
getCountByTopics(document.querySelectorAll(".item"));
