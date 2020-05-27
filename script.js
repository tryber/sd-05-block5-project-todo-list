const orderedList = document.getElementById('lista-tarefas');
const buttonCreateTask = document.getElementById('criar-tarefa');
const taskBox = document.getElementById('texto-tarefa');
const cleanList = document.getElementById('apaga-tudo');
const removeCompleted = document.getElementById('remover-finalizados');
const removeSelected = document.getElementById('remover-selecionado');
const moveCima = document.getElementById('mover-cima');
const moveBaixo = document.getElementById('mover-baixo');

function moveUp() {
  let texto;
  const selected = document.querySelector('.selected');
  const lista = document.getElementById('lista-tarefas');
  const index = Array.prototype.indexOf.call(lista.children, selected);
  if (index === -1) {
    alert('Não há item selecionado, ou a lista está vazia, bb!');
  } else if (orderedList.childElementCount === 0) {
    alert('A lista está vazia, bb!');
  } else if (index > 0) {
    const before = lista.children[index - 1];
    texto = before.innerText;
    before.innerText = selected.innerText;
    selected.innerText = texto;
    before.click();
    // lista.insertBefore(selected, before);
  } else {
    alert('Já é o topo da lista, bb!');
  }
}

function moveDown() {
  const selected = document.querySelector('.selected');
  const lista = document.getElementById('lista-tarefas');
  const index = Array.prototype.indexOf.call(lista.children, selected);
  let texto;
  if (index === -1) {
    alert('Não há item selecionado, ou a lista está vazia, bb!');
  } else if (orderedList.childElementCount === 0) {
    alert('A lista está vazia, bb!');
  } else if (index < orderedList.childElementCount - 1) {
    const next = lista.children[index + 1];
    // lista.insertBefore(selected, next.nextSibling);
    texto = next.innerText;
    next.innerText = selected.innerText;
    selected.innerText = texto;
    next.click();
  } else {
    alert('Já é o fim da lista, bb!');
  }
}

function createTask() {
  const newTask = document.createElement('li');
  newTask.classList.add('li');
  newTask.classList.add('tarefa');
  newTask.innerText = taskBox.value;
  return newTask;
}

function removeSelectedClass() {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
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

orderedList.addEventListener('click', function (event) {
  const clicked = event.target;
  if (clicked.classList.contains('selected')) {
    clicked.classList.remove('selected');
  } else {
    removeSelectedClass();
    clicked.classList.add('selected');
  }
});

orderedList.addEventListener('dblclick', function (event) {
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
};

removeSelected.onclick = function () {
  const selected = document.querySelector('.selected');
  if (selected) {
    while (document.querySelector('.selected')) {
      document.querySelector('.selected').remove();
    }
  } else {
    alert('Não há item selecionado!');
  }
};

moveCima.onclick = moveUp;
moveBaixo.onclick = moveDown;
