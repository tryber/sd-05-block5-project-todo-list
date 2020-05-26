const createTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const textInput = document.getElementById('texto-tarefa');

// criar um função que irá adicionar uma nova tarefa ao receber o click no botão.
// O texto do item da lista criado, deve ser o texto inserido no text-input.//

function addTask() {
  let li = document.createElement('li');
  li.innerHTML = textInput.value;
  taskList.appendChild(li);
  textInput.value = "";
}

createTaskButton.addEventListener('click', addTask);