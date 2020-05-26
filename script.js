// ao clicar no botão criar-tarefa, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

let buttonNewTask = document.getElementById("criar-tarefa");

 function newTask () {
  let newTaskList = document.createElement("li");
  document.getElementById("lista-tarefas").appendChild(newTaskList);
 }

 buttonNewTask.addEventListener("click", newTask);