// creating colors array for background
const colors = [
  "#005F73",
  "#0A9396",
  "#94D2BD",
  "#E9D8A6",
  "#EE9B00",
  "#CA6702",
  "#BB3E03",
  "#AE2012",
  "#9B2226",
];

// targeting the button and the hex value
const btn = document.querySelector(".btn");
const colorValue = document.getElementById("color-value");

// function for btn
btn.addEventListener("click", function () {
  //   random number for the array
  const randomNumber = getRandomColor();
  console.log(randomNumber);
  //   change the value of the color text
  colorValue.textContent = colors[randomNumber];
  //   change the background color
  document.body.style.backgroundColor = colors[randomNumber];
});

// get random color from array
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
