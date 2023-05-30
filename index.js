var imgRandom = [
  "/dice1.png",
  "/dice2.png",
  "/dice3.png",
  "/dice4.png",
  "/dice5.png",
  "/dice6.png",
];

var randomNumber1 = Math.floor(Math.random() * imgRandom.length);
var randomNumber2 = Math.floor(Math.random() * imgRandom.length);

document
  .querySelector(".img1")
  .setAttribute("src", "./images" + imgRandom[randomNumber1]);
document
  .querySelector(".img2")
  .setAttribute("src", "./images" + imgRandom[randomNumber2]);

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else if (randomNumber2 == randomNumber1) {
  document.querySelector("h1").innerHTML = "DRAW!";
} else {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
