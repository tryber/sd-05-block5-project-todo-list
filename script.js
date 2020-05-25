// add a event listener to the button to create a list item
const btn = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

btn.addEventListener('click', function() {
  let listItemToBeCreated = document.createElement('li');
  listItemToBeCreated.id = 'lista-item';
  listItemToBeCreated.innerHTML = task.value;
  taskList.appendChild(listItemToBeCreated);
  task.value = '';
});

// function ot change the color of the list item
function changeColor (event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
};

// function to strikthrough a list item
function strikeThrough (event) {
  event.target.style.textDecoration = 'line-through';
};

// add event listener to change list item color when it's clicked 
let clickCount = 0;
taskList.addEventListener('click', function (event) {
  clickCount += 1;
  let singleClickTimer = setTimeout(function() {
    if (clickCount === 1) {
      clickCount = 0;
      if (event.target.style.backgroundColor === 'rgb(128,128,128)') {
        event.target.style.backgroundColor = 'red';
      } 
      else {
        event.target.style.backgroundColor = 'rgb(128,128,128)';
      }
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

/* add event listener to strikethrough a list item when double-clicked
taskList.addEventListener('click', function (event) {
  let listItem = document.getElementById('lista-item');
  event.target.style.textDecoration = 'line-through';
});
*/

// add a button the clear all list itens
const clearTasks = document.getElementById('apaga-tudo');
clearTasks.addEventListener('click', function () {
  taskList.innerHTML = '';
})