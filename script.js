let orderedList = document.getElementById('lista-tarefas');
const buttonCreateTask = document.getElementById('criar-tarefa');
const taskBox = document.getElementById('texto-tarefa');

function createTask () {
  const newTask = document.createElement('li');
  newTask.innerText = taskBox.value;
  return newTask;
}

buttonCreateTask.onclick = function () {
  orderedList.appendChild(createTask());
};
