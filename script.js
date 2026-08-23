const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dots");
const current = document.getElementById("current");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

function updateSlide() {
  items.forEach((item) => {
    item.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  items[index].classList.add("active");
  dots[index].classList.add("active");

  current.textContent = String(index + 1).padStart(2, "0");
}

next.addEventListener("click", () => {
  index++;

  if (index >= items.length) {
    index = 0;
  }

  updateSlide();
});

prev.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = items.length - 1;
  }

  updateSlide();
});
