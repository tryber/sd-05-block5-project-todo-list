const orderedList = document.getElementById('lista-tarefas');
const buttonCreateTask = document.getElementById('criar-tarefa');
const taskBox = document.getElementById('texto-tarefa');
const cleanList = document.getElementById('apaga-tudo');
const removeCompleted = document.getElementById('remover-finalizados');

function createTask() {
  const newTask = document.createElement('li');
  newTask.classList.add('li');
  newTask.classList.add('tarefa');
  newTask.innerText = taskBox.value;
  return newTask;
}

function removeSelectedClass() {
  const item = document.getElementsByClassName('selected');
  if (item.length > 0) {
    item[0].classList.remove('selected');
  }
}

function clearInput() {
  taskBox.value = '';
}

buttonCreateTask.onclick = function () {
  orderedList.appendChild(createTask(orderedList));
  clearInput();
  taskBox.focus();
};

taskBox.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    buttonCreateTask.click();
  }
});

document.addEventListener('click', function (event) {
  removeSelectedClass();
  if (event.target.classList.contains('tarefa')) {
    event.target.classList.add('selected');
  }
});

document.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('tarefa')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

cleanList.onclick = function () {
  while (orderedList.firstChild) {
    orderedList.removeChild(orderedList.firstChild);
  }
};

removeCompleted.onclick = function () {
  const items = document.getElementsByClassName('completed');
  if (items.length > 0) {
    while (document.querySelector('.completed')) {
      document.querySelector('.completed').remove();
    }
  } else {
    alert('É necessário ter tarefas completadas para limpar!');
  }
}
