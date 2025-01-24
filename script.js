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

const outerContainer = document.createElement('div');
outerContainer.classList.add('outer-container');
document.body.appendChild(outerContainer);

generatePixels(16);
