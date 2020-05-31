const input = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

criar.addEventListener('click', function () {
    const item = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = input.value;
    item.appendChild(span);
    lista.appendChild(item);
    input.value = '';
});
