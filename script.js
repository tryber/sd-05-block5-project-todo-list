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

const btnApagaTudo = document.querySelector('#apaga-tudo');
btnApagaTudo.addEventListener('click', function () {
  const listaTarefas = document.querySelectorAll('li').lenght;
  for (let i = 0; i < listaTarefas; i += 1) {
    document.querySelector('ol').removeChild(li);
  }
});

const btnFinalizados = document.querySelector('#remover-finalizados');
btnFinalizados.addEventListener('click', function () {
  const listaSelecionados = document.querySelectorAll('li');
  for (let i = 0; i < listaSelecionados.length; i += 1) {
    if (listaSelecionados[i].classList.contains('completed')) {
      document.querySelector('#lista-tarefas').removeChild(listaSelecionados[i]);
    }
  }
});
