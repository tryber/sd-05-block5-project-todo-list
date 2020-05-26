const botaoCriarTarefa = document.getElementById('criar-tarefa');
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const elementoLista = document.createElement('li');
  listaTarefas.appendChild(elementoLista);
}
botaoCriarTarefa.addEventListener('click', criarTarefa);