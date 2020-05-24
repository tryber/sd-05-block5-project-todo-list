let ordenedList = document.getElementById('lista-tarefas');
let buttonTask = document.getElementById('criar-tarefa');
let buttonClear = document.getElementById('apaga-tudo')
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



function clearAllTask() {
  let allItems = document.querySelector('#lista-tarefas');
  let listLength = allItems.children.length;
  
  for( let i = 0; i < listLength; i += 1) {
    allItems.removeChild(allItems.children[0]);
  }
}

buttonClear.addEventListener('click', clearAllTask);
buttonTask.addEventListener('click', addTask);
