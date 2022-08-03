const textInput = document.querySelector("#validation-input");
const countSymbols = document.querySelector('[data-length="6"]')

textInput.addEventListener("blur", numberCountSymbols);


function numberCountSymbols(event) {
    if (event.currentTarget.value.length === 6) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
         textInput.classList.remove('valid');
         textInput.classList.add('invalid');
    }
}