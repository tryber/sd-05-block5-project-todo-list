//Add item list
let addButton = document.getElementById("criar-tarefa");
let textInput = document.getElementById("texto-tarefa");
let listOfItems = document.getElementById("lista-tarefas");
let tagLI = document.getElementsByTagName("li");

addButton.addEventListener("click", addItemList);

function addItemList() {
  let listItems = document.createElement("li");
  listOfItems.appendChild(listItems);
  listItems.innerText = textInput.value;
  textInput.value = "";
  textInput.focus();
}

//Change list item bg color to grey when clicked
let itemSelected = "";
function selectItem() {
  if (itemSelected.classList !== undefined) {
    itemSelected.classList.remove("selected");
  }
  if (event.target !== listOfItems) {
    event.target.classList.add("selected");
    itemSelected = event.target;
  }
}
listOfItems.addEventListener("click", selectItem);

//line-through completed items
function completedItems() {
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed");
  } else if (event.target !== listOfItems) {
    event.target.classList.add("completed");
  }
}
listOfItems.addEventListener("dblclick", completedItems);

//Delete all list items
let deleteAllButton = document.getElementById("apaga-tudo");
function deleteList() {
  listOfItems.innerText = "";
}

deleteAllButton.addEventListener("click", deleteList);

//Delete completed items
let deleteCompletedButton = document.getElementById("remover-finalizados");
let itemsCompleted = document.getElementsByClassName("completed");

function deleteCompleted() {
  for (let i = itemsCompleted.length - 1; i >= 0; i -= 1) {
    itemsCompleted[i].remove();
  }
}

deleteCompletedButton.addEventListener("click", deleteCompleted);
