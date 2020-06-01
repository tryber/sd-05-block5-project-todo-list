// Add item list
const addButton = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const listOfItems = document.getElementById('lista-tarefas');

function addItemList() {
  const listItems = document.createElement('li');
  listOfItems.appendChild(listItems);
  listItems.innerText = textInput.value;
  textInput.value = '';
  textInput.focus();
}

addButton.addEventListener('click', addItemList);

// Select Element - Change list item bg color to grey when clicked
function selectItem(event) {
  for (item of listOfItems.children) {
    item.classList.remove('selected');
    if (event.target !== listOfItems) {
      event.target.classList.add('selected');
    }
  }
}
listOfItems.addEventListener('click', selectItem);

// Line-through completed items
function completedItems(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else if (event.target !== listOfItems) {
    event.target.classList.add('completed');
  }
}
listOfItems.addEventListener('dblclick', completedItems);

// Delete all list items
const deleteAllButton = document.getElementById('apaga-tudo');
function deleteList() {
  listOfItems.innerText = '';
}

deleteAllButton.addEventListener('click', deleteList);

// Delete completed items
const deleteCompletedButton = document.getElementById('remover-finalizados');
const itemsCompleted = document.getElementsByClassName('completed');

function deleteCompleted() {
  for (let i = itemsCompleted.length - 1; i >= 0; i -= 1) {
    itemsCompleted[i].remove();
  }
}

deleteCompletedButton.addEventListener('click', deleteCompleted);

// Save and Load List
const saveListButton = document.getElementById('salvar-tarefas');
function saveList() {
  const itemsList = listOfItems.innerHTML;
  localStorage.setItem('list', itemsList);
}
saveListButton.addEventListener('click', saveList);

function loadList() {
  listOfItems.innerHTML = localStorage.getItem('list');
}
window.onload = loadList;

// Move items up
function moveUp() {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement !== undefined) {
    if (selectedElement.previousElementSibling !== null) {
      const saveText = selectedElement.previousElementSibling.innerText;
      selectedElement.previousElementSibling.innerText = selectedElement.innerText;
      selectedElement.innerText = saveText;
      selectedElement.classList.remove('selected');
      selectedElement.previousElementSibling.classList.add('selected');
    }
  }
}

const moveUpmoveUpButton = document.getElementById('mover-cima');
moveUpButton.addEventListener('click', moveUp);

// Move items down
function moveDown() {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement !== undefined) {
    if (selectedElement.nextElementSibling !== null) {
      const saveText = selectedElement.nextSibling.innerText;
      selectedElement.nextElementSibling.innerText = selectedElement.innerText;
      selectedElement.innerText = saveText;
      selectedElement.classList.remove('selected');
      selectedElement.nextElementSibling.classList.add('selected');
    }
  }
}

const moveDownButton = document.getElementById('mover-baixo');
moveDownButton.addEventListener('click', moveDown);

// Remove selected item

function removeSelected() {
  const selectedElement = document.querySelector('.selected');
  selectedElement.remove();
}

const removeSelectedButton = document.getElementById('remover-selecionado');
removeSelectedButton.addEventListener('click', removeSelected);
