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
      element.target.classList.add('selected');
    }
  });
}
function moveUp() {
  const itens = taskList.children;
  for (let i = 1; i < itens.length; i += 1) {
    if (itens[i].className.includes('selected')) {
      const currentItem = itens[i-1].innerHTML;
      taskList.children[i-1].innerHTML = taskList.children[i].innerHTML;
      taskList.children[i].classList.remove('selected');
      taskList.children[i].innerHTML = currentItem;
      taskList.children[i-1].classList.add('selected');
    }
  }
}
function moveDown() {
  const itens = taskList.children;
  for (let i = itens.length-2; i >= 0; i -= 1) {
    if (itens[i].className.includes('selected')) {
      const currentItem = itens[i+1].innerHTML;
      taskList.children[i+1].innerHTML = taskList.children[i].innerHTML;
      taskList.children[i].classList.remove('selected');
      taskList.children[i].innerHTML = currentItem;
      taskList.children[i+1].classList.add('selected');
    }
  }
}
function saveList() {
  const itens = taskList.children;
  let list = [];
  for (let i = 0; i < itens.length; i += 1) list[i] = [itens[i].innerHTML, itens[i].className];
  if (typeof(Storage) !== "undefined") localStorage.setItem("list", JSON.stringify(list));
  else console.error('Este browser não tem suporte a Storage');
}
function loadList() {
  if (typeof(Storage) !== "undefined") {
    const itens = JSON.parse(localStorage.getItem("list"));
    if(!itens){
      window.alert('Não há nenhuma lista salva');
      return;
    }
    taskList.innerHTML = '';
    itens.forEach((item) => {
      const li = document.createElement('li');
      const element = taskList.appendChild(li);
      element.innerHTML = item[0];
      element.className = item[1];
    });
  }
  else console.error('Este browser não tem suporte a Storage');
}
window.onload = function () {
  // Define input list
  taskInput = this.document.querySelector('#texto-tarefa');
  // Define task list
  taskList = this.document.querySelector('#lista-tarefas');
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
