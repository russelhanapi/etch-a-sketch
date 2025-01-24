const generatePixels = function (n) {
  for (let i = 0; i < n; i++) {
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('inner-container');
    outerContainer.appendChild(innerContainer);

    for (let j = 0; j < n; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      innerContainer.appendChild(pixel);
    }
  }
};

const setNumOfSquare = function () {
  let n = Number(prompt('Enter number of pixels'));
  while (isNaN(n) || n < 1 || n >= 100)
    n = Number(prompt('Input must be a positive number NOT greater than 100'));
  outerContainer.innerHTML = '';
  generatePixels(n);
};

const draw = function (e) {
  if (e.target.classList.contains('pixel')) {
    e.target.style.backgroundColor = 'black';
  }
};

// ****************************************8

const btnSetNumOfPixels = document.createElement('button');
btnSetNumOfPixels.textContent = 'Set Number of Square';
btnSetNumOfPixels.classList.add('btn-set-num-of-pixels');
document.body.appendChild(btnSetNumOfPixels);

const outerContainer = document.createElement('div');
outerContainer.classList.add('outer-container');
document.body.appendChild(outerContainer);

generatePixels(16);

btnSetNumOfPixels.addEventListener('click', setNumOfSquare);
outerContainer.addEventListener('mouseover', draw);
