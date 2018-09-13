const formSubmit = document.querySelector("form");
formSubmit.addEventListener("submit", event => {
  event.preventDefault();

  const childNode = document.querySelector("#messagebox");
  const tweetArea = document.querySelector(".tweet--area");

  childNode.value = "";

  const containerNode = document.createElement("p");
  const textContent = document.createTextNode(childNode.value);

  containerNode.prepend(textContent);
  tweetArea.prepend(containerNode);
});
