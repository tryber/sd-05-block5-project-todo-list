// criando função que incluirá uma tarefa à lista:
function criaTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(novaTarefa);
  // criando funcionalidade que limpa input após o click:
  document.getElementById('texto-tarefa').value = '';
  // fazendo com que cada novo item da lista receba a maozinha com o passar do mouse:
  novaTarefa.style.cursor = 'pointer';
  // mudando a cor do item da lista ao ser clicado:
  novaTarefa.addEventListener('click', function () {
    novaTarefa.style.backgroundColor = 'rgb(128,128,128)';
  });
  // riscar o item com clique duplo:
  novaTarefa.addEventListener('dblclick', function () {
    novaTarefa.className = 'completed';
    novaTarefa.style.textDecoration = 'line-through';
    // removendo classe completed e risco no item:
    novaTarefa.addEventListener('dblclick', function () {
      if (novaTarefa.className === 'completed') {
        novaTarefa.classList.remove('completed');
        novaTarefa.style.textDecoration = 'none';
      }
    });
  });
}
// adicionando o evento de adição de tarefa ao botão:
const botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener('click', criaTarefa);
// removendo todos os elementos li:
const botaoApagaTudo = document.getElementById('apaga-tudo');
function apagaTudo () {
  const lista = document.getElementById('lista-tarefas');
  while (lista.firstChild) {
    lista.firstChild.remove();
  }
};
// adicionando o evento de apagar tudo ao botão:
botaoApagaTudo.addEventListener('click', apagaTudo);
