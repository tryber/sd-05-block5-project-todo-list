// Criar lista ordenada
const textoTarefa = document.getElementById('texto-tarefa');

function createListItem() {
  let li = document.createElement('li');
  li.className = "item-lista";
  if (textoTarefa.value === '') {
    alert('Você deve escrever algo!');
  } else {
    document.getElementById('lista-tarefas').appendChild(li);
    li.innerHTML = textoTarefa.value;
  }
}
