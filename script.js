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
      if (event.target.className === 'lista-item') {
        event.target.className = 'lista-item selected';
      }
      else if (event.target.className === 'lista-item completed') {
        event.target.className = 'lista-item completed selected';
      }
      else if (event.target.className === 'lista-item selected') {
        event.target.className = 'lista-item';
      } 
      else if (event.target.className === 'lista-item selected completed' || event.target.className === 'lista-item completed selected') {
        event.target.className = 'lista-item completed';
      }
    } 
    else if (clickCount === 2) {
      clickCount = 0;
      if (event.target.className === 'lista-item') {
        event.target.className = 'lista-item completed';
      }
      else if (event.target.className === 'lista-item selected') {
        event.target.className = 'lista-item selected completed';
      }
      else if (event.target.className === 'lista-item completed') {
        event.target.className = 'lista-item';
      } 
      else if (event.target.className === 'lista-item selected completed' || event.target.className === 'lista-item completed selected') {
        event.target.className = 'lista-item selected';
      }
    }
  }, 400);
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
    console.log(taskItems[i].style.backgroundColor);
    if (taskItems[i].style.textDecoration === 'line-through') {
      taskItems[i].remove();
    }
  }
});
