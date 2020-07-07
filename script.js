// criando função que incluirá uma tarefa à lista:
function criaTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(novaTarefa);
  // criando funcionalidade que limpa input após o click:
  document.getElementById('texto-tarefa').value = '';
  // fazendo com que cada novo item da lista receba a maozinha com o passar do mouse:
  novaTarefa.style.cursor = 'pointer';
}
// adicionando o evento de adição de tarefa ao botão:
const botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener('click', criaTarefa);
