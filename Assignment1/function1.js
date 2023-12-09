const randomNumberElement = document.getElementById('random-number');
const generateButton = document.getElementById('generate-button');

function getRandomNumber() {
  return Math.floor(Math.random() * 100)+1;
}

function updateRandomNumberDisplay() {
  randomNumberElement.textContent = getRandomNumber();
}

updateRandomNumberDisplay(); // Display initial random number

generateButton.addEventListener('click', updateRandomNumberDisplay);
