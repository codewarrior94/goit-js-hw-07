const containerRef = document.querySelector("#counter");

let counterValue = document.querySelector("#value");

const incrementBtn = containerRef.lastElementChild;

const decrementBtn = containerRef.firstElementChild;

function increment() {
  counterValue.textContent++;
}

function decrement() {
  counterValue.textContent--;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
