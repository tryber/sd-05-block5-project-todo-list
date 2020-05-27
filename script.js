// variáveis 
const textoInput = document.getElementById('texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');
const criaTarefa = document.getElementById('criar-tarefa');

function adicionaItem () {
  const criaItem = document.createElement('li');
    criaItem.innerHTML = textoInput.value;
  if (textoInput.value === '') {
    alert('Digite um item para adicionar à lista')
  } else {
    listaOrdenada.appendChild(criaItem);
    textoInput.value = '';
  }
}
criaTarefa.addEventListener('click', adicionaItem);

