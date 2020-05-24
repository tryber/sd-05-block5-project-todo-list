let addButton;
let clearButton;
let checkoutButton;
let taskList;
let taskInput;
function initializeAll () {
  // Define add button
  addButton = this.document.querySelector('#criar-tarefa');
  // Define clear button
  clearButton = this.document.querySelector('#apaga-tudo');
  // Define checkout button
  checkoutButton = this.document.querySelector('#remover-finalizados');
  // Define input list
  taskInput = this.document.querySelector('#texto-tarefa');
  // Define task list
  taskList = this.document.querySelector('#lista-tarefas');
}
function updateList (text) {
  const li = document.createElement('li');
  const newItem = taskList.appendChild(li);
  newItem.innerHTML = text;
  newItem.classList.add('nohighlight');

  newItem.addEventListener('dblclick', function (element) {
    if (element.target.className.includes('completed')) {
      element.target.classList.remove('completed');
    } else {
      element.target.classList.add('completed');
    }
  });
  newItem.addEventListener('click', function (element) {
    if (element.target.className.includes('selected')) {
      element.target.classList.remove('selected');
    } else {
      element.target.classList.add('selected');
    }
  });
}
window.onload = function () {
  this.initializeAll();
  // Functions
  addButton.addEventListener('click', function () {
    const text = taskInput.value;
    if (text === '') return;
    taskInput.value = '';
    updateList(text);
  });
  clearButton.addEventListener('click', function () {
    taskInput.value = '';
    taskList.innerHTML = '';
  });
  checkoutButton.addEventListener('click', function () {
    for (let i = 0; i < taskList.children.length; i += 1) {
      if (taskList.children[i].className.includes('completed')) {
        taskList.children[i].remove();
      }
    }
  });
};
