window.onload = function () {

 const buttonHTML = document.getElementsByTagName('button');
 const listHTML = document.getElementsByTagName('ol');
 const createTaskButton = document.getElementById("criar-tarefa");
 const inputValue = document.getElementById('texto-tarefa');
 const taskList = document.getElementById("lista-tarefas");


 // function to add the cursor pointer
 const cursorFunction = (event) => {
  for (let i = 0; i < event.length; i += 1) {
   let index = event[i];
   index.style.cursor = "pointer";
  }
 }

 //  button cursor function 
 cursorFunction(buttonHTML)

 //  list cursor function
 cursorFunction(listHTML)

 // trigger create task and click to select with a grey background
 createTaskButton.addEventListener("click", () => {
  const list = document.createElement('li');
  const orderList = document.querySelectorAll('ol')[0];
  const textValue = inputValue.value;
  list.innerHTML = textValue;
  orderList.appendChild(list);
  inputValue.value = '';
  list.addEventListener("click", checkBackgroundColorItem);
  list.addEventListener("dblclick", checkCompletedItem);
 });

// function to set a line-trough to the items
 const checkCompletedItem = (event) => {
  const item = event.target;
  const complete = item.classList.contains('completed');
  if (complete === false) {
   item.classList.add('completed');
  } else {
   item.classList.remove('completed');
  }
 };
 
// function to set a grey background-color
 const checkBackgroundColorItem = (event) => {
  const item = event.target;
  const complete = item.classList.contains('selected');
  if (complete === false) {
   item.classList.add('selected');
  } else {
   item.classList.remove('selected');
  }
 };

}