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
    let text = taskInput.value;
    if(text === "") return;
    let li = document.createElement("li");
    let newItem = taskList.appendChild(li);
    newItem.innerHTML = text;
  });
};
