let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueNumber = document.querySelector('#value');
decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    valueNumber.textContent = counterValue;
})
incrementButton.addEventListener('click', () => {
    counterValue += 1;
    valueNumber.textContent = counterValue;
})