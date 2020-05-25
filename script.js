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

let listaTarefas = document.querySelectorAll('li');

const clickItem = document.querySelector('ol');
clickItem.addEventListener('click', function (event) {
  let itemEscolhido = event.target;
  for (let i = 0; i < listaTarefas.length; i += 1) {
    listaTarefas[i].classList.remove('selected');
  }
  itemEscolhido.classList.add('selected');
});
