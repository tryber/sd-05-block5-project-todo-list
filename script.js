const input = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

criar.addEventListener('click', function () {
    const item = document.createElement('li');
    const span = document.createElement('span');
    for (let i = -1; i < lista.childElementCount; i++) {
        span.id = i + 1;
    }
    span.innerHTML = input.value;
    item.appendChild(span);
    lista.appendChild(item);
    input.value = '';
});

lista.addEventListener('dblclick', function () {
    const evento = event.target;
    let id = evento.id;
    id = Math.ceil(id);
    console.log(typeof id === 'number');
    if (typeof id === 'number') {
        evento.classList.add('corClique');
    }
});
