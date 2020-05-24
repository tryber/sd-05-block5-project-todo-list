// add a event listener to the button to create a list item
const btn = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

btn.addEventListener('click', function() {
  let listItem = document.createElement('li');
  listItem.innerHTML = task.value;
  taskList.appendChild(listItem);
  task.value = '';
})
