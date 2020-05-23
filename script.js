const button = document.getElementById('criar-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

button.addEventListener ('click', addTarefa);

function addTarefa () {
  let elementosDaLista = input.value;
  let itensNovos = document.createElement('li');
  itensNovos.innerHTML = elementosDaLista;
  listaOrdenana.appendChild(itensNovos);
}
