const orderedList = document.getElementById('lista-tarefas');
const buttonCreateTask = document.getElementById('criar-tarefa');
const taskBox = document.getElementById('texto-tarefa');

function createTask(listContainer) {
  const newTask = document.createElement('li');
  newTask.id = `tarefa-${listContainer.children.length}`;
  newTask.classList.add('li');
  newTask.classList.add('tarefa');
  newTask.innerText = taskBox.value;
  return newTask;
}

function removeSelectedClass() {
  const item = document.getElementsByClassName('selected');
  if ( item.length > 0) {
    item[0].classList.remove('selected');
  }
}

buttonCreateTask.onclick = function () {
  orderedList.appendChild(createTask(orderedList));
};

document.addEventListener("click", function (event) {
  removeSelectedClass();
  if ( event.target.classList.contains( 'tarefa' ) ) {
    event.target.classList.add( 'selected' );
  }
  })
