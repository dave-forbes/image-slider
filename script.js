let slideIndex = 1;

displayPicture();

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

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

play.addEventListener("click", () => {
  toggleButtons();
  startInterval();
});
pause.addEventListener("click", () => {
  toggleButtons();
  stopInterval();
});

function toggleButtons() {
  if (pause.classList.contains("remove")) {
    play.classList.toggle("remove");
    pause.classList.toggle("remove");
  } else if (play.classList.contains("remove")) {
    play.classList.toggle("remove");
    pause.classList.toggle("remove");
  }
}

let interval;

function startInterval() {
  if (!interval) {
    interval = setInterval(slideRight, 5000);
    console.log("start");
  }
}

function stopInterval() {
  clearInterval(interval);
  interval = null;
  console.log("stop");
}
