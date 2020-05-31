// Variáveis
const btn = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas')

const insereTarefaNaLista = (campoTarefas) => {
  const li = document.createElement('li');

  li.innerHTML = campoTarefas;
  ol.appendChild(li);

  document.getElementById('texto-tarefa').value = '';  
};

// adiciona na lista e apagar input adicionado
const criarElementoLista = () => {
  const campoTarefas = document.getElementById('texto-tarefa').value;
  insereTarefaNaLista(campoTarefas);
};

btn.addEventListener('click', criarElementoLista);

// Apagar lista inteira
let buttonDeleteAll = document.getElementById("apaga-tudo");

function deleteAll() {
  ol.innerText = "";
}
buttonDeleteAll.addEventListener("click", deleteAll);