const addParagraphButton = document.getElementById('add-paragraph');
const contentElement = document.getElementById('content');

function addParagraph() {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'DOM Manipulation, short for Document Object Model Manipulation, is the art of dynamically modifying the structure and content of a web page after it has loaded. By manipulating the DOM, web developers can create interactive and engaging experiences for users.';
  contentElement.appendChild(newParagraph);
}

addParagraphButton.addEventListener('click', addParagraph);
