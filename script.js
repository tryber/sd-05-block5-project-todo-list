const orderedList = document.getElementById('lista-tarefas');
const buttonCreateTask = document.getElementById('criar-tarefa');
const taskBox = document.getElementById('texto-tarefa');
const cleanList = document.getElementById('apaga-tudo');
const removeCompleted = document.getElementById('remover-finalizados');
const removeSelected = document.getElementById('remover-selecionado');
const moveCima = document.getElementById('mover-cima');
const moveBaixo = document.getElementById('mover-baixo');
const salvaLista = document.getElementById('salvar-tarefas');
const itensSalvos =  localStorage;

function saveItems() {
  localStorage.setItem('itens', orderedList.innerHTML);
}


function moveUp() {
  const selected = document.querySelector('.selected');
  const lista = document.getElementById('lista-tarefas');
  if (selected === undefined) {
    alert('Não há item selecionado, ou a lista está vazia, bb!');
  } else if (selected.previousElementSibling) {
    lista.insertBefore(selected, selected.previousElementSibling);
  } else {
    alert('Já é o topo da lista, bb!');
  }
}

function moveDown() {
  const selected = document.querySelector('.selected');
  const lista = document.getElementById('lista-tarefas');
  if (selected == undefined) {
    alert('Não há item selecionado, ou a lista está vazia, bb!');
  } else if (selected.nextElementSibling) {
    lista.insertBefore(selected, selected.nextElementSibling.nextElementSibling);
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
  removeSelectedClass();
  clicked.classList.add('selected');
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
  if (items.length <= 0) {
    alert('É necessário ter tarefas completadas para limpar!');
  } else {
    while (document.querySelector('.completed')) {
      document.querySelector('.completed').remove();
    }
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

salvaLista.onclick = function () {
  saveItems();
}

moveCima.onclick = moveUp;
moveBaixo.onclick = moveDown;
window.onload = function () {
  let items = itensSalvos.getItem('itens');
  if (items.length) {
    orderedList.innerHTML = items;
  } 
}
