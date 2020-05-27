let taskList;
let taskInput;
function updateList(text) {
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
      for (let i = 0; i < taskList.children.length; i += 1) taskList.children[i].classList.remove('selected');
      element.target.classList.add('selected');
    }
  });
}
function moveUp() {
  let selected = document.querySelector('.selected');
  if(!selected) return;
  let previous = selected.previousElementSibling;
  if(!previous) return;
  const text = previous.innerText;
  previous.innerText = selected.innerText;
  previous.classList.add('selected');
  if(selected.className.includes('completed') && !previous.className.includes('completed')){
    previous.classList.add('completed');
    selected.classList.remove('completed')
  }
  selected.innerText = text;
  selected.classList.remove('selected');
}
function moveDown() {
  let selected = document.querySelector('.selected');
  if(!selected) return;
  let next = selected.nextElementSibling;
  if(!next) return;
  const text = next.innerText;
  next.innerText = selected.innerText;
  next.classList.add('selected');
  if(selected.className.includes('completed') && !next.className.includes('completed')){
    next.classList.add('completed');
    selected.classList.remove('completed')
  }
  selected.innerText = text;
  selected.classList.remove('selected');
}
function saveList() {
  const itens = taskList.children;
  const list = [];
  for (let i = 0; i < itens.length; i += 1) list[i] = [itens[i].innerHTML, itens[i].className];
  if (typeof (Storage) !== 'undefined') localStorage.setItem('list', JSON.stringify(list));
  else window.alert('Este browser não tem suporte a Storage');
}
function loadList() {
  if (typeof (Storage) !== 'undefined') {
    const itens = JSON.parse(localStorage.getItem('list'));
    if (!itens) return;
    taskList.innerHTML = '';
    itens.forEach((item, i) => {
      updateList(item[0]);
      taskList.children[i].className = item[1];
    });
  } else window.alert('Este browser não tem suporte a Storage');
}
window.onload = function () {
  // Define input list
  taskInput = this.document.querySelector('#texto-tarefa');
  // Define task list
  taskList = this.document.querySelector('#lista-tarefas');
  // Load Data
  this.loadList();
  // Functions
  this.document.querySelector('#criar-tarefa').addEventListener('click', function () {
    const text = taskInput.value;
    if (text === '') return;
    taskInput.value = '';
    updateList(text);
  });
  this.document.querySelector('#apaga-tudo').addEventListener('click', function () {
    taskInput.value = '';
    taskList.innerHTML = '';
  });
  this.document.querySelector('#remover-finalizados').addEventListener('click', function () {
    const comp = document.getElementsByClassName('completed');
    for (let i = comp.length - 1; i >= 0; i -= 1) comp[i].remove();
  });
  this.document.querySelector('#remover-selecionado').addEventListener('click', function () {
    const comp = document.getElementsByClassName('selected');
    for (let i = comp.length - 1; i >= 0; i -= 1) comp[i].remove();
  });
  this.document.querySelector('#mover-cima').addEventListener('click', moveUp);
  this.document.querySelector('#mover-baixo').addEventListener('click', moveDown);
  this.document.querySelector('#salvar-tarefas').addEventListener('click', saveList);
  this.document.querySelector('#carregar-tarefas').addEventListener('click', loadList);
};
