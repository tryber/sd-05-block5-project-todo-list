// variaveis
const ol = document.getElementById('lista-tarefas');
const addTask = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const limpaTudo = document.getElementById('apaga-tudo');
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

function recuperaLocal() {
  for (let i = 0; i < localStorage.length; i += 1) {
    let key = localStorage.key(i);
    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = localStorage[key];
    li.className = 'task';
  }
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
  for (let index = 0; index < ol.children.length; index += 1) {
    localStorage.setItem('task ' + (index + 1), ol.children[index].innerText);
  }
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
recuperaLocal();
