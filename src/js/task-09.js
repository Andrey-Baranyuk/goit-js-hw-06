function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Refs = {
  body: document.querySelector('body'),
  btnChangeColor: document.querySelector('.change-color')
}

Refs.btnChangeColor.addEventListener('click', getRandomHexColor)

function changeColor(body, getRandomHexColor) {
  document.body.style.backgroundColor = 
}

