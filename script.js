//Variáveis
const ol = document.getElementById("lista-tarefas"));
let criarTarefa = document.getElementById("criar-tarefa");
let textoTarefa = document.getElementById("texto-tarefa");
let apagaTudo = document.getElementById("apaga-tudo")
let removerFinalizados = document.getElementById('remover-finalizados');

//Funções
function acrescentarTarefa() {
  const li = document.createElement("li");
  ol.appendChild(li);
  li.innerText = textoTarefa.value; 
  textoTarefa.value = "";
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

