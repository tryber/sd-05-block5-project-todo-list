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

//Select Element - Change list item bg color to grey when clicked
function selectItem() {
  if (event.target.classList.contains("selected")) {
    event.target.classList.remove("selected");
    return;
  }
  for (item of listOfItems.children) {
    item.classList.remove("selected");
    if (event.target !== listOfItems) {
      event.target.classList.add("selected");
    }
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

//Save and Load List
let saveListButton = document.getElementById("salvar-tarefas");
function saveList() {
  let itemsList = listOfItems.innerHTML;
  localStorage.setItem("list", itemsList);
}
saveListButton.addEventListener("click", saveList);

function loadList() {
  listOfItems.innerHTML = localStorage.getItem("list");
}
window.onload = loadList;

//Move items up
function moveUp() {
  const selectedElement = document.querySelector(".selected");
  const saveText = selectedElement.previousElementSibling.innerText;
  selectedElement.previousElementSibling.innerText = selectedElement.innerText;
  selectedElement.innerText = saveText;
  selectedElement.classList.remove("selected");
  selectedElement.previousElementSibling.classList.add("selected");
}

let moveUpButton = document.getElementById("mover-cima");
moveUpButton.addEventListener("click", moveUp);

//Move items down
function moveDown() {
  const selectedElement = document.querySelector(".selected");
  const saveText = selectedElement.nextElementSibling.innerText;
  selectedElement.nextElementSibling.innerText = selectedElement.innerText;
  selectedElement.innerText = saveText;
  selectedElement.classList.remove("selected");
  selectedElement.nextElementSibling.classList.add("selected");
}

let moveDownButton = document.getElementById("mover-baixo");
moveDownButton.addEventListener("click", moveDown);
