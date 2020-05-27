const button = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const tarefas = document.getElementById('texto-tarefa');
const eraseAll = document.getElementById('apaga-tudo');

button.addEventListener('click', function addTarefa() {
  const intensParaALista = tarefas.value;
  const itensNovos = document.createElement('li');
  itensNovos.innerHTML = intensParaALista;
  listaTarefas.appendChild(itensNovos);
  tarefas.value = '';
  itensNovos.addEventListener('click', function changeBackgroundColor() {
    itensNovos.className = 'li';
  });
  itensNovos.addEventListener('dblclick', function resetBackground() {
    itensNovos.classList.remove('li');
  });
});
eraseAll.addEventListener('click', function apagarTudo() {
  listaTarefas.innerHTML = '';
});
