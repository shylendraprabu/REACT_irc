document.addEventListener('DOMContentLoaded', function () {
    const incrementButton = document.getElementById('incrementButton');
    const counterValue = document.getElementById('counterValue');
  
    let counter = 0;
  
    incrementButton.addEventListener('click', function () {
      counter++;
  
      counterValue.textContent = `Counter: ${counter}`;
    });
  });
  