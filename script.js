const btnCreateTarefa = document.querySelector('#criar-tarefa');
btnCreateTarefa.addEventListener('click', function () {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  if (textoTarefa === '') {
    return;
  }
  const li = document.createElement('li');
  li.className = 'item-lista';
  li.innerText = textoTarefa;
  document.querySelector('ol').appendChild(li);
  document.getElementById('texto-tarefa').value = '';
});

const clickItem = document.querySelector('ol');
clickItem.addEventListener('click', function (event) {
  const itemEscolhido = event.target;
  itemEscolhido.classList.toggle('selected');
});

clickItem.addEventListener('dblclick', function () {
  const itemEscolhido = event.target;
  itemEscolhido.classList.toggle('completed');
});
