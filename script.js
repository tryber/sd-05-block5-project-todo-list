let addButton;
let taskList;
let taskInput;
window.onload = function () {
  addButton = this.document.querySelector('#criar-tarefa');
  // Define input list
  taskInput = this.document.querySelector('#texto-tarefa');
  // Define task list
  taskList = this.document.querySelector('#lista-tarefas');
  // Functions
  addButton.addEventListener('click', function () {
    const text = taskInput.value;
    if (text === '') return;
    taskInput.value = '';
    const li = document.createElement('li');
    const newItem = taskList.appendChild(li);
    newItem.innerHTML = text;
  });
};
