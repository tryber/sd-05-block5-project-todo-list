const ordenedList = document.getElementById('lista-tarefas');
const buttonTask = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo')
const removeCompleted = document.getElementById('remover-finalizados');
const removeSelected = document.getElementById('remover-selecionado');
const textTask = document.getElementById('texto-tarefa');
const saveList = document.getElementById('salvar-tarefas');


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
  listItem.addEventListener('click', function(){
    listItem.style.backgroundColor = "rgb(128, 128, 128)";
  });
}

function crossTheLine() {
  let target = event.target;
  if (target.classList.contains ('completed')){
    target.classList.remove('completed');
  } else{
    target.classList.add('completed');
  }
}

function clearDoneTask() {
  let complete = document.getElementsByClassName('completed');
  for(let index = complete.length - 1; index >=0; index -= 1) {
    complete[index].remove();
  }
}

function clearSelectedTask() {
  let selected = document.getElementsByTagName('li');
  for(let index = 0; index < selected.length; index += 1){
    if(selected[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      selected[index].remove();
    }
  }

}

function saveTheList() {
  localStorage.clear();
  localStorage.setItem('saved tasks', ordenedList.innerHTML);
}

function getSavedList() {
  let savedList = localStorage.getItem('saved tasks');
  ordenedList.innerHTML = savedList;
}

window.addEventListener('load', getSavedList());
saveList.addEventListener('click', saveTheList);
removeCompleted.addEventListener('click', clearDoneTask);
removeSelected.addEventListener('click', clearSelectedTask);
ordenedList.addEventListener('dblclick', crossTheLine);
buttonClear.addEventListener('click', clearAllTask);
buttonTask.addEventListener('click', addTask);

