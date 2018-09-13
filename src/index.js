const formSubmit = document.querySelector("form");
const messageBox = document.querySelector("#messagebox");
const tweetArea = document.querySelector(".tweet--area");

formSubmit.addEventListener("submit", event => {
    event.preventDefault();

    const containerNode = document.createElement("p");
    const textContent = document.createTextNode(messageBox.value);
    
    containerNode.prepend(textContent);
    tweetArea.prepend(containerNode);
    
    messageBox.value = ""; // reset
});


const textInput = document.querySelector("#messagebox");
let counter = document.querySelector("#countTarget");
let currentCount  = 50;

textInput.addEventListener("input", event => {
    currentCount-- 
    counter.textContent = currentCount;
     if (currentCount < 0 ) {
        counter.style.color = "red"
     }
})
