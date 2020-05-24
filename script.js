// variaveis
const ol = document.getElementById('lista-tarefas');
const addTask = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const limpaTudo = document.getElementById('apaga-tudo');
const limpaFin = document.getElementById('remover-finalizados');
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
  for (let index = 0; index < ol.children.length; index += 1) {
    console.log(ol.children[index]);
    if (ol.children[index].classList.contains('completed')) {
      ol.removeChild(ol.children[index]);
    }
  }
}

function apagaTodos() {
  ol.innerText = '';
}

function riscaTarefa() {
  target = event.target;
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
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
