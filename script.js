// variaveis
const ol = document.getElementById('lista-tarefas');
const addTask = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const limpaTudo = document.getElementById('apaga-tudo');
const limpaSel = document.getElementById('remover-selecionado');
const limpaFin = document.getElementById('remover-finalizados');
const salvaLista = document.getElementById('salvar-tarefas');
const moveBaixo = document.getElementById('mover-baixo');
const moveCima = document.getElementById('mover-cima');
const linhas = document.getElementById('linhas');
let altura = 0;
let target = '';
let selected = '';

// funcoes
function refazLinha() {
  altura = 0;
  for (let i = 0; i < ol.children.length; i += 1) {
    altura += 46;
  }
  const novaAltura = `height: ${altura}px !important`;
  linhas.style = novaAltura;
}

function adicionarTarefa() {
  if (taskText.value.length !== 0) {
    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = taskText.value;
    li.className = 'task';
    taskText.value = '';
    refazLinha();
  }
}

function adicionarTarefaEnter(tecla) {
  if (tecla.key === 'Enter') {
    adicionarTarefa();
  }
}

function apagaFIn() {
  const completos = document.getElementsByClassName('completed');
  for (let index = completos.length - 1; index >= 0; index -= 1) {
    completos[index].remove();
  }
  refazLinha();
}

function apagaTodos() {
  ol.innerText = '';
  refazLinha();
}

function apagaSel() {
  const selecionado = document.getElementsByClassName('selected');
  selecionado[0].remove();
  refazLinha();
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

function trocaBaixo() {
  if (selected.classList !== undefined) {
    const quemTroca = document.getElementsByClassName('selected')[0];
    if (quemTroca.nextElementSibling !== null) {
      const aux = quemTroca.nextElementSibling.innerText;
      quemTroca.nextElementSibling.innerText = quemTroca.innerText;
      quemTroca.innerText = aux;
      quemTroca.classList.remove('selected');
      quemTroca.nextElementSibling.classList.add('selected');
      selected = document.getElementsByClassName('selected')[0];
    }
  }
}

function trocaCima() {
  if (selected.classList !== undefined) {
    const quemTroca = document.getElementsByClassName('selected')[0];
    if (quemTroca.previousElementSibling !== null) {
      const aux = quemTroca.previousElementSibling.innerText;
      quemTroca.previousElementSibling.innerText = quemTroca.innerText;
      quemTroca.innerText = aux;
      quemTroca.classList.remove('selected');
      quemTroca.previousElementSibling.classList.add('selected');
      selected = document.getElementsByClassName('selected')[0];
    }
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
taskText.addEventListener('keyup', adicionarTarefaEnter);
addTask.addEventListener('click', adicionarTarefa);
ol.addEventListener('click', trocaSelecao);
ol.addEventListener('dblclick', riscaTarefa);
limpaTudo.addEventListener('click', apagaTodos);
limpaFin.addEventListener('click', apagaFIn);
salvaLista.addEventListener('click', saveList);
limpaSel.addEventListener('click', apagaSel);
moveBaixo.addEventListener('click', trocaBaixo);
moveCima.addEventListener('click', trocaCima);
recuperaLocal();
refazLinha();
