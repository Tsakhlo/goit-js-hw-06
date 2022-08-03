const inputText = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputText.addEventListener("input", updateField);

function updateField(event) {
    if (event.target.value=== "") {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = event.target.value;
    }
}