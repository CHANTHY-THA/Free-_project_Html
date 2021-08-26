

function getText(){
    console.log(text)
};

let text = document.getElementById("text");
let button = document.querySelector("submit");
button.addEventListener("click", getText);