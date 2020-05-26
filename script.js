//Variáveis
let listaTarefas = document.getElementById("lista-tarefas");
let criarTarefa = document.getElementById("criar-tarefa");
let textoTarefa = document.getElementById("texto-tarefa");
let apagaTudo = document.getElementById("apaga-tudo")
let botaoSalvarTarefas = document.getElementById("salvar-tarefas");
let botaoRemoverFinalizados = document.getElementById("remover-finalizados");
let botaoRemoverSelecionado = document.getElementById("remover-selecionado");
let target = "";
let itemSelecionado = "";

//Funções

function acrescentarTarefa() {
  let li = document.createElement("li");
  listaTarefas.appendChild(li);
  li.innerText = textoTarefa.value;
  textoTarefa.value = "";
}

function riscaTarefa() {
  target = event.target;
  if (target.classList.contains("completed")) {
    target.classList.remove("completed");
  } else {
    target.classList.add("completed");
  }
}

function apagaTodos() {
  listaTarefas.innerText = "";
}

function saveList() {
  localStorage.setItem("save-list", listaTarefas.innerHTML);
}

function getList() {
  listaTarefas.innerHTML = localStorage.getItem("save-list");
}

function seleciona() {
  if (itemSelecionado.classList !== undefined) {
    itemSelecionado.classList.remove("selected");
  }
  event.target.classList.add("selected");
  itemSelecionado = event.target;
}

function removeDone() {
  let completedTasks = document.getElementsByClassName("completed");
  for (let j = completedTasks.length - 1; j >= 0; j -= 1) {
    completedTasks[j].remove();
  }
}

function removeSelected() {
  let itemSelecionado = document.getElementsByClassName("selected")[0].remove();
}

  //Event Listners
criarTarefa.addEventListener("click", acrescentarTarefa);
apagaTudo.addEventListener("click", apagaTodos);
listaTarefas.addEventListener("click", seleciona)
listaTarefas.addEventListener("dblclick", riscaTarefa);
botaoRemoverFinalizados.addEventListener("click", removeDone);
botaoRemoverSelecionado.addEventListener("click", removeSelected);
botaoSalvarTarefas.addEventListener("click", saveList)
getList();
