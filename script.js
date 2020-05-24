let ordenedList = document.getElementById('lista-tarefas');
let buttonTask = document.getElementById('criar-tarefa');
let textTask = document.getElementById('texto-tarefa');

function addTask() {
  let listItem = document.createElement('li');
  listItem.innerHTML = textTask.value;
  ordenedList.appendChild(listItem);
  textTask.value = '';
}

buttonTask.addEventListener('click', addTask);

