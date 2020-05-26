// Criar lista ordenada
function createListItem() {
  let li = document.createElement('li');
  let textoTarefa = document.getElementById('texto-tarefa');
  if (textoTarefa.value === '') {
    alert('Você deve escrever algo!');
  } else {
    document.getElementById('lista-tarefas').appendChild(li);
    li.innerHTML = textoTarefa.value;
  }
}
