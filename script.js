const ordenedList = document.getElementById('lista-tarefas');
const buttonTask = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo')
const removeCompleted = document.getElementById('remover-finalizados');
const removeSelected = document.getElementById('remover-selecionado');
const textTask = document.getElementById('texto-tarefa');
const saveList = document.getElementById('salvar-tarefas');
const toUpButton = document.getElementById('mover-cima');
const toDownButton = document.getElementById('mover-baixo');
let selected = '';
let target = '';


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


function crossTheLine() {
  target = event.target;
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
  let selectedItem = document.getElementsByTagName('li');
  for(let index = 0; index < selectedItem.length; index += 1){
    if(selectedItem[index].className === 'selected') {
      selectedItem[index].remove();
    }
  }
  
}

function toDown(){
  if(selected.classList !== undefined) {
    let whoChange = document.getElementsByClassName('selected')[0];
    if(whoChange.nextElementSibling !== null) {
      let aux = whoChange.nextElementSibling.innerText;
      whoChange.nextElementSibling.innerText = whoChange.innerText;
      whoChange.innerText = aux;
      whoChange.classList.remove('selected');
      whoChange.nextElementSibling.classList.add('selected');
      selected = document.getElementsByClassName('selected')[0];
    }
  }
}

function toUp(){
  if(selected.classList !== undefined) {
    let whoChange = document.getElementsByClassName('selected')[0];
    if(whoChange.previousElementSibling !== null) {
      let aux = whoChange.previousElementSibling.innerText;
      whoChange.previousElementSibling.innerText = whoChange.innerText;
      whoChange.innerText = aux;
      whoChange.classList.remove('selected');
      whoChange.previousElementSibling.classList.add('selected');
      selected = document.getElementsByClassName('selected')[0];
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

function changeSelected (){
  target = event.target;
  if(selected.classList !== undefined) {
    selected.classList.remove('selected');
  }
  target.classList.add('selected');
  selected = document.getElementsByClassName('selected')[0];
}

window.addEventListener('load', getSavedList());
toDownButton.addEventListener('click', toDown);
toUpButton.addEventListener('click', toUp);
saveList.addEventListener('click', saveTheList);
removeCompleted.addEventListener('click', clearDoneTask);
removeSelected.addEventListener('click', clearSelectedTask);
ordenedList.addEventListener('click', changeSelected);
ordenedList.addEventListener('dblclick', crossTheLine);
buttonClear.addEventListener('click', clearAllTask);
buttonTask.addEventListener('click', addTask);

