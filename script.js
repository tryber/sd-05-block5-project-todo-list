// add a event listener to the button to create a list item
const btn = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

btn.addEventListener('click', function() {
  let listItemToBeCreated = document.createElement('li');
  listItemToBeCreated.id = 'lista-item';
  listItemToBeCreated.innerHTML = task.value;
  taskList.appendChild(listItemToBeCreated);
  task.value = '';
});

// add event listener to change list item color when it's clicked
taskList.addEventListener('click', function (event) {
  let listItem = document.getElementById('lista-item');
  event.target.style.backgroundColor = 'rgb(128,128,128)';
});

/* add event listener to strikethrough a list item when double-clicked
taskList.addEventListener('click', function (event) {
  let listItem = document.getElementById('lista-item');
  event.target.style.textDecoration = 'line-through';
});
*/

// add a button the clear all list itens
const clearTasks = document.getElementById('apaga-tudo');
clearTasks.addEventListener('click', function () {
  taskList.innerHTML = '';
})