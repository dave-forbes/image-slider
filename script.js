let slideIndex = 1;

displayPicture();

setInterval(slideRight, 5000);

function slideRight() {
  displayPicture();
  if (slideIndex !== 8) {
    slideIndex += 1;
  } else if (slideIndex === 8) {
    slideIndex = 1;
  }
  displayPicture();
}

function slideLeft() {
  displayPicture();
  if (slideIndex !== 1) {
    slideIndex -= 1;
  } else if (slideIndex === 1) {
    slideIndex = 8;
  }
  displayPicture();
}

function displayPicture() {
  const pictureToDisplay = document.querySelector(
    `img[data-index='${slideIndex}']`
  );
  pictureToDisplay.classList.toggle("hidden");
  currentDot();
}

const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");

rightArrow.addEventListener("click", slideRight);
leftArrow.addEventListener("click", slideLeft);

const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => dot.addEventListener("click", clickDot));

function clickDot(e) {
  displayPicture();
  slideIndex = Number(e.target.dataset.index);
  displayPicture();
}

function currentDot() {
  const currentDot = document.querySelector(`i[data-index="${slideIndex}"]`);
  currentDot.classList.toggle("current-dot");
}
