// Variáveis
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
const botaoRemoverSelecionado = document.getElementById('remover-selecionado');
let target = '';
let itemSelecionado = '';

// Funções
function acrescentarTarefa() {
  const li = document.createElement('li');
  listaTarefas.appendChild(li);
  li.innerText = textoTarefa.value;
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
  if (itemSelecionado.classList !== undefined) {
    itemSelecionado.classList.remove('selected');
  }
  event.target.classList.add('selected');
  itemSelecionado = event.target;
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
