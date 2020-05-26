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

const botaoApagaTudo = document.getElementById('apaga-tudo');
function apagaTudo() {
  document.getElementById('lista-tarefas').innerHTML = '';
}
botaoApagaTudo.addEventListener('click', apagaTudo);

const botaoRemoveFinalizados = document.getElementById('remover-finalizados');
function removerFinalizados() {
  const listaTarefas = document.getElementById('lista-tarefas').children;
  for (let i = 0; i < listaTarefas.length; i += 1) {
    if (listaTarefas[i].classList.contains('completed')) {
      listaTarefas[i].remove();
    }
  }
}
botaoRemoveFinalizados.addEventListener('click', removerFinalizados);