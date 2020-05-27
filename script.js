const taskList = document.getElementById('lista-tarefas');
const textInput = document.getElementById('texto-tarefa');
const taskItem = document.getElementsByTagName('li');
const selectedElements = document.getElementsByClassName('selected')
const moveUpButton = document.getElementById('mover-cima');
// criar uma função que irá adicionar uma nova tarefa ao receber o click no botão.
// O texto do item da lista criado, deve ser o texto inserido no text-input.//

function addTask() {
  if (textInput.value === '') {
    alert('Preencha a caixa de texto com sua tarefa!');
  } else {
    const li = document.createElement('li');
    li.innerHTML = textInput.value;
    taskList.appendChild(li);
    textInput.value = '';
    // Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
    li.addEventListener('click', function () {
      li.classList.toggle('selected');
    });
    li.addEventListener('dblclick', function () {
      li.classList.toggle('completed');
    });
  }
}

function deleteList() {
  taskList.innerHTML = '';
}

/* function deleteCompleted() {
  $('.completed').remove();
}*/

function deleteCompleted() {
  const completedElements = document.getElementsByClassName('completed');
  while (completedElements.length > 0) {
    completedElements[0].parentNode.removeChild(completedElements[0]);
  }
}

function removeSelected() {
  while (selectedElements.length > 0) {
    selectedElements[0].parentNode.removeChild(selectedElements[0]);
  }
}

function saveList() {
  localStorage.clear();
  localStorage.setItem('tasks', taskList.innerHTML);
}

function loadSavedList() {
  const savedList = localStorage.getItem('tasks');
  taskList.innerHTML = savedList;
}
loadSavedList();

/* function moveUp() {
  if (selectedElements.length === 0) {
    alert('Não há item selecionado.');
  } else  if (selectedElements.length > 1) {
    alert('Selecione apenas um item para mover!');
  } else if (selectedElements.length === 1) {
    const siblings = taskList.children;
    console.log(siblings);
    console.log(selectedElements);
    const irmaos = document.querySelector('li').parentNode.childNodes;
    console.log(irmaos);
  } else {
    alert('Chegou até o topo da lista.');
  }
} */
