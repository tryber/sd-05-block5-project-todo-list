window.onload = function () {

 const buttonHTML = document.getElementsByTagName('button');
 const listHTML = document.getElementsByTagName('ol');
 const createTaskButton = document.getElementById("criar-tarefa");
 const inputValue = document.getElementById('texto-tarefa');




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


 // // trigger event to creake a task
 //  const orderList = document.querySelectorAll('ol')[0];
 //  const textValue = inputValue.value;
 //  let list = document.createElement('li');
 //  list.ondblclick = () => (list.style.backgroundColor = "grey")
 //  list.innerHTML = textValue;
 //  orderList.appendChild(list);
 //  inputValue.value = '';

  
 
   createTaskButton.addEventListener("click", () => {
    const list = document.createElement('li');
    const orderList = document.querySelectorAll('ol')[0];
    const textValue = inputValue.value;
    list.innerHTML = textValue;
    orderList.appendChild(list);
    inputValue.value = '';
    list.ondblclick = () => (list.style.backgroundColor = "grey")
   })  
 
  



}