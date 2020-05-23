const button = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const tarefas = document.getElementById('texto-tarefa');

button.addEventListener('click', function addTarefa() {
  const intensParaALista = tarefas.value;
  const itensNovos = document.createElement('li');
  itensNovos.innerHTML = intensParaALista;
  listaTarefas.appendChild(itensNovos);
  itensNovos.addEventListener('click', function changeBackgroundColor() {
      itensNovos.className = 'li';
    });
    itensNovos.addEventListener('dblclick', function resetBackground() {
        itensNovos.classList.remove('li');
    });
});
