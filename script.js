const criarTarefa = document.getElementById('criar-tarefa');
const salvarTarefas = document.getElementById('salvar-tarefas');
const removerFinalizados = document.getElementById('remover-finalizados');
const removerSelecionado = document.getElementById('remover-selecionado');
const apagaTudo = document.getElementById('apaga-tudo');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');
const input = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');

// adds items

function adicionarItem(event) {
  event.preventDefault();
  const newItem = document.createElement('li');
  const newItemText = document.createTextNode(input.value);
  newItem.appendChild(newItemText);
  listaTarefas.appendChild(newItem);
  input.value = '';
}

criarTarefa.addEventListener('click', adicionarItem);


// toggles item state

function toggleItemState(event) {
  const selected = event.target;

  // adds 'completed' class
  if (selected.classList.contains('completed')) {
    selected.classList.remove('completed');
  } else {
    selected.classList.add('completed');
  }

  // styles selected item with strikethrough
  if (selected.style.textDecoration === 'line-through') {
    selected.style.removeProperty('text-decoration');
  } else {
    selected.style.textDecoration = 'line-through';
  }
}

listaTarefas.addEventListener('dblclick', toggleItemState);


// adds id to selected item and remove from previous selected

function selectItem(event) {
  const selected = event.target;
  const listItems = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].removeAttribute('id');
  }
  selected.setAttribute('id', 'selected');
}

listaTarefas.addEventListener('click', selectItem);


// changes background of selected item

listaTarefas.addEventListener('click', changeBg);

function changeBg(event) {
  let selected = event.target;
  selected.style.backgroundColor = 'rgb(128,128,128)';
}


// removes completed tasks

function removesCompleted() {
  const listItems = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].classList.contains('completed')) {
      listItems[i].remove();
    }
  }
}

removerFinalizados.addEventListener('click', removesCompleted);


// removes selected item

function removeSelected() {
  const selected = document.getElementById('selected');
  selected.remove();
}

removerSelecionado.addEventListener('click', removeSelected);


// clears list

function clearAll() {
  const listItems = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].remove();
  }
}

apagaTudo.addEventListener('click', clearAll);


// moves item up and down

function moveTop() {
  const selected = document.getElementById('selected');
  listaTarefas.insertBefore(selected, selected.previousSibling);
}

moverCima.addEventListener('click', moveTop);

function moveDown() {
  // there is not insertAfter function, so we have to do this:
  // 1 > 2 > 3
  // selected = 1; nextElement = 2; then nextElement of 2 = 3
  // insert selected before 3
  // 2 > 1 > 3
  const selected = document.getElementById('selected');
  let nextElement = selected.nextSibling;
  nextElement = nextElement.nextSibling;
  listaTarefas.insertBefore(selected, nextElement);
}

moverBaixo.addEventListener('click', moveDown);


// saves list

function SavesList(){
  localStorage.setItem('list', listaTarefas.innerHTML);
  if (localStorage.getItem('list') != null) {
  listaTarefas = localStorage.getItem('list');
  console.log(localStorage)
  }
}

salvarTarefas.addEventListener('click', SavesList)
