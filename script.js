// add a event listener to the button to create a list item
const btn = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

btn.addEventListener('click', function() {
  let listItemToBeCreated = document.createElement('li');
  listItemToBeCreated.className = 'lista-item';
  listItemToBeCreated.innerHTML = task.value;
  taskList.appendChild(listItemToBeCreated);
  task.value = '';
});

// add event listener to change list item color when it's clicked 
let clickCount = 0;
taskList.addEventListener('click', function (event) {
  clickCount += 1;
  let singleClickTimer = setTimeout(function() {
    if (clickCount === 1) {
      clickCount = 0;
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    } else if (clickCount === 2) {
    clickCount = 0;
      if (event.target.style.textDecoration === 'line-through') {
        event.target.style.textDecoration = '';
      } 
      else {
        event.target.style.textDecoration = 'line-through';
      }
    }
  }, 300);
});

// add a button the clear all list itens
const clearTasks = document.getElementById('apaga-tudo');
clearTasks.addEventListener('click', function () {
  taskList.innerHTML = '';
})

// add a button the clear strikethrough items
const clearDoneTasks = document.getElementById('remover-finalizados');
clearDoneTasks.addEventListener('click', function () {
  // create array with list items
  const taskItems = document.querySelectorAll('.lista-item');
  for (let i in taskItems) {
    if (taskItems[i].style.textDecoration === 'line-through') {
      taskItems[i].remove();
    }
  }
});
