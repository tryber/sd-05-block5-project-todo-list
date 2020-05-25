//Variáveis
const ol = document.getElementById("lista-tarefas"));
const criarTarefa = document.getElementById("criar-tarefa");
const textoTarefa = document.getElementById("texto-tarefa");
const apagaTudo = document.getElementById("apaga-tudo")
const removerFinalizados = document.getElementById('remover-finalizados');
let target = "";

//Funções
function acrescentarTarefa() {
  if (textoTarefa.value.length !== 0) {
    const li = document.createElement("li");
    ol.appendChild(li);
    li.innerText = textoTarefa.value; 
    textoTarefa.value = "";
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

function apagaTodos() {
  ol.innerText = "";
}

//Event Listners
criarTarefa.addEventListener("click", acrescentarTarefa);
apagaTudo.addEventListener('click', apagaTodos);
ol.addEventListener('dblclick', riscaTarefa);

