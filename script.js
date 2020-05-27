// Variáveis
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
const botaoRemoverSelecionado = document.getElementById('remover-selecionado');
const botaoCima = document.getElementById('mover-cima');
const botaoBaixo = document.getElementById('mover-baixo');
let target = '';
let itemSelecionado = '';


// Funções
function acrescentarTarefa() {
  const li = document.createElement('li');
  listaTarefas.appendChild(li);
  li.innerText = textoTarefa.value;
  li.classList.add('item-tarefa');
  textoTarefa.value = '';
}

function riscaTarefa() {
  target = event.target;
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

function apagaTodos() {
  listaTarefas.innerText = '';
}

function saveList() {
  localStorage.setItem('save-list', listaTarefas.innerHTML);
}

function getList() {
  listaTarefas.innerHTML = localStorage.getItem('save-list');
}

function seleciona() {
  if (event.target.classList.contains('item-tarefa')) {
    event.target.classList.add('selected');
    itemSelecionado = event.target;
  }
}

function removeDone() {
  const completedTasks = document.getElementsByClassName('completed');
  for (let j = completedTasks.length - 1; j >= 0; j -= 1) {
    completedTasks[j].remove();
  }
}

function removeSelected() {
  itemSelecionado = document.getElementsByClassName('selected')[0].remove();
}

function adicionarTarefaEnter(tecla) {
  if (tecla.key === 'Enter') {
    acrescentarTarefa();
  }
}

function moverCima() {
  if (itemSelecionado.previousElementSibling) {
    listaTarefas.insertBefore(itemSelecionado, itemSelecionado.previousElementSibling);
  } else if (!itemSelecionado.previousElementSibling) {
    alert('O item selecionado já é o topo da lista!');
  } else {
    alert('É preciso selecionar um item para mover!');
  }
}

function moverBaixo() {
  let proximoItem = itemSelecionado.nextElementSibling;
  if (proximoItem) {
    listaTarefas.insertBefore(itemSelecionado, proximoItem.nextElementSibling);
  } else if (!proximoItem) {
    alert('O item selecionado já é o final da lista!');
  } else {
    alert('É preciso selecionar um item para mover!')
  }
}

// Event Listners
textoTarefa.addEventListener('keyup', adicionarTarefaEnter);
criarTarefa.addEventListener('click', acrescentarTarefa);
apagaTudo.addEventListener('click', apagaTodos);
listaTarefas.addEventListener('click', seleciona);
listaTarefas.addEventListener('dblclick', riscaTarefa);
botaoRemoverFinalizados.addEventListener('click', removeDone);
botaoRemoverSelecionado.addEventListener('click', removeSelected);
botaoSalvarTarefas.addEventListener('click', saveList);
getList();
botaoCima.addEventListener('click', moverCima);
botaoBaixo.addEventListener('click', moverBaixo);
