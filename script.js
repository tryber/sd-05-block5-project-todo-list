let ordenedList = document.getElementById('lista-tarefas');
let buttonTask = document.getElementById('criar-tarefa');
let textTask = document.getElementById('texto-tarefa');

function addTask() {
  let listItem = document.createElement('li');
  listItem.innerHTML = textTask.value;
  if(textTask.value == '' ) {
    alert('Escreva algo para adicionar');
  } else{
    ordenedList.appendChild(listItem);
    textTask.value = '';
  }
}


function mouseChangeButton(){
  let buttons =  document.getElementsByClassName('button')[0];
  buttons.style.cursor = 'pointer';
}

buttonTask.addEventListener('click', addTask);
window.addEventListener('load', mouseChangeButton);
