const botaoCriarTarefa = document.getElementById('criar-tarefa');
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const elementoLista = document.createElement('li');
  let tarefa = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  listaTarefas.appendChild(elementoLista);
  listaTarefas.lastChild.innerHTML = tarefa;
}
function verificaInput() {
  if (document.getElementById('texto-tarefa').value === '') {
    alert('Insira alguma tarefa para adicionar à sua Lista!!!');
  } else {
    criarTarefa();
  }
}
botaoCriarTarefa.addEventListener('click', verificaInput);

const itemLista = document.getElementById('lista-tarefas');
function selecionaItem(e) {
  let itemSelecionado = e.target;
  itemSelecionado.classList.toggle('selected');
}
itemLista.addEventListener('click', selecionaItem);

function riscaItem(e) {
  let itemSelecionado = e.target;
  itemSelecionado.classList.toggle('completed');
}
itemLista.addEventListener('dblclick', riscaItem);