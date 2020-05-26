//Definição das variáveis básicas
let addItem = document.getElementById('criar-tarefa');
let olList = document.getElementById('lista-tarefas');
let textList = document.getElementById('texto-tarefa');
let clearAll = document.getElementById('apaga-tudo');
//Variáveis demais funcionalidades
let clearFinish = document.getElementById('remover-finalizados');
let clearSelect = document.getElementById('remover-selecionado');
let saveList = document.getElementById('salvar-tarefas');
let moveDown = document.getElementById('mover-baixo');
let moveUp = document.getElementById('mover-cima');
let lines = document.getElementById('linhas');
let select = "";

//Funções
function adicionaItem () {
  let li = document.createElement("li");
  olList.appendChild(li);
  li.innerText = textList.value;
  textList.value = ""
}

//Função para riscar item já concluído
function itemFinish() {
  target = event.target;
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

//Função para apagar tarefa
function apagaTarefa () {
  let complete = document.getElementsByClassName('completed');
  for (let j = complete.length - 1; j >= 0; j -= 1) {
    complete[j].remove();
  }
}

//Apaga todos os itens da lista
function clear () {
  olList.innerText = "";
}

//Função para salvar a lista de tarefas
function save () {
  localStorage.clear();
  localStorage.setItem('saved tasks', olList.innerHTML);
}

//Função para alterar a cor do item da lista
function changeBackground() {
  let change = document.getElementsByTagName("li");
  for(let i in change) {
    change[i].style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

//Event Listners
addItem.addEventListener("click", adicionaItem);
clearAll.addEventListener('click', clear);
saveList.addEventListener('click', save);
olList.addEventListener('dblclick', itemFinish);
clearFinish.addEventListener('click', apagaTarefa);
olList.addEventListener('click', changeBackground);
load();

//Salvar a lista de tarefas
function load () {
  olList.innerHTML  = localStorage.getItem('saved tasks');
}
