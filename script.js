const botaoCriarTarefa = document.getElementById('criar-tarefa');
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const elementoLista = document.createElement('li');
  let tarefa = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(elementoLista);
  listaTarefas.lastChild.innerHTML = tarefa;
}
botaoCriarTarefa.addEventListener('click', criarTarefa);