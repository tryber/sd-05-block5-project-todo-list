// variaveis
const ol = document.getElementById('lista-tarefas');
const addTask = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');

// funcoes
function adicionarTarefa() {
  const li = document.createElement('li');
  ol.appendChild(li);
  li.innerText = taskText.value;
  taskText.value = '';
}

// eventListeners
addTask.addEventListener('click', adicionarTarefa);
