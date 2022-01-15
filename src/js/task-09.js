function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Refs = {
  body: document.body.style.backgroundColor,
  btnChangeColor: document.querySelector('.change-color'),
  span: document.querySelector('.color')
}

Refs.btnChangeColor.addEventListener('click', changesBackgroundColorOfBody);

function changesBackgroundColorOfBody(event) {
 document.body.style.backgroundColor = `${getRandomHexColor()}`;
 Refs.span.textContent = `${getRandomHexColor()}`;
}




