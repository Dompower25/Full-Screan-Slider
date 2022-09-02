const wraper = document.querySelector(".wraper");
const bollOne = document.querySelector(".boll__one");
const bollTwo = document.querySelector(".boll__two");
const bollThree = document.querySelector(".boll__three");
const bollOneFourth = document.querySelector(".boll__one__fourth");
const bollTwoFourth = document.querySelector(".boll__two__fourth");
const bollThreeFourth = document.querySelector(".boll__three__fourth");
const presentlyScreen = document.querySelector(".presently__screen");
const btnPrev = document.querySelector(".prev__color");
const btnNext = document.querySelector(".next__btn");
const screenWidth = window.innerWidth;

btnNext.addEventListener("click", () => {
  setTimeout(() => {
    wraper.style.backgroundColor = "#8675ba";
  }, 1750);

  bollOne.style.left = "-300px";
  bollTwo.style.left = "-300px";
  bollThree.style.left = "-3000px";
  setTimeout(() => {
    bollOneFourth.style.left = `${screenWidth + -152}px`;
    bollTwoFourth.style.left = `${screenWidth + 788}px`;
    bollThreeFourth.style.left = `${screenWidth + 1064}px`;
  }, 1500);
});

btnPrev.addEventListener("click", () => {
  setTimeout(() => {
    wraper.style.backgroundColor = "#8dbdba";
    bollOne.style.left = "280px";
    bollTwo.style.left = "-2px";
    bollThree.style.left = "1052px";
  }, 1550);

  bollOneFourth.style.left = "4000px";
  bollTwoFourth.style.left = "4000px";
  bollThreeFourth.style.left = "4000px";
});
