// Select key DOM elements from the HTML
const drawingScreen = document.querySelector('.drawing-screen');
const clearButton = document.querySelector('.clear-button');
const colorModeButton = document.querySelector('.color-mode');
const blackModeButton = document.querySelector('.black-mode');
const setGridSizeButton = document.querySelector('.button-set-grid-size');

// Create outer container inside the drawing screen
const outerContainer = document.createElement('div');
outerContainer.classList.add('outer-container');
drawingScreen.appendChild(outerContainer);

// ========== Drawing Logic ==========

// Generate a grid of pixel divs
function generatePixels(n) {
  for (let i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.classList.add('inner-container');
    outerContainer.appendChild(row);

    for (let j = 0; j < n; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      row.appendChild(pixel);
    }
  }
}

// Prompt user for grid size
function setGridSize() {
  let n;
  do {
    n = prompt('Enter grid size (max: 99):');
    if (n === null) return; // If user cancels, exit the function
    n = Number(n);
  } while (isNaN(n) || n < 1 || n >= 100);

  // Clear the container and generate pixels
  outerContainer.innerHTML = '';
  generatePixels(n);
}

// Generate a random integer between 0 and max
function generateRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Generate a random RGB color
function generateRandomRgbColor() {
  const r = generateRandomInteger(255);
  const g = generateRandomInteger(255);
  const b = generateRandomInteger(255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Mode: 'black' or 'color'
let currentMode = 'black';

// Draw function triggered on hover
function draw(e) {
  if (!e.target.classList.contains('pixel')) return;

  e.target.style.backgroundColor =
    currentMode === 'color' ? generateRandomRgbColor() : '#000';
}

// ========== Event Listeners ==========

// Drawing interaction
outerContainer.addEventListener('mouseover', draw);

// Clear button resets the grid
clearButton.addEventListener('click', () => {
  const pixels = outerContainer.querySelectorAll('.pixel');
  pixels.forEach((pixel) => (pixel.style.backgroundColor = ''));
});

// Toggle to color mode
colorModeButton.addEventListener('click', () => {
  currentMode = 'color';
  colorModeButton.classList.add('active');
  blackModeButton.classList.remove('active');
});

// Toggle to black mode
blackModeButton.addEventListener('click', () => {
  currentMode = 'black';
  blackModeButton.classList.add('active');
  colorModeButton.classList.remove('active');
});

// Set
setGridSizeButton.addEventListener('click', setGridSize);

// ========== Initial Load ==========
generatePixels(16); // Default 16x16 grid
