const toDoList = document.getElementById('lista-tarefas');

function addSelected(element) {
  element.addEventListener('click', function () {
    element.classList.toggle('selected');
  });
  element.addEventListener('dblclick', function () {
    element.classList.toggle('completed');
  });
}

function addItem() {
  const li = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const text = document.createTextNode(input.value);
  addSelected(li);
  li.appendChild(text);
  list.appendChild(li);
  input.value = '';
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addItem);

function deleteButton() {
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
}

const clearAll = document.getElementById('apaga-tudo');
clearAll.addEventListener('click', deleteButton);

function removeCompleted() {
  document.querySelectorAll('li').forEach(function (i) {
    if (i.classList.contains('completed')) {
      i.remove();
    }
  });
}
const clearCompleted = document.getElementById('remover-finalizados');
clearCompleted.addEventListener('click', removeCompleted);

document
  .getElementById('salvar-tarefas')
  .addEventListener('click', function () {
    localStorage.setItem(
      'lista',
      document.getElementById('lista-tarefas').innerHTML);
  });
if (window.localStorage.getItem('lista')) {
  document.getElementById(
    'lista-tarefas').innerHTML = window.localStorage.getItem('lista');
  document.querySelectorAll('li').forEach(function (li) {
    addSelected(li);
  });
}

function removeSelected() {
  document.querySelectorAll('li').forEach(function (i) {
    if (i.classList.contains('selected')) {
      i.remove();
    }
  });
}
const clearSelected = document.getElementById('remover-selecionado');
clearSelected.addEventListener('click', removeSelected);

function moveUp() {
  const selected = document.querySelector('.selected');
  return toDoList.insertBefore(selected, selected.previousElementSibling);
}
const up = document.getElementById('mover-cima');
up.onclick = moveUp;

function trocaBaixo() {
  if (selected.classList !== undefined) {
    // verifica se tem algum elemento selecionado para troca
    const quemTroca = document.getElementsByClassName('selected')[0];
    // define variavel com o elemento a ser trocado de posição
    if (quemTroca.nextElementSibling !== null) {
      // verifica se existe um elemento abaixo da task
      // assim se for a ultima tarefa na lista n faz nada
      const aux = quemTroca.nextElementSibling.innerText; // salva o innerText do elemento
      // abaixo em uma variavel auxiliar
      quemTroca.nextElementSibling.innerText = quemTroca.innerText;
      // define o innerText do elemento abaixo com o conteudo do selecionado
      quemTroca.innerText = aux; // define o innerText do elemento selecinado
      // com o salvo anteriormente na variavel auxiliar
      // agora o texto da task selecionada e a task abaixo ja foram invertidos
      quemTroca.classList.remove('selected'); // remove a seleção da task
      quemTroca.nextElementSibling.classList.add('selected'); // passa a seleção da task pro elemento abaixo
      // faz com que você continue com o mesmo valor selecionado apos a inversão dos conteudos
      selected = document.getElementsByClassName('selected')[0]; // define o novo elemento selecionado na variavel usada por outras funções
    }
  }
}
moveBaixo.addEventListener('click', trocaBaixo); 