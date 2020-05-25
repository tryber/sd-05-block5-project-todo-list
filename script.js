//Variáveis
let ol = document.getElementById("lista-tarefas"));
let criarTarefa = document.getElementById("criar-tarefa");
let textoTarefa = document.getElementById("texto-tarefa");
let apagaTudo = document.getElementById("apaga-tudo")
let removerFinalizados = document.getElementById('remover-finalizados');
let target = "";

function acrescentarTarefa (){
  let li = document.createElement("li");
  let inputValue = textoTarefa.value;
  let tarefa = document.createTextNode(inputValue);
  li.appendChild(tarefa);
  if (inputValue == "") {
    alert("Você precisa escrever uma tarefa!");
  } else {
    document.getElementById("lista-tarefas").appendChild(li);
  }
  inputValue = "";
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
  ol.innerText = "";
}

//Event Listners
criarTarefa.addEventListener("click", acrescentarTarefa);
apagaTudo.addEventListener('click', apagaTodos);
ol.addEventListener('dblclick', riscaTarefa);

