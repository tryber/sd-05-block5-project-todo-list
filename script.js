const btnCreateTarefa = document.querySelector('#criar-tarefa');
btnCreateTarefa.addEventListener('click', function () {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  if (textoTarefa === '') {
    return;
  }
  const li = document.createElement('li');
  li.className = 'item-lista'
  li.innerText = textoTarefa;
  document.querySelector('ol').appendChild(li);
  // document.querySelector('#lista-tarefas').innerHTML += '<li class="item-lista">' + textoTarefa + '</li>';
  // document.getElementById('texto-tarefa').value = '';
});
