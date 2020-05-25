const btnCreateTarefa = document.querySelector('#criar-tarefa');
btnCreateTarefa.addEventListener('click', function () {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  if (textoTarefa === '') {
    return;
  }
  document.querySelector('#lista-tarefas').innerHTML += '<li class="item-lista">' + textoTarefa + '</li>';
  document.getElementById('texto-tarefa').value = '';
});
