const colorHistory = [];

  function changeColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor.code;
    colorHistory.push(randomColor);
    updateColorHistory();
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    let colorName = '';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    // Generating a random color name for demonstration
    colorName = 'Color ' + (colorHistory.length + 1);
    return { name: colorName, code: color };
  }
  
  function updateColorHistory() {
    const historyContainer = document.querySelector('.history');
    historyContainer.innerHTML = 'Color History:<br>';
    colorHistory.forEach(color => {
      const colorBox = document.createElement('div');
      colorBox.style.backgroundColor = color.code;
      colorBox.classList.add('color-box');
      const colorInfo = document.createElement('span');
      colorInfo.textContent = color.name + ' - ' + color.code;
      historyContainer.appendChild(colorBox);
      historyContainer.appendChild(colorInfo);
      historyContainer.appendChild(document.createElement('br'));
    });
  }
  