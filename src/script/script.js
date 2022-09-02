let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;

const container = document.querySelector(".slider__container");
const track = document.querySelector(".slider__track");
const items = document.querySelectorAll(".slider__item");
const btnPrev = document.querySelector(".prev__anim");
const btnNext = document.querySelector(".next__btn");
const frame = document.querySelectorAll(".frame");
const frameBox = document.querySelectorAll(".frame__box");

const screenParam = document.querySelector(".wraper");
const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
console.log(screenHeight);
track.style.height = `${screenHeight}px`;
frameBox.forEach((element) => {
  element.style.height = `${screenHeight}px`;
});
frame.forEach((element) => {
  element.style.top = `${screenHeight - 650}px`;
});

const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach(function (item) {
  item.style.minWidth = `${itemWidth}px`;
});

btnPrev.addEventListener("click", () => {
  setTimeout(() => {
    setPosition();
  }, 1000);
  position += movePosition;
  checkBtns();
});

btnNext.addEventListener("click", () => {
  setTimeout(() => {
    setPosition();
  }, 1000);
  position -= movePosition;
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position == 0;
  btnNext.disabled = position <= -(itemsCount - slidesToScroll) * itemWidth;
};

checkBtns();
