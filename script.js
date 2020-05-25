//Variáveis
let ol = document.getElementById("lista-tarefas");
let criarTarefa = document.getElementById("criar-tarefa");
let textoTarefa = document.getElementById("texto-tarefa");
let apagaTudo = document.getElementById("apaga-tudo")
let removerFinalizados = document.getElementById('remover-finalizados');
let target = "";

//Funções

function acrescentarTarefa () {
  let li = document.createElement("li");
  ol.appendChild(li);
  li.innerText = textoTarefa.value;
  textoTarefa.value = "";
}


function riscaTarefa() {
  target = event.target;
  if (target.classList.contains('done')) {
    target.classList.remove('done');
  } else {
    target.classList.add('done');
  }
}

function apagaTodos() {
  ol.innerText = "";
}

//Event Listners
criarTarefa.addEventListener("click", acrescentarTarefa);
apagaTudo.addEventListener('click', apagaTodos);
ol.addEventListener('dblclick', riscaTarefa);

