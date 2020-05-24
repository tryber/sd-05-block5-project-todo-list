// variaveis
const ol = document.getElementById('lista-tarefas');
const addTask = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const limpaTudo = document.getElementById('apaga-tudo');
const limpaSel = document.getElementById('remover-selecionado');
const limpaFin = document.getElementById('remover-finalizados');
const salvaLista = document.getElementById('salvar-tarefas');
let target = '';
let selected = '';
// funcoes
function adicionarTarefa() {
  const li = document.createElement('li');
  ol.appendChild(li);
  li.innerText = taskText.value;
  li.className = 'task';
  taskText.value = '';
}

function apagaFIn() {
  const completos = document.getElementsByClassName('completed');
  for (let index = completos.length - 1; index >= 0; index -= 1) {
    completos[index].remove();
  }
}

function apagaTodos() {
  ol.innerText = '';
}

function apagaSel() {
  const selecionado = document.getElementsByClassName('selected');
  selecionado[0].remove();
}

function recuperaLocal() {
  const savedList = localStorage.getItem('saved tasks');
  ol.innerHTML = savedList;
}

function riscaTarefa() {
  target = event.target;
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

function saveList() {
  localStorage.clear();
  localStorage.setItem('saved tasks', ol.innerHTML);
}

function trocaSelecao() {
  target = event.target;
  if (selected.classList !== undefined) {
    selected.classList.remove('selected');
  }
  target.classList.add('selected');
  selected = document.getElementsByClassName('selected')[0];
}

// eventListeners
addTask.addEventListener('click', adicionarTarefa);
ol.addEventListener('click', trocaSelecao);
ol.addEventListener('dblclick', riscaTarefa);
limpaTudo.addEventListener('click', apagaTodos);
limpaFin.addEventListener('click', apagaFIn);
salvaLista.addEventListener('click', saveList);
limpaSel.addEventListener('click', apagaSel);
recuperaLocal();
