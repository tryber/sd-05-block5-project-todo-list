// criando função que incluirá uma tarefa à lista:
function criaTarefa () {
  let novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(novaTarefa);
  // criando funcionalidade que limpa input após o click:
  document.getElementById('texto-tarefa').value = '';
}

// adicionando o evento de adição de tarefa ao botão:
let botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener('click', criaTarefa);
