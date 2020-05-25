let ordenedList = document.getElementById('lista-tarefas');
let buttonTask = document.getElementById('criar-tarefa');
let buttonClear = document.getElementById('apaga-tudo')
let textTask = document.getElementById('texto-tarefa');
let colorButton = document.getElementById('colorirb')

function addTask() {
  let listItem = document.createElement('li');
  listItem.innerHTML = textTask.value;
  if(textTask.value == '' ) {
    alert('Escreva algo para adicionar');
  } else{
    ordenedList.appendChild(listItem);
    textTask.value = '';
  }
  addEvents(listItem);
}

function clearAllTask() {
  ordenedList.innerHTML = '';
}

function addEvents(listItem) {
  let target = event.target;
  listItem.addEventListener('click', function(){
    listItem.style.backgroundColor = corCinza();
  });
}

function crossTheLine(event) {
  let target = event.target;
  if (target.classList.contains ('completed')){
    target.classList.remove('completed');
  } else{
    target.classList.add('completed');
  }
}

function corCinza() {
  return "rgb(128, 128, 128)";
}

ordenedList.addEventListener('dblclick', crossTheLine);
buttonClear.addEventListener('click', clearAllTask);
buttonTask.addEventListener('click', addTask);
