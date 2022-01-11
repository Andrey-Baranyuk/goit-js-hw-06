const nameType = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');
let nameBase = 'незнакомец';

const nameTypeAdd = (e) =>{
    if (e.currentTarget.value === '') {
        nameText.textContent = 'Anonymous';
    }
    else {
    nameText.textContent = e.currentTarget.value
    }
};

nameType.addEventListener('change', nameTypeAdd);