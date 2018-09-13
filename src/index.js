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



