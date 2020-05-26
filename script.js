//Add item list
let addButton = document.getElementById("criar-tarefa");
let textInput = document.getElementById("texto-tarefa");
let listOfItems = document.getElementById("lista-tarefas");

addButton.addEventListener("click", addItemList);

function addItemList() {
  let listItems = document.createElement("li");
  listOfItems.appendChild(listItems);
  listItems.innerText = textInput.value;
  textInput.value = "";
}

//Change list item bg color to grey when clicked
function changeBGColor() {
  let tagLI = document.getElementsByTagName("li");
  for(let i = 0; i < tagLI.length; i += 1) {
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
  } 
}
listOfItems.addEventListener("click", changeBGColor);
