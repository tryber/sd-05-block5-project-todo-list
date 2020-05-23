// variaveis
const ol = document.getElementById('lista-tarefas');
const addTask = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
let target;
// funcoes
function adicionarTarefa() {
  const li = document.createElement('li');
  ol.appendChild(li);
  li.innerText = taskText.value;
  li.className = 'task';
  taskText.value = '';
}

function trocaBg() {
  target = event.target;
  console.log(event.target);
  if (target.classList.length === 1) {
    target.classList.add('grayBg');
  } else {
    target.classList.remove('grayBg');
  }
}
// eventListeners
addTask.addEventListener('click', adicionarTarefa);
ol.addEventListener('click', trocaBg);
