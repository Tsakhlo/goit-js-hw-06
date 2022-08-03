const form = document.querySelector('.login-form');
form.addEventListener('submit', loginForm);

function loginForm(event) {
    event.preventDefault()
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
         if (email === "" || password === "") {
        alert("Not all fields are filled");
    } else {
        const formData = {
            email,
            password,
        };
             console.log(formData);
    }
    event.target.reset();   
}
