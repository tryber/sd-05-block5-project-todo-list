let input = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

criar.addEventListener('click', function () {
    const item = document.createElement('li');
    item.innerHTML = input.value;
    console.log(input);
    lista.appendChild(item);
    input.value = '';
})