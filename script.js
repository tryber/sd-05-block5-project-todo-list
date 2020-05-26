//Add item list
let addButton = document.getElementById("criar-tarefa");
let textInput = document.getElementById("texto-tarefa");
let listOfItems = document.getElementById("lista-tarefas");

addButton.addEventListener("click", addItemList);

function addItemList() {
  let listItems = document.createElement("li");
  listOfItems.appendChild(listItems);
  listItems.innerText = textInput.value;
  textInput.value = null;
}
