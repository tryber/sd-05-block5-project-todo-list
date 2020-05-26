// ao clicar no botão criar-tarefa, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

let buttonNewTask = document.getElementById("criar-tarefa");
let inputText = document.getElementById("texto-tarefa");

function newTask() {
  let newTaskList = document.createElement("li");
  document.getElementById("lista-tarefas").appendChild(newTaskList); // para adicionar elemento li no pai ol
  newTaskList.innerHTML = "" + inputText.value; // para transferir o input texto em novo item de lista
}

buttonNewTask.addEventListener("click", newTask);