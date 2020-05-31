const input = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

criar.addEventListener('click', function () {
    const item = document.createElement('li');
    item.innerHTML = input.value;
    lista.appendChild(item);
    input.value = '';
});

lista.addEventListener('click', function () {
    const evento = event.target;
    evento.classList.add('corClique');
});

lista.addEventListener('dblclick', function() {
    const evento = event.target;
    let classes = evento.classList.value;
    if (classes.search('completed') >= 0) {
        evento.classList.remove('completed');
    } else {
        evento.classList.add('completed');
    }
});

const remover = document.getElementById('remover-finalizados');
remover.addEventListener('click', function () {
    let paraApagar = document.getElementsByClassName('completed');
    for (let i = paraApagar.length; i > 0; i -= 1) {
        lista.removeChild(paraApagar[0]);
    }
});
