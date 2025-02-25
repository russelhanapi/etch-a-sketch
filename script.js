// Function to generate a grid of pixel divs
const generatePixels = function (n) {
  for (let i = 0; i < n; i++) {
    // Create a row container
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('inner-container');
    outerContainer.appendChild(innerContainer);

    for (let j = 0; j < n; j++) {
      // Create individual pixel divs and add them to the row
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      innerContainer.appendChild(pixel);
    }
  }
};

// Function to prompt the user for grid size and regenerate the grid
const setNumOfSquare = function () {
  let n = Number(prompt('Enter number of pixels'));

  // Ensure the input is a valid number between 1 and 99
  while (isNaN(n) || n < 1 || n >= 100) {
    n = Number(prompt('Input must be a positive number NOT greater than 100'));
  }

  // Clear the existing grid and generate a new one
  outerContainer.innerHTML = '';
  generatePixels(n);
};

// Function to generate a random integer between 0 and max
const generateRandomInteger = function (max) {
  return Math.floor(Math.random() * (max + 1));
};

// Function to generate a random RGB color
const generateRandomRgbColor = function () {
  let r = generateRandomInteger(255);
  let g = generateRandomInteger(255);
  let b = generateRandomInteger(255);
  return [r, g, b];
};

// Function to change the color of a pixel on hover
const draw = function (e) {
  if (e.target.classList.contains('pixel')) {
    // Generate a random color and apply it to the hovered pixel
    const [r, g, b] = generateRandomRgbColor();
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
};

// *****************************************

// Create a button to set the number of squares (grid size)
const btnSetNumOfPixels = document.createElement('button');
btnSetNumOfPixels.textContent = 'Set Number of Square';
btnSetNumOfPixels.classList.add('btn-set-num-of-pixels');
document.body.appendChild(btnSetNumOfPixels);

// Create the outer container to hold the pixel grid
const outerContainer = document.createElement('div');
outerContainer.classList.add('outer-container');
document.body.appendChild(outerContainer);

// Generate an initial 16x16 grid on page load
generatePixels(16);

// Event listener to set a new grid size when the button is clicked
btnSetNumOfPixels.addEventListener('click', setNumOfSquare);

// Event listener to apply random colors on mouseover
outerContainer.addEventListener('mouseover', draw);
