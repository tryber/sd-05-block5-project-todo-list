const posBotaoAdicionar = document.getElementById('criar-tarefa');
posBotaoAdicionar.addEventListener("click", adicionaItem);
let conteudoAdicionar = '';
const posTextoTarefa = document.getElementById('texto-tarefa');

let posListaTarefas = document.getElementById('lista-tarefas');


document.addEventListener('mouseover', function (event) {
  if (event.target.nodeName == 'BUTTON' || event.target.nodeName == 'LI') {
    event.target.style.cursor = 'pointer';
  }
}, false);

function adicionaItem () {
  const criaLi = document.createElement('li');
  posListaTarefas.appendChild(criaLi);
  conteudoAdicionar = posTextoTarefa.value;
  posListaTarefas.lastElementChild.innerHTML = conteudoAdicionar;
  posTextoTarefa.value = '';
}
