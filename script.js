let taskList = document.getElementById('lista-tarefas');
let textInput = document.getElementById('texto-tarefa');
let taskItem = document.getElementsByTagName('li');
let selectedElements = document.getElementsByClassName('selected');
let target = '';
// criar uma função que irá adicionar uma nova tarefa ao receber o click no botão.
// O texto do item da lista criado, deve ser o texto inserido no text-input.//

function addTask() {
  if (textInput.value === '') {
    alert('Preencha a caixa de texto com sua tarefa!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = textInput.value;
    li.className = "item-lista";
    taskList.appendChild(li);
    textInput.value = '';
    li.addEventListener('click', selectItem);
    li.addEventListener('dblclick', concludeItem);
  }
}
let createTask = document.getElementById('criar-tarefa');
createTask.addEventListener('click', addTask);

// função para selecionar o item da lista, e pintar o background de cinza.
function selectItem(event) {
  event.target.classList.toggle('selected');
};
// função para riscar os elementos concluidos
function concludeItem(event) {
  event.target.classList.toggle('completed');
}
// função para deletar a lista toda
function deleteList() {
  taskList.innerHTML = '';
}
const deleteAll = document.getElementById('apaga-tudo');
deleteAll.addEventListener('click', deleteList);
// função para deletar apenas itens completos
function deleteCompleted() {
  const completedElements = document.getElementsByClassName('completed');
  while (completedElements.length > 0) {
    completedElements[0].parentNode.removeChild(completedElements[0]);
  }
}
const deleteCompleteItem = document.getElementById('remover-finalizados');
deleteCompleteItem.addEventListener('click', deleteCompleted);
// função para salvar lista
function saveList() {
  localStorage.clear();
  localStorage.setItem('tasks', document.getElementsByTagName('ol')[0].innerHTML);
}
const saveListButton = document.getElementById('salvar-tarefas');
saveListButton.addEventListener('click', saveList);
// função para carregar itens salvos sempre que a página recarregar
function loadSavedList() {
  if (localStorage.getItem('tasks') != null) {
    document.getElementsByTagName('ol')[0].innerHTML = localStorage.getItem('tasks');
  }
}
loadSavedList();
// função para remover selecionados
function removeSelected() {
  while (selectedElements.length > 0) {
    selectedElements[0].parentNode.removeChild(selectedElements[0]);
  }
}
const deleteSelected = document.getElementById('remover-selecionado');
deleteSelected.addEventListener('click', removeSelected);
// função para mover os itens para cima
function moveUp() {
  if (selectedElements.length === 0) {
    alert('Não há item selecionado.');
  } else  if (selectedElements.length > 1) {
    alert('Selecione apenas um item para mover!');
  } else if (selectedElements.length === 1 && selectedElements[0].previousElementSibling == null) {
    alert('Este ja é o primeiro elemento da lista.');
  } else if (selectedElements.length === 1) {
    let changeElement = selectedElements[0];
    let aux = changeElement.previousElementSibling.innerText;
    changeElement.previousElementSibling.innerText = changeElement.innerText;
    changeElement.innerText = aux;
    changeElement.classList.remove('selected');
    changeElement.previousElementSibling.classList.add('selected');
    selectedElements = document.getElementsByClassName('selected');
  }
}
document.getElementById('mover-cima').addEventListener('click', moveUp);

function moveDown() {
  if (selectedElements.length === 0) {
    alert('Não há item selecionado.');
  } else  if (selectedElements.length > 1) {
    alert('Selecione apenas um item para mover!');
  } else if (selectedElements.length === 1 && selectedElements[0].nextElementSibling == null) {
    alert('Esta ja é o último elemento da lista.');
  } else if (selectedElements.length === 1) {
    let changeElement = selectedElements[0];
    let aux = changeElement.nextElementSibling.innerText;
    changeElement.nextElementSibling.innerText = changeElement.innerText;
    changeElement.innerText = aux;
    changeElement.classList.remove('selected');
    changeElement.nextElementSibling.classList.add('selected');
    selectedElements = document.getElementsByClassName('selected');
  }
}
document.getElementById('mover-baixo').addEventListener('click', moveDown);
