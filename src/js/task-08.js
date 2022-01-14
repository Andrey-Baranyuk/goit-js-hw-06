const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = { mail, password };

    console.log(formData)
       
    if (mail === "" || password === "") {

        return alert(`Все поля должны быть заполнены!`)
    }
    
    document.querySelector('.login-form').reset ()

}

