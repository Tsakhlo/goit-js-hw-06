const fontSize = document.querySelector("#font-size-control");
fontSize.value = 16;
const text = document.querySelector("#text");
let size;

fontSize.addEventListener("input", (event) => {
    size = fontSize.value;
    text.style.fontSize = size + "px";
    //console.log(fontSize.value)
})