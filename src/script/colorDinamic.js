const wraper = document.querySelector(".wraper");
const bollOne = document.querySelector(".boll__one");
const bollTwo = document.querySelector(".boll__two");
const bollThree = document.querySelector(".boll__three");
const bollOneFourth = document.querySelector(".boll__one__fourth");
const bollTwoFourth = document.querySelector(".boll__two__fourth");
const bollThreeFourth = document.querySelector(".boll__three__fourth");
const presentlyScreen = document.querySelector(".frame__one");
const fourthScreen = document.querySelector(".frame__two");
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
  presentlyScreen.style.top = "1500px";
  setTimeout(() => {
    bollOneFourth.style.left = `${screenWidth + -152}px`;
    bollTwoFourth.style.left = `${screenWidth + 788}px`;
    bollThreeFourth.style.left = `${screenWidth + 1064}px`;
  }, 1500);
  setTimeout(() => {
    fourthScreen.style.top = "267px";
  }, 2000);
});

btnPrev.addEventListener("click", () => {
  setTimeout(() => {
    wraper.style.backgroundColor = "#8dbdba";
    bollOne.style.left = "280px";
    bollTwo.style.left = "-2px";
    bollThree.style.left = "1052px";
  }, 1550);
  setTimeout(() => {
    presentlyScreen.style.top = "267px";
  }, 2000);
  fourthScreen.style.top = "1500px";
  bollOneFourth.style.left = "4000px";
  bollTwoFourth.style.left = "4000px";
  bollThreeFourth.style.left = "4000px";
});
